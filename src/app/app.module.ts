import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EmailSetupService } from './email-setup.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Contact } from './contact';
// import { SplitPipe } from './split.pipe';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [EmailSetupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
