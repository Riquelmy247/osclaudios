import { siteData } from "../data/data";
import Button from "../components/Button";
import { InstagramIcon } from "../components/Icons";
import Reveal from "../components/Reveal";

export default function Instagram() {
  const instagram = siteData.instagram;

  return (
    <section className="section instagram" id="instagram" aria-labelledby="instagram-titulo">
      <div className="container">
        <Reveal>
          <p className="kicker">{instagram.kicker}</p>
          <h2 className="section-title" id="instagram-titulo">
            {instagram.title}
          </h2>
          <p className="section-text">{instagram.text}</p>
        </Reveal>

        <div className="instagram-panel">
          <div className="instagram-copy">
            <div className="instagram-profile">
              <span className="instagram-badge" aria-hidden="true">
                <InstagramIcon />
              </span>
              <div>
                <h3>{instagram.username}</h3>
                <p>{instagram.profileSubtitle}</p>
              </div>
            </div>
            <p className="section-text">{instagram.text}</p>
            <Button href={instagram.url} target="_blank">
              <InstagramIcon size={18} />
              {siteData.labels.followInstagram}
            </Button>
          </div>

          <div className="instagram-frame">
            <iframe
              src={instagram.embedUrl}
              title={`Página do Instagram ${instagram.username}`}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
