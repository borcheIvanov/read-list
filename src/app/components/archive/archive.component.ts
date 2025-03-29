import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {DataService} from "../../services/data.service";
import {IListItem} from "../../models";

@Component({
  selector: 'app-archive',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.scss'
})
export class ArchiveComponent {
  archivedLinks:IListItem[] = [];

  constructor(public dataService: DataService) {
    this.dataService.getReadingList().subscribe({
      next: (result) => this.archivedLinks = result,
      error: (e) => console.error(`oh no.. error: ${e}`)
    })
  }


}
