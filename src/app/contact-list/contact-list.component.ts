import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-contact-list",
  templateUrl: "./contact-list.component.html",
  styleUrls: ["./contact-list.component.css"]
})
export class ContactListComponent implements OnInit {
  @Input() contacts: Array<Object>;
  @Input() level: String;
  constructor() {}

  ngOnInit() {
    console.log(this.contacts);
  }
}
