import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ViewComponent } from './components/view/view.component';
import { AlgconfigComponent } from './components/algconfig/algconfig.component';
import { RouterModule, Routes} from "@angular/router";
import { FormsModule } from "@angular/forms";

const routes: Routes = [
  { path: 'Arrays', component: ViewComponent },
  { path: 'Graphs', component: ViewComponent },
  { path: 'AI', component: ViewComponent },
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
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
