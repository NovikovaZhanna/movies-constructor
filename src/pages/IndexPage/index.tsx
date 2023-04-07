import styles from "./styles.module.scss";
import InfoCard from "../../components/InfoCard";
import GridColumns from "../../components/PageStructure/GridColumns";
import { useState } from "react";
import Column from "../../components/PageStructure/Column";
import Dialog from "src/components/Dialog";
import { useStore } from "src/lib/stores/rootStoreContext";
import { observer } from "mobx-react-lite";
import { TMovie } from "src/lib/stores/moviesStore";
import { nanoid } from "nanoid";

const IndexPage = observer(() => {
  const { moviesStore, seriesStore } = useStore();

  const [dialogOpen, setDialogOpen] = useState(false);

  // FOR CARD ITEM
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [category, setCategory] = useState("films");
  const [selectedItem, setSelectedItem] = useState<TMovie | null>(null);

  const onEdit = () => {
    const item = {
      title: title,
      overview: subtitle,
      backdrop_path: imageUrl,
      id: nanoid(),
    };

    if (category === "films") {
      const index = moviesStore.movies.findIndex(
        (item) => item.id === selectedItem!.id
      );
      moviesStore.movies[index] = item;
    } else {
      const index = seriesStore.series.findIndex(
        (item) => item.id === selectedItem!.id
      );
      seriesStore.series[index] = { ...item, name: item.title };
    }

    setSelectedItem(null);
    setDialogOpen(false);
    setTitle("");
    setSubtitle("");
    setImageUrl("");
  };

  const onAdd = () => {
    if (category === "films") {
      moviesStore.addMovies({
        title: title,
        overview: subtitle,
        backdrop_path: imageUrl,
        id: nanoid(),
      });
    } else {
      seriesStore.addSeries({
        name: title,
        overview: subtitle,
        backdrop_path: imageUrl,
        id: nanoid(),
      });
    }

    setDialogOpen(false);
    setTitle("");
    setSubtitle("");
    setImageUrl("");
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.cardAddButton}
        onClick={() => setDialogOpen(true)}
      >
        + Добавить
      </button>
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        className={styles.dialog}
      >
        <p className={styles.titleDialog}>Выберите категорию</p>
        <select
          className={styles.select}
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="films">Фильмы</option>
          <option value="series">Сериалы</option>
        </select>
        <input
          className={styles.input}
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          placeholder="Название"
        />
        <input
          className={styles.input}
          value={subtitle}
          onChange={(event) => {
            setSubtitle(event.target.value);
          }}
          placeholder="Описание"
        />
        <Column>
          <div className={styles.titleDialog}>Обложка</div>
          <div
            className={styles.imageWrapper}
            style={{
              backgroundImage: imageUrl ? `url(${imageUrl})` : "unset",
            }}
          >
            <input
              type="file"
              className={styles.openUrl}
              accept=".jpg, .jpeg, .png"
              onChange={(event) => {
                if (event.target.files?.[0]) {
                  setImageUrl(URL.createObjectURL(event.target.files[0]));
                }
              }}
            />
          </div>
        </Column>
        <div className={styles.actions}>
          {selectedItem ? (
            <button className={styles.buttonDialog} onClick={onEdit}>
              Сохранить
            </button>
          ) : (
            <button className={styles.buttonDialog} onClick={onAdd}>
              Добавить
            </button>
          )}
          <button
            className={styles.buttonDialog}
            onClick={() => setDialogOpen(false)}
          >
            Отмена
          </button>
        </div>
      </Dialog>
      {!!moviesStore.movies.length && (
        <div>
          <span className={styles.span}>Мои фильмы</span>
          <GridColumns columns={3}>
            {moviesStore.movies.map((item, index, arr) => (
              <InfoCard
                key={index}
                item={item}
                onDelete={() => {
                  moviesStore.removeMovie(item.id);
                }}
                onEdit={() => {
                  setSelectedItem(item);
                  setTitle(item.title);
                  setSubtitle(item.overview);
                  setImageUrl(item.backdrop_path);
                  setDialogOpen(true);
                }}
              />
            ))}
          </GridColumns>
        </div>
      )}
      {!!seriesStore.series.length && (
        <div>
          <span className={styles.span}>Мои сериалы</span>
          <GridColumns columns={3}>
            {seriesStore.series.map((item, index, arr) => (
              <InfoCard
                key={index}
                item={{ ...item, title: item.name }}
                onDelete={() => {
                  seriesStore.removeSingleSeries(item.id);
                }}
                onEdit={() => {
                  setSelectedItem({ ...item, title: item.name });
                  setTitle(item.name);
                  setSubtitle(item.overview);
                  setImageUrl(item.backdrop_path);
                  setDialogOpen(true);
                }}
              />
            ))}
          </GridColumns>
        </div>
      )}
    </div>
  );
});

export default IndexPage;
