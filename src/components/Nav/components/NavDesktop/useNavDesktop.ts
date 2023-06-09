import { useEffect, useRef } from "react";
import { useWindowScroll } from "react-use";

const SCROLL_TRANSITION_START = 300;

export function useNavDesktop() {
  const ref = useRef<HTMLElement>(null);
  const { y } = useWindowScroll(); // scroll-прогресс

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    root.style.backgroundColor =
      y > SCROLL_TRANSITION_START
        ? "rgba(145, 70, 255, 0)"
        : "rgba(145, 70, 255, 1)";
  }, [y]);

  return { ref };
}
