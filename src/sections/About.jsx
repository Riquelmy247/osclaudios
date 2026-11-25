import { getWhatsAppUrl, publicUrl, siteData } from "../data/data";
import Button from "../components/Button";
import Reveal from "../components/Reveal";

export default function About() {
  const photos = siteData.media.aboutPhotos;

  return (
    <section className="section about" id="sobre">
      <div className="container about-grid">
        <Reveal className="about-visual">
          <div className="frame frame-main">
            <img
              src={publicUrl(photos.main)}
              alt="Claudio, Os Claudios"
              loading="lazy"
            />
            <div className="frame-caption">
              <b>PAI</b>
              <span>Os Claudios</span>
            </div>
          </div>
          <p className="about-badge">
            <span>Pagode</span>
            <strong>em família</strong>
          </p>
        </Reveal>

        <Reveal className="about-copy" delay={120}>
          <p className="kicker">{siteData.about.kicker}</p>
          <h2 className="section-title">
            Pai e filhos,
            <span>uma paixão pelo pagode</span>
          </h2>
          {siteData.about.paragraphs.map((text) => (
            <p className="section-text" key={text}>
              {text}
            </p>
          ))}
          <Button href={getWhatsAppUrl("hire")} target="_blank">
            {siteData.labels.hire}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
