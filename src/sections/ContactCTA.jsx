import { getWhatsAppUrl, siteData } from "../data/data";
import Button from "../components/Button";
import { WhatsAppIcon } from "../components/Icons";
import Reveal from "../components/Reveal";

export default function ContactCTA() {
  return (
    <section className="section cta">
      <div className="container">
        <Reveal>
          <p className="kicker kicker-center">
            Contrate
          </p>
          <h2 className="section-title">{siteData.cta.title}</h2>
          <p className="section-text">{siteData.cta.text}</p>
          <Button className="btn-lg" href={getWhatsAppUrl("hire")} target="_blank">
            <WhatsAppIcon size={18} />
            {siteData.labels.hireCta}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
