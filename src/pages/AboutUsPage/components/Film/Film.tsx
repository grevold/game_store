import s from "./Film.module.css";

export function Film() {
  return (
    <div className={s.root}>
      <h1 className={s.header}>Посмотрите ролик о нашей компании</h1>
      <iframe
        className={s.video}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/xej0Uzz0140"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
