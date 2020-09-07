export interface Movie {
  id: number;
  name: string;
  checked: boolean;
}

const movies: Movie[] = [
  { id: 0, name: 'Episode 1 - The Phantom Menace', checked: false },
  { id: 1, name: 'Episode 2 - Attack of the Clones', checked: false },
  { id: 2, name: 'Episode 3 - Revenge of the Sith', checked: false },
  { id: 3, name: 'Episode 4 - A New Hope', checked: false },
  { id: 4, name: 'Episode 5 - The Empire Strikes Back', checked: false },
  { id: 5, name: 'Episode 6 - Return of the Jedi', checked: false },
  { id: 6, name: 'Episode 7 - The Force Awakens', checked: false },
  { id: 7, name: 'Episode 8 - The Last Jedi', checked: false },
];

export function getMovies(): Movie[] {
  return movies.slice();
}
