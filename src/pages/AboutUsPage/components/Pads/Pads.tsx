import { useRef } from "react";
import s from "./Pads.module.css";

export function Pads() {
  const kick = useRef(new Audio(`${process.env.PUBLIC_URL}/samples/Kick.mp3`));
  const hat = useRef(new Audio(`${process.env.PUBLIC_URL}/samples/Hat.mp3`));
  const snare = useRef(
    new Audio(`${process.env.PUBLIC_URL}/samples/Snare.mp3`)
  );
  const chord1 = useRef(
    new Audio(`${process.env.PUBLIC_URL}/samples/Chord1.mp3`)
  );
  const chord2 = useRef(
    new Audio(`${process.env.PUBLIC_URL}/samples/Chord2.mp3`)
  );

  function trigger(sample: any) {
    sample.pause();
    sample.currentTime = 0.0;
    sample.play();
  }
  function triggerAndPlayNeighbour(sample: any, neighbourSample: any) {
    neighbourSample.pause();
    neighbourSample.currentTime = 0.0;
    trigger(sample);
  }

  function padTouchStart(sample: any) {
    sample.play();
  }
  function padTouchEnd(sample: any) {
    sample.pause();
    sample.currentTime = 0.0;
  }

  //   useKeyPressEvent(`a`, () => trigger(kick.current));
  //   useKeyPressEvent(`s`, () => trigger(hat.current));
  //   useKeyPressEvent(`d`, () => trigger(snare.current));

  //   useKeyPressEvent(`f`, () =>
  //     triggerAndPlayNeighbour(chord1.current, chord2.current)
  //   );
  //   useKeyPressEvent(`g`, () =>
  //     triggerAndPlayNeighbour(chord2.current, chord1.current)
  //   );

  //   useKeyPressEvent(`h`, () => padTouchStart(chord1.current));
  //   useKeyPressEvent(`h`, () => padTouchEnd(chord1.current));

  return (
    <div className={s.root}>
      <button
        className={s.padTrigger}
        id={"a"}
        onClick={() => trigger(kick.current)}
      ></button>
      <button
        className={s.padTrigger}
        id={"s"}
        onClick={() => trigger(hat.current)}
      ></button>
      <button
        className={s.padTrigger}
        id={"d"}
        onClick={() => trigger(snare.current)}
      ></button>
      <button
        className={s.padGate}
        id={"f"}
        onClick={() => triggerAndPlayNeighbour(chord1.current, chord2.current)}
      ></button>
      <button
        className={s.padGate}
        id={"g"}
        onClick={() => triggerAndPlayNeighbour(chord2.current, chord1.current)}
      ></button>
      <button
        className={s.padGate}
        id={"h"}
        onTouchStart={() => padTouchStart(chord1.current)}
        onTouchEnd={() => padTouchEnd(chord1.current)}
      ></button>
      <button
        className={s.padTrigger}
        id={"a"}
        onClick={() => trigger(kick.current)}
      ></button>
      <button
        className={s.padTrigger}
        id={"s"}
        onClick={() => trigger(hat.current)}
      ></button>
      <button
        className={s.padTrigger}
        id={"d"}
        onClick={() => trigger(snare.current)}
      ></button>
      <button
        className={s.padGate}
        id={"f"}
        onClick={() => triggerAndPlayNeighbour(chord1.current, chord2.current)}
      ></button>
      <button
        className={s.padGate}
        id={"g"}
        onClick={() => triggerAndPlayNeighbour(chord2.current, chord1.current)}
      ></button>
      <button
        className={s.padGate}
        id={"h"}
        onTouchStart={() => padTouchStart(chord1.current)}
        onTouchEnd={() => padTouchEnd(chord1.current)}
      ></button>
    </div>
  );
}
