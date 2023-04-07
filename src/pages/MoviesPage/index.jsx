import { useState } from "react";
import { useEffect } from "react";
import styles from "./styles.module.scss";
import ScrollWrapper from "src/components/ScrollWrapper";
import Dialog from "src/components/Dialog";
import { useStore } from "src/lib/stores/rootStoreContext";

const imagePreview = "https://image.tmdb.org/t/p/w500/";
const imageDialog = "https://image.tmdb.org/t/p/w780/";

const MoviesPage = () => {
  const { moviesStore } = useStore();

  const [film, setFilm] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectFilm, setSelectFilm] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [isFetching, setIsFetching] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (isFetching) {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=59aa9f71377768db3d80594716b7abc3&language=ru&page=${currentPage}`
      ).then((response) => {
        response
          .json()
          .then((data) => {
            if (currentPage === 1) {
              setFilm([...moviesStore.movies, ...data.results]);
            } else {
              setFilm([...film, ...data.results]);
            }
            setCurrentPage((prevState) => prevState + 1);
          })
          .finally(() => setIsFetching(false));
      });
    }
  }, [isFetching]);

  function handleChangeFilm(e) {
    setSearchQuery(e.target.value);
    if (!e.target.value) {
      setIsFetching(true);
      setCurrentPage(1);
    }
  }
  useEffect(() => {
    if (searchQuery) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=59aa9f71377768db3d80594716b7abc3&language=ru&query=${searchQuery}&page=1&include_adult=false`
      ).then((response) => {
        response.json().then((data) => {
          setFilm([...data.results]);
        });
      });
    }
  }, [searchQuery]);

  return (
    <div className={styles.page}>
      <input
        type="text"
        className={styles.inputType}
        placeholder="Поиск..."
        onChange={handleChangeFilm}
      />
      <ScrollWrapper onScrollToBottom={() => setIsFetching(true)}>
        {film.map((item, index) => (
          <div key={index} className={styles.container}>
            <div className={styles.textContent}>
              <h3>{item.title}</h3>
              <h5>{item.overview}</h5>
            </div>
            <img
              className={styles.imagePreview}
              src={
                item.backdrop_path?.includes("http")
                  ? item.backdrop_path
                  : imagePreview + item.backdrop_path
              }
            />
            <button
              className={styles.buttonOpenDialog}
              onClick={() => {
                setDialogOpen(true);
                setSelectFilm(item);
              }}
            >
              Читать далее...
            </button>
          </div>
        ))}
      </ScrollWrapper>
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        className={styles.dialog}
      >
        <img
          className={styles.imageDialog}
          src={
            selectFilm.backdrop_path?.includes("http")
              ? selectFilm.backdrop_path
              : imagePreview + selectFilm.backdrop_path
          }
        />
        <div className={styles.dialogTextContent}>
          <h3>{selectFilm.title}</h3>
          {selectFilm.overview}
        </div>
      </Dialog>
    </div>
  );
};

export default MoviesPage;
