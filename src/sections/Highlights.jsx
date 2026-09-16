import { siteData } from "../data/data";
import { highlightIcons } from "../components/Icons";
import Reveal from "../components/Reveal";

export default function Highlights() {
  return (
    <section className="section highlights">
      <div className="container">
        <Reveal>
          <p className="kicker kicker-center">
            A experiência no seu evento
          </p>
          <h2 className="section-title">O que Os Claudios levam para a festa</h2>
        </Reveal>
        <div className="highlight-grid">
          {siteData.highlights.map((item, index) => {
            const Icon = highlightIcons[item.icon] || highlightIcons.mic;
            return (
              <Reveal key={item.id} delay={index * 80}>
                <article className="highlight-card">
                  <div className="icon">
                    <Icon />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
