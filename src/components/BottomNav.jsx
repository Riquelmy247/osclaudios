import { useEffect, useState } from "react";
import { siteData } from "../data/data";
import { NavIcon } from "./Icons";

export default function BottomNav() {
  const items = siteData.mobileNav || [];
  const [active, setActive] = useState(items[0]?.href || "#inicio");

  useEffect(() => {
    if (!items.length) return undefined;

    let observer;

    const observe = () => {
      observer?.disconnect();
      const sections = items
        .map((item) => document.querySelector(item.href))
        .filter(Boolean);

      if (!sections.length) return;

      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (visible?.target?.id) setActive(`#${visible.target.id}`);
        },
        { rootMargin: "-40% 0px -45% 0px", threshold: [0.15, 0.4] },
      );

      sections.forEach((section) => observer.observe(section));
    };

    observe();
    window.addEventListener("hashchange", observe);
    return () => {
      observer?.disconnect();
      window.removeEventListener("hashchange", observe);
    };
  }, [items]);

  if (!items.length) return null;

  return (
    <nav className="bottom-nav" aria-label="Menu inferior">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={active === item.href ? "is-active" : undefined}
          onClick={() => setActive(item.href)}
        >
          <NavIcon name={item.icon} />
          <span>{item.shortLabel || item.label}</span>
        </a>
      ))}
    </nav>
  );
}
