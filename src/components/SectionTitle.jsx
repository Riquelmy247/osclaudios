export default function SectionTitle({ kicker, title, subtitle, align = "left" }) {
  return (
    <div className={`section-heading ${align === "center" ? "is-center" : ""}`}>
      {kicker ? <p className="kicker">{kicker}</p> : null}
      <h2 className="section-title">{title}</h2>
      {subtitle ? <p className="section-text">{subtitle}</p> : null}
    </div>
  );
}
