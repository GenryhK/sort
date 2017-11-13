import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import {GlobalService} from './services/global.service';

const routes = [
  {path: '', component: FirstComponent},
  {path: 'second', component: SecondComponent}
  ]
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes)
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
