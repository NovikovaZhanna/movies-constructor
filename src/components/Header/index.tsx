import styles from "./styles.module.scss";
import { FC } from "react";
import ThemeSwitcher from "../ThemeSwitcher";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <button>Главная</button>
      </Link>
      <Link to="/movies">
        <button>Фильмы</button>
      </Link>
      <Link to="/series">
        <button>Сериалы</button>
      </Link>
      <Link to="/contacts">
        <button>Контакты</button>
      </Link>

      <ThemeSwitcher className={styles.themeSwitcher} />
    </div>
  );
};

export default Header;
