import { MoviesStore } from "./moviesStore";
import { SeriesStore } from "./seriesStore";
export class RootStore {
  moviesStore = new MoviesStore();
  seriesStore = new SeriesStore();
}
