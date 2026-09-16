import { useEffect } from "react";

export default function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const item = items[index];

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    };

    document.body.classList.add("modal-open");
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div className="overlay" role="dialog" aria-modal="true" aria-label="Foto em tela cheia" onClick={onClose}>
      <button className="overlay-close" onClick={onClose} aria-label="Fechar">
        ×
      </button>
      {items.length > 1 ? (
        <>
          <button
            className="overlay-nav prev"
            onClick={(event) => {
              event.stopPropagation();
              onPrev();
            }}
            aria-label="Foto anterior"
          >
            ‹
          </button>
          <button
            className="overlay-nav next"
            onClick={(event) => {
              event.stopPropagation();
              onNext();
            }}
            aria-label="Próxima foto"
          >
            ›
          </button>
        </>
      ) : null}
      <img
        src={item.src}
        alt={item.alt || "Os Claudios"}
        onClick={(event) => event.stopPropagation()}
      />
      <p className="overlay-count">
        {index + 1} / {items.length}
      </p>
    </div>
  );
}
