import styles from "./styles.module.scss";
import { FC, ReactNode } from "react";

type TProps = {
  columns: number;
  children: ReactNode;
};

const GridColumns: FC<TProps> = ({ columns, children }) => {
  return (
    <div
      className={styles.container}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
    >
      {children}
    </div>
  );
};

export default GridColumns;
