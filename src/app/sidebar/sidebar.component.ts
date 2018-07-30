import { Component, OnInit, Inject, Input } from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  @Input() level: String;
  constructor(@Inject("Sfdc") private sfdc) {}

  ngOnInit() {}
}
