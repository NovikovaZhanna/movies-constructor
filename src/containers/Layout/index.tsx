import { FC, ReactNode } from "react";

import styles from "./styles.module.scss";
import Header from "../../components/Header";

type TProps = {
  children: ReactNode;
};

const Layout: FC<TProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Layout;
