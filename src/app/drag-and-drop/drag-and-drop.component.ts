import { Component, OnInit } from '@angular/core';
import { CdkDragStart, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Item } from '../models/item';
import { alterItemsArray } from './helpers';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss'],
})
export class DragAndDropComponent {
  items: Item[];
  selectedItems: Item[] = [];
  isDragging = false;

  constructor() {
    this.items = [
      { id: 1, name: 'Jon Snow', checked: false },
      { id: 2, name: 'Daenerys Targaryen', checked: false },
      { id: 3, name: 'Eddard "Ned" Stark', checked: false },
      { id: 4, name: 'Sansa Stark', checked: false },
      { id: 5, name: 'Jaime Lannister', checked: false },
      { id: 6, name: 'Annya Start', checked: false },
      { id: 7, name: 'Robert Baratheon', checked: false },
      { id: 8, name: 'Theon Greyjoy', checked: false },
    ];
  }

  onDragStarted(event: CdkDragStart, index: number): void {
    this.isDragging = true;
  }

  drop(event: CdkDragDrop<string[]>): void {
    this.isDragging = false;
    // let targetIndex = event.currentIndex;

    alterItemsArray(this.items, event.previousIndex, event.currentIndex, this.selectedItems);
    // moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    this.items.forEach((item) => {
      item.checked = false;
    });

    this.selectedItems = [];
  }

  onSelectItem(event): void {
    this.selectedItems = [];

    for (const item of this.items) {
      if (item.checked) {
        this.selectedItems.push(item);
      }
    }
  }
}
