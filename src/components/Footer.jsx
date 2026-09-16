import { publicUrl, siteData } from "../data/data";
import { InstagramIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img className="footer-logo" src={publicUrl(siteData.media.logo)} alt={siteData.name} />
          <p>{siteData.slogan}</p>
        </div>

        <div className="footer-links">
          <a href={siteData.instagram.url} target="_blank" rel="noopener noreferrer">
            <InstagramIcon size={16} /> {siteData.instagram.username}
          </a>
          <a href={siteData.contact.phoneLink}>
            {siteData.labels.shows}: {siteData.contact.phone} — {siteData.contact.responsible}
          </a>
        </div>

        <div className="footer-links">
          <a href={siteData.production.url} target="_blank" rel="noopener noreferrer">
            {siteData.labels.production} {siteData.production.instagram}
          </a>
          {siteData.nav.map((item) => (
            <a key={item.id} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <div className="container footer-copy">{siteData.footer.copyright}</div>
    </footer>
  );
}
