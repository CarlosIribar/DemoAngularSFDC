import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {APP_BASE_HREF} from '@angular/common';


import { AppComponent } from "./app.component";
import { SearchComponent } from "./search/search.component";
import { ContactItemComponent } from "./contact-item/contact-item.component";
import { ContactListComponent } from "./contact-list/contact-list.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { SfdcService } from "./sfdc.service";
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ContactItemComponent,
    ContactListComponent,
    SidebarComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [{ provide: "Sfdc", useClass: SfdcService }],
  bootstrap: [AppComponent]
})
export class AppModule {}
