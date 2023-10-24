import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FinderComponent } from './components/finder/finder.component';
import { DataComponent } from './components/data/data.component';
import { ImageComponent } from './components/image/image.component';
import { RegexComponent } from './components/regex/regex.component';
import { HistorialComponent } from './components/historial/historial.component';
import { HttpClientModule } from '@angular/common/http';

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
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
