import { Component, Inject, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  contacts = [];

  constructor(@Inject("Sfdc") private sfdc) {}

  ngOnInit() {
    this.sfdc.getContacts().then(contacts => {
      this.contacts = contacts;
      console.log(this.contacts);
    });
  }
}
