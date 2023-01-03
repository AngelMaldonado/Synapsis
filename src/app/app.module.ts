import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ViewComponent } from './components/view/view.component';
import { AlgconfigComponent } from './components/algconfig/algconfig.component';
import { RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: 'Arrays', component: ViewComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ViewComponent,
    AlgconfigComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
