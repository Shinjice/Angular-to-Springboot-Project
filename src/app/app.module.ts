import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AanmakenComponent } from './medewerkeraanmaken/medewerkeraanmaken.component';
import { VerwijderComponent } from './verwijdermedewerker/verwijdermedewerker.component';
import { UserRegistationService } from './medewerker-aanmaken.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AanmakenComponent,
    VerwijderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserRegistationService],
  bootstrap: [AppComponent]
})

export class AppModule { }
