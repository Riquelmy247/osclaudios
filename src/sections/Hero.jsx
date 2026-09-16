import { useEffect, useRef } from "react";
import { getWhatsAppUrl, hasHeroMedia, publicUrl, siteData } from "../data/data";
import Button from "../components/Button";
import { NoteIcon, PandeiroIcon } from "../components/Icons";

export default function Hero() {
  const bgRef = useRef(null);
  const media = siteData.media.hero;
  const hasMedia = hasHeroMedia();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return undefined;

    const onScroll = () => {
      if (!bgRef.current) return;
      const y = window.scrollY;
      bgRef.current.style.transform = `translateY(${y * 0.28}px) scale(1.08)`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" ref={bgRef}>
        {media.video ? (
          <video
            className="hero-video"
            src={publicUrl(media.video)}
            poster={media.image ? publicUrl(media.image) : undefined}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : null}
        {media.image && !media.video ? (
          <img className="hero-photo" src={publicUrl(media.image)} alt={siteData.name} />
        ) : null}
      </div>

      <div className="hero-light one" />
      <div className="hero-light two" />
      <div className="hero-light three" />
      <div className="hero-orb gold" />
      <div className="hero-orb red" />
      <div className="hero-overlay" />

      <div className="hero-notes" aria-hidden="true">
        <NoteIcon className="n1" />
        <PandeiroIcon className="n2" />
        <NoteIcon className="n3" />
      </div>

      <div className="hero-inner">
        <p className="hero-badge">Pai e Filho no palco</p>
        <h1 className="sr-only">{siteData.name}</h1>
        <img
          className="hero-logo"
          src={publicUrl(siteData.media.logo)}
          alt=""
        />
        <p className="hero-slogan">{siteData.slogan}</p>
        <p className="hero-desc">{siteData.description}</p>
        <p className="hero-phrase">{siteData.phrase}</p>
        <div className="hero-actions">
          <Button href={getWhatsAppUrl("default")} target="_blank">
            {siteData.labels.hire}
          </Button>
          <Button href="#instagram" variant="outline">
            {siteData.labels.instagram}
          </Button>
        </div>
      </div>

      {!hasMedia ? <span className="sr-only">Hero preparado para receber foto ou vídeo em data.js</span> : null}
    </section>
  );
}
