import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchComponent} from './search/search.component';

const routes: Routes = [
  { path: 'search', pathMatch:'full', component: SearchComponent }
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes, {
    useHash: true,
    enableTracing: true
  }) ],
})

export class AppRoutingModule {}