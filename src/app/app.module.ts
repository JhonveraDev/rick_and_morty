import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FinderComponent } from './components/finder/finder.component';
import { DataComponent } from './components/data/data.component';
import { ImageComponent } from './components/image/image.component';
import { RegexComponent } from './components/regex/regex.component';
import { HistorialComponent } from './components/historial/historial.component';

@NgModule({
  declarations: [
    AppComponent,
    FinderComponent,
    DataComponent,
    ImageComponent,
    RegexComponent,
    HistorialComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
