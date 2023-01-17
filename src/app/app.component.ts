import {Component, OnInit} from '@angular/core';
import {DataService, IList} from "./services/data.service";
import {Observable} from "rxjs";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'read-list';
  $list!: Observable<IList[]>;
  currentLink: SafeResourceUrl = '';
  showMenu = true;

  constructor(private dataService: DataService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
   this.$list = this.dataService.getReadingList();
  }

  showContent(link:string) {
    this.currentLink = this.sanitizer.bypassSecurityTrustResourceUrl(link);
    this.toggleMenu();
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
