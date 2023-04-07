import { makeAutoObservable } from "mobx";

export type TMovie = {
  title: string;
  overview: string;
  backdrop_path: string;
  id: string;
};

const moviesString = localStorage.getItem("films") || "";
const moviesData = moviesString ? JSON.parse(moviesString || "") : [];

export class MoviesStore {
  movies: TMovie[] = moviesData;

  addMovies = (movie: TMovie) => {
    this.movies.push(movie);
    localStorage.setItem("films", JSON.stringify(this.movies));
  };
  removeMovie = (id: string) => {
    const movies = this.movies.filter((item) => item.id !== id);
    this.movies = movies;
    localStorage.setItem("films", JSON.stringify(movies));
  };

  constructor() {
    makeAutoObservable(this, {
      movies: true,
    });
  }
}
