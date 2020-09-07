import { Component, OnInit } from '@angular/core';
import { CdkDragStart, CdkDragDrop } from '@angular/cdk/drag-drop';
import { Item } from '../models/item';
import { moveItemsInArray } from './moveInArray';

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
      { id: 0, name: 'One', checked: false },
      { id: 1, name: 'Two', checked: false },
      { id: 2, name: 'Three', checked: false },
      { id: 3, name: 'Four', checked: false },
      { id: 4, name: 'Five', checked: false },
      { id: 5, name: 'Six', checked: false },
      { id: 6, name: 'Seven', checked: false },
      { id: 7, name: 'Eight', checked: false },
    ];
  }

  onDragStarted(event: CdkDragStart, index: number): void {
    this.isDragging = true;
  }

  drop(event: CdkDragDrop<string[]>) {
    this.isDragging = false;
    moveItemsInArray(this.items, event.previousIndex, event.currentIndex, this.selectedItems);
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].id = i;
      this.items[i].checked = false;
    }
    this.selectedItems = [];
  }

  onSelectItem(event, idx: number) {
    // console.log(this.isDragging);

    this.selectedItems = [];
    const selectedItem: Item = this.items[idx];
    selectedItem.checked = !selectedItem.checked;

    for (const item of this.items) {
      if (item.checked) {
        this.selectedItems.push(item);
      }
    }
  }
}
