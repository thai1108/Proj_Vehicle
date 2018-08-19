import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { MidComponent } from './mid/mid.component';
import { BotComponent } from './bot/bot.component';
import { InputTextComponent } from './input-text/input-text.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    MidComponent,
    BotComponent,
    InputTextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
