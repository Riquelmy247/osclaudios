import { getWhatsAppUrl, siteData } from "../data/data";
import Button from "../components/Button";
import { InstagramIcon, WhatsAppIcon } from "../components/Icons";
import Reveal from "../components/Reveal";

export default function Contact() {
  return (
    <section className="section contact-section" id="contato">
      <div className="container">
        <Reveal>
          <p className="kicker">{siteData.contactSection.kicker}</p>
          <h2 className="section-title">{siteData.contactSection.title}</h2>
        </Reveal>

        <div className="contact-grid">
          <a className="contact-card" href={siteData.contact.phoneLink}>
            <span>{siteData.labels.shows}</span>
            <strong>{siteData.contact.phone}</strong>
            <p>{siteData.contact.responsible}</p>
          </a>
          <a className="contact-card" href={siteData.instagram.url} target="_blank" rel="noopener noreferrer">
            <span>Instagram</span>
            <strong>{siteData.instagram.username}</strong>
            <p>Shows, bastidores e novidades</p>
          </a>
        </div>

        <div className="contact-actions">
          <Button href={getWhatsAppUrl("hire")} target="_blank">
            <WhatsAppIcon size={18} />
            {siteData.labels.whatsapp}
          </Button>
          <Button href={siteData.instagram.url} target="_blank" variant="outline">
            <InstagramIcon size={18} />
            {siteData.labels.instagram}
          </Button>
        </div>
      </div>
    </section>
  );
}
