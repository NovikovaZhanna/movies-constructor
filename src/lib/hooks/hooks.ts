import { BaseSyntheticEvent, useEffect, useRef } from "react";

export function useClickOutside(
  onClose: (event: BaseSyntheticEvent | Event) => void
) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const listener = (event: BaseSyntheticEvent | Event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      onClose(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, onClose]);

  return ref;
}
