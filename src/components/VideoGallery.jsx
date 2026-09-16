import { useState } from "react";
import { publicUrl } from "../data/data";
import VideoModal from "./VideoModal";

export default function VideoGallery({ videos }) {
  const [current, setCurrent] = useState(null);

  if (!videos?.length) return null;

  return (
    <>
      <div className="video-grid">
        {videos.map((video) => (
          <button key={video.src} className="video-card" onClick={() => setCurrent(video)}>
            <div className="video-thumb">
              {video.thumbnail ? (
                <img src={publicUrl(video.thumbnail)} alt="" loading="lazy" />
              ) : null}
              <span className="play-btn" aria-hidden="true">
                ▶
              </span>
            </div>
            <h3>{video.title || "Os Claudios"}</h3>
          </button>
        ))}
      </div>
      {current ? <VideoModal video={current} onClose={() => setCurrent(null)} /> : null}
    </>
  );
}
