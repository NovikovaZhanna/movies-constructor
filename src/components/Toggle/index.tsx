import React, { FC } from "react";
import styles from "./styles.module.scss";
type TProps = {
  checked: boolean;
  onClick?: () => void;
};

const Toggle: FC<TProps> = ({ checked, onClick }) => {
  return (
    <div className={styles.container}>
      <label className={styles.toggle} htmlFor="toggler">
        <input
          id="toggler"
          type="checkbox"
          onClick={onClick}
          checked={checked}
          readOnly
        />
        <span className={styles.slider} />
        <span className={styles.wave} />
      </label>
    </div>
  );
};

export default Toggle;
