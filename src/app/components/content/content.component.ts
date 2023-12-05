import { Component } from '@angular/core';
import { DataService } from "../../services/data.service";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { ILink, IListItem } from 'src/app/models';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  title = 'read-list';
  list: IListItem[] = [];
  currentLink: SafeResourceUrl = '';
  link: ILink | null = null;
  showMenu = true;

  constructor(private dataService: DataService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.fillList();
  }

  fillList(){
    this.list = [];
    this.dataService.getReadingList().subscribe({
      next: (result) => this.list = result,
      error: (e) => console.error(`oh no.. error: ${e}`)
    });
  }

  showContent(link: ILink) {
    this.currentLink = this.sanitizer.bypassSecurityTrustResourceUrl(link.address);
    this.link = link;
    this.toggleMenu();
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  archive(): void {
    this.dataService.archive(this.link!.id).subscribe({
      next: (response) => {
        if (response) {
          this.clearState()
        }
      },
      error: (error) => {
        console.log(`a wild error appeared: ${error}`)
      }
    })
  }

  clearState() {
    this.link = null;
    this.currentLink = '';

  }

  delete(): void {
    this.dataService.delete(this.link!.id).subscribe({
      next: (response) => {
        if (response) {
          this.clearState()
        }
      },
      error: (error) => {
        console.log(`a wild error appeared: ${error}`)
      }
    })
  }

}
