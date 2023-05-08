import { useEffect } from "react";

export function useProductSlider() {
  useEffect(() => {
    const buttonPrev = document.querySelector(".swiper-button-prev");
    const buttonNext = document.querySelector(".swiper-button-next");
    if (!buttonPrev || !buttonNext) {
      return;
    }
    buttonPrev.innerHTML = "<";
    buttonNext.innerHTML = ">";
  }, []);
}
