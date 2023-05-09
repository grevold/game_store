import { useEffect } from "react";
import { Arrow } from "../../../../../../icons/Arrow";

export function useProductSlider() {
  useEffect(() => {
    const buttonPrev = document.querySelector(".swiper-button-prev");
    const buttonNext = document.querySelector(".swiper-button-next");
    if (!buttonPrev || !buttonNext) {
      return;
    }

    buttonPrev.innerHTML = `<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="36" cy="36" r="35" stroke="white" stroke-width="2"/>
    <path d="M42 24L28 36.5L42 49" stroke="white" stroke-width="2" stroke-linecap="round"/>
    </svg>`;
    buttonNext.innerHTML = `<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="36" cy="36" r="35" stroke="white" stroke-width="2" />
    <path d="M32 49L46 36.5L32 24" stroke="white" stroke-width="2" stroke-linecap="round" />
</svg>`;
  }, []);
}
