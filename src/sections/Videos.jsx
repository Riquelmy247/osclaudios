import { getVideos, siteData } from "../data/data";
import VideoGallery from "../components/VideoGallery";
import Button from "../components/Button";
import { InstagramIcon } from "../components/Icons";
import Reveal from "../components/Reveal";

export default function Videos() {
  const videos = getVideos();

  return (
    <section className="section" id="videos">
      <div className="container">
        <Reveal>
          <p className="kicker">{siteData.videos.kicker}</p>
          <h2 className="section-title">{siteData.videos.title}</h2>
        </Reveal>

        {videos.length ? (
          <Reveal delay={80}>
            <VideoGallery videos={videos} />
          </Reveal>
        ) : (
          <Reveal className="media-empty" delay={80}>
            <p>{siteData.videos.emptyHint}</p>
            <Button href={siteData.instagram.url} target="_blank">
              <InstagramIcon size={18} />
              {siteData.labels.followInstagram}
            </Button>
          </Reveal>
        )}
      </div>
    </section>
  );
}
