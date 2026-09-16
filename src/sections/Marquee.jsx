import { siteData } from "../data/data";

export default function Marquee() {
  const loop = [...siteData.marquee, ...siteData.marquee];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <div className="marquee-group">
          {loop.map((item, index) => (
            <span key={`a-${item}-${index}`}>{item}</span>
          ))}
        </div>
        <div className="marquee-group">
          {loop.map((item, index) => (
            <span key={`b-${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
