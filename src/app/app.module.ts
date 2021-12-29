import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { SearchPipePipe } from './search/search-pipe.pipe';
import { SortPipePipe } from './sort/sort-pipe.pipe';
import { SortPipe2Pipe } from './sort2/sort-pipe2.pipe';
import { SortPipe3Pipe } from './sort3/sort-pipe3.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    SearchPipePipe,
    SortPipePipe,
    SortPipe2Pipe,
    SortPipe3Pipe,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }