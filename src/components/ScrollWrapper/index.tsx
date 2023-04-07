import styles from "./styles.module.scss";
import { BaseSyntheticEvent, FC, ReactNode, useEffect, useRef } from "react";

type TOuterProps = {
  children: ReactNode;
  onScrollToBottom: () => void;
};
const ScrollWrapper: FC<TOuterProps> = ({ children, onScrollToBottom }) => {
  const ref = useRef<HTMLDivElement>(null);

  const scrollHandler = (e: Event | BaseSyntheticEvent) => {
    const containerHeight = e.target.scrollHeight;

    const windowHeight = window.innerHeight;
    const scrollTop = e.target.scrollTop;

    if (containerHeight - (windowHeight + scrollTop) < 100) {
      onScrollToBottom();
    }
  };

  useEffect(() => {
    ref.current?.addEventListener("scroll", scrollHandler);
    return () => {
      ref.current?.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div className={styles.wrapper} ref={ref}>
      {children}
    </div>
  );
};

export default ScrollWrapper;
