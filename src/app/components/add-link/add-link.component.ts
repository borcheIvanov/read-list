import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.scss']
})
export class AddLinkComponent implements OnInit {

  link: FormControl = null!;
  isSaveSuccessful = true;
  recentLinks: string[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.link = new FormControl('');
  }

  saveLink(): void {
    const value = this.link.value;

    if (value) {
      this.dataService.addLink(value).subscribe(_ => {
        this.recentLinks.push(value);
        this.link.setValue('');
      }, _ => {
        this.isSaveSuccessful = false;
      });
    }
  }


}
