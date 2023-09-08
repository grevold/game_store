import s from "./Music.module.css";

export function Music() {
  function playKick() {
    let audio = new Audio(
      `${process.env.PUBLIC_URL}/Samples/Drums_mp3/Kick_02.mp3`
    );
    audio.play();
  }
  function playHat() {
    let audio = new Audio(
      `${process.env.PUBLIC_URL}/Samples/Drums_mp3/Hat_01.mp3`
    );
    audio.play();
  }
  function playClap() {
    let audio = new Audio(
      `${process.env.PUBLIC_URL}/Samples/Drums_mp3/Clap_06.mp3`
    );
    audio.play();
  }
  function playBass() {
    let audio = new Audio(
      `${process.env.PUBLIC_URL}/Samples/Drums_mp3/Bass_01.mp3`
    );
    audio.play();
  }

  function playKickOGG() {
    let audio = new Audio(
      `${process.env.PUBLIC_URL}/Samples/Drums_ogg/Kick_02.ogg`
    );
    audio.play();
  }
  function playHatOGG() {
    let audio = new Audio(
      `${process.env.PUBLIC_URL}/Samples/Drums_ogg/Hat_01.ogg`
    );
    audio.play();
  }
  function playClapOGG() {
    let audio = new Audio(
      `${process.env.PUBLIC_URL}/Samples/Drums_ogg/Clap_06.ogg`
    );
    audio.play();
  }
  function playBassOGG() {
    let audio = new Audio(
      `${process.env.PUBLIC_URL}/Samples/Drums_ogg/Bass_01.ogg`
    );
    audio.play();
  }
  return (
    <div>
      <div className={s.playground}>
        <button className={s.pad} onClick={playKick}>
          Kick mp3
        </button>
        <button className={s.pad} onTouchStart={playHat}>
          Hat mp3
        </button>
        <button className={s.pad} onTouchStart={playClap}>
          Clap mp3
        </button>
        <button className={s.pad} onTouchStart={playBass}>
          Bass mp3
        </button>
      </div>
      <div className={s.playground}>
        <button className={s.pad} onClick={playKickOGG}>
          Kick ogg
        </button>
        <button className={s.pad} onTouchStart={playHatOGG}>
          Hat ogg
        </button>
        <button className={s.pad} onTouchStart={playClapOGG}>
          Clap ogg
        </button>
        <button className={s.pad} onTouchStart={playBassOGG}>
          Bass ogg
        </button>
      </div>
    </div>
  );
}
