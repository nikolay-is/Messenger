import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { FormsModule }   from '@angular/forms';
// import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { AppRoutesModule } from './routes.modules';

import { ValidateService } from './services/validate.service';

import { AuthService } from './services/auth.service'
import { FlashMessagesModule } from 'angular2-flash-messages';

// import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    // CommonModule,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutesModule,
    FlashMessagesModule
  ],
  providers: [ValidateService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
