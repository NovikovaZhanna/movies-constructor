import { makeAutoObservable } from "mobx";

export type TSeries = {
  name: string;
  overview: string;
  backdrop_path: string;
  id: string;
};

const seriesString = localStorage.getItem("series");
const seriesData = seriesString ? JSON.parse(seriesString || "") : [];

export class SeriesStore {
  series: TSeries[] = seriesData;

  addSeries = (series: TSeries) => {
    this.series.push(series);
    localStorage.setItem("series", JSON.stringify(this.series));
  };
  removeSingleSeries = (id: string) => {
    const series = this.series.filter((item) => item.id !== id);
    this.series = series;
    localStorage.setItem("series", JSON.stringify(series));
  };

  constructor() {
    makeAutoObservable(this, {
      series: true,
    });
  }
}
