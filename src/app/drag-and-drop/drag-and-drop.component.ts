import { Component, OnInit } from '@angular/core';
import { CdkDragStart, CdkDragDrop } from '@angular/cdk/drag-drop';
import { Movie, getMovies } from './movie';
import { moveItemsInArray } from './moveInArray';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss'],
})
export class DragAndDropComponent {
  movies: Movie[];
  selectedMovies: Movie[] = [];
  isDragging = false;

  constructor() {
    this.movies = getMovies();
  }

  onDragStarted(event: CdkDragStart, index: number): void {
    console.log(event);
    this.isDragging = true;
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    this.isDragging = false;
    moveItemsInArray(this.movies, event.previousIndex, event.currentIndex, this.selectedMovies);
    for (let i = 0; i < this.movies.length; i++) {
      this.movies[i].id = i;
      this.movies[i].checked = false;
    }
    this.selectedMovies = [];
  }

  onTouch(event, idx: number) {
    console.log(this.isDragging);

    this.selectedMovies = [];
    const selectedItem: Movie = this.movies[idx];
    selectedItem.checked = !selectedItem.checked;

    for (const item of this.movies) {
      if (item.checked) {
        this.selectedMovies.push(item);
      }
    }
  }
}
