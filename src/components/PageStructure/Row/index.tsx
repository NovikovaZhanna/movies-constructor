import styles from "./styles.module.scss";
import { FC, ReactNode } from "react";
import cn from "classnames";

type TProps = {
  children: ReactNode;
  className?: string;
};

const Row: FC<TProps> = ({ children, className }) => {
  return <div className={cn(styles.container, className)}>{children}</div>;
};

export default Row;
