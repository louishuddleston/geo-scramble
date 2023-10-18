import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GuessInputComponent } from './components/guess-input/guess-input.component';
import { GuessListComponent } from './components/guess-list/guess-list.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { ShareButtonComponent } from './components/share-button/share-button.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    GuessInputComponent,
    GuessListComponent,
    TopNavComponent,
    ShareButtonComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
