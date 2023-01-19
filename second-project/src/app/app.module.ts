import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import {FormsModule}from "@angular/forms";
import { UsdinrPipe } from './pipes/usdinr.pipe'
import {ReactiveFormsModule} from "@angular/forms";
import { RedelDirective } from './custom/redel.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    UsdinrPipe,
    RedelDirective
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
