import s from "./Music.module.css";
import { Howl, Howler } from "howler";

export function Music() {
  const kick = new Howl({
    src: [`${process.env.PUBLIC_URL}/Samples/Drums_mp3/Kick_02.mp3`],
  });
  const hat = new Howl({
    src: [`${process.env.PUBLIC_URL}/Samples/Drums_mp3/Hat_01.mp3`],
  });
  const clap = new Howl({
    src: [`${process.env.PUBLIC_URL}/Samples/Drums_mp3/Clap_06.mp3`],
  });
  const bass = new Howl({
    src: [`${process.env.PUBLIC_URL}/Samples/Drums_mp3/Bass_01.mp3`],
  });

  return (
    <div>
      <div className={s.playground}>
        <button className={s.pad} onTouchStart={() => kick.play()}>
          Kick mp3
        </button>
        <button className={s.pad} onTouchStart={() => hat.play()}>
          Hat mp3
        </button>
        <button className={s.pad} onTouchStart={() => clap.play()}>
          Clap mp3
        </button>
        <button className={s.pad} onTouchStart={() => bass.play()}>
          Bass mp3
        </button>
      </div>
      <div className={s.playground}>
        <button className={s.pad} onClick={() => kick.play()}>
          Kick mp3
        </button>
        <button className={s.pad} onClick={() => hat.play()}>
          Hat mp3
        </button>
        <button className={s.pad} onClick={() => clap.play()}>
          Clap mp3
        </button>
        <button className={s.pad} onClick={() => bass.play()}>
          Bass mp3
        </button>
      </div>
    </div>
  );
}
