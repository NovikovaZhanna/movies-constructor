import styles from "./styles.module.scss";
import { FC, ReactNode, useState } from "react";
import { useClickOutside } from "src/lib/hooks/hooks";
import cn from "classnames";

type TOuterProps = {
  children: ReactNode;
  open: boolean;
  className?: string;
  onClose: () => void;
};

const Dialog: FC<TOuterProps> = ({ children, open, className, onClose }) => {
  const ref = useClickOutside(onClose);

  if (!open) {
    return null;
  }

  return (
    <div className={cn(styles.dialog, className)} ref={ref}>
      <button className={styles.buttonCloseDialog} onClick={onClose}>
        X
      </button>
      {children}
    </div>
  );
};

export default Dialog;
