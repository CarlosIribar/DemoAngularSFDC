import { Component, OnInit, Inject } from "@angular/core";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  constructor(@Inject("Sfdc") private sfdc) {}

  timeout;
  ngOnInit() {}

  changeInput() {
    console.log("changeInput");
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      this.sfdc.filterContacts();
    }, 300);
  }
}
