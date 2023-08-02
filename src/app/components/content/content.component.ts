import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {DataService, IList} from "../../services/data.service";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  title = 'read-list';
  $list!: Observable<IList[]>;
  currentLink: SafeResourceUrl = '';
  link: string = null!;
  showMenu = true;

  constructor(private dataService: DataService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.$list = this.dataService.getReadingList();
  }

  showContent(link:string) {
    this.currentLink = this.sanitizer.bypassSecurityTrustResourceUrl(link);
    this.link = link;
    this.toggleMenu();
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
