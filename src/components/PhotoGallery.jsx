import { useState } from "react";
import Lightbox from "./Lightbox";

export default function PhotoGallery({ photos }) {
  const [active, setActive] = useState(null);

  if (!photos?.length) return null;

  const close = () => setActive(null);
  const prev = () => setActive((i) => (i + photos.length - 1) % photos.length);
  const next = () => setActive((i) => (i + 1) % photos.length);

  return (
    <>
      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            className="gallery-item"
            onClick={() => setActive(index)}
            aria-label={photo.alt || `Abrir foto ${index + 1}`}
          >
            <img src={photo.src} alt={photo.alt || "Os Claudios"} loading="lazy" />
          </button>
        ))}
      </div>
      {active !== null ? (
        <Lightbox items={photos} index={active} onClose={close} onPrev={prev} onNext={next} />
      ) : null}
    </>
  );
}
