import { FC } from "react";
import { TMovie } from "src/lib/stores/moviesStore";
import Column from "../PageStructure/Column";
import Row from "../PageStructure/Row";
import styles from "./styles.module.scss";

type TOuterProps = {
  item: TMovie;
  onDelete?: () => void;
  onEdit?: () => void;
};

const InfoCard: FC<TOuterProps> = ({ item, onDelete, onEdit }) => {
  return (
    <div className={styles.container}>
      <div className={styles.textContent}>
        <h3>{item.title}</h3>
        <p>{item.overview}</p>
      </div>
      {item.backdrop_path ? (
        <img className={styles.image} src={item.backdrop_path} />
      ) : null}
      <Row className={styles.bottomRow}>
        <button className={styles.delete} onClick={onDelete}>
          Удалить
        </button>
        <button className={styles.edit} onClick={onEdit}>
          Редактировать
        </button>
      </Row>
    </div>
  );
};

export default InfoCard;
