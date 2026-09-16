import { useEffect, useState } from "react";
import { getWhatsAppUrl, publicUrl, siteData } from "../data/data";
import Button from "./Button";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <div className="header-inner">
        <a className="brand" href="#inicio" onClick={close}>
          <img src={publicUrl(siteData.media.logo)} alt={siteData.name} />
        </a>

        <nav className="nav" aria-label="Principal">
          {siteData.nav.map((item) => (
            <a key={item.id} className="nav-link" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <Button className="header-cta" href={getWhatsAppUrl("default")} target="_blank">
            {siteData.labels.hire}
          </Button>
          <button
            className="menu-toggle"
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span className={open ? "is-open" : ""} />
          </button>
        </div>
      </div>
      {open ? (
        <nav className="mobile-nav" aria-label="Mobile">
          {siteData.nav.map((item) => (
            <a key={item.id} href={item.href} onClick={close}>
              {item.label}
            </a>
          ))}
          <Button href={getWhatsAppUrl("default")} target="_blank" onClick={close}>
            {siteData.labels.hire}
          </Button>
        </nav>
      ) : null}
    </header>
  );
}
