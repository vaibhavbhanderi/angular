import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'

import { UserAuthModule } from './user-auth/user-auth.module';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from'@angular/material/button'
@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, UserAuthModule, BrowserAnimationsModule,MatSlideToggleModule,MatButtonModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
