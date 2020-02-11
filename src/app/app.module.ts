import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MovieComponent } from './numberlist/numberlist.component';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { BodyComponent } from './body/body.component';

const appRoutes: Routes = [
  { path: 'movie', component: MovieComponent },
  { path: 'nav', component: NavComponent },
  { path: 'body', component: BodyComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    NavComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
