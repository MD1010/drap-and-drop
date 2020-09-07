import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, DragAndDropComponent],
  imports: [BrowserModule, BrowserAnimationsModule, DragDropModule, MatCheckboxModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
