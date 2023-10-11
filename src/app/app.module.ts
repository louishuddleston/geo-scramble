import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GuessInputComponent } from './guess-input/guess-input.component';
import { GuessListComponent } from './guess-list/guess-list.component';
import { TopNavComponent } from './top-nav/top-nav.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    GuessInputComponent,
    GuessListComponent,
    TopNavComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
