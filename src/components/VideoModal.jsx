import { useEffect, useRef } from "react";
import { publicUrl } from "../data/data";

export default function VideoModal({ video, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.classList.add("modal-open");
    window.addEventListener("keydown", onKey);
    ref.current?.play?.().catch(() => {});

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  if (!video) return null;

  return (
    <div className="overlay" role="dialog" aria-modal="true" aria-label={video.title} onClick={onClose}>
      <button className="overlay-close" onClick={onClose} aria-label="Fechar">
        ×
      </button>
      <video
        ref={ref}
        src={publicUrl(video.src)}
        controls
        playsInline
        preload="metadata"
        poster={video.thumbnail ? publicUrl(video.thumbnail) : undefined}
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  );
}
