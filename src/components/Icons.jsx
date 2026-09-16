export function InstagramIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.33 4.94L2 22l5.4-1.41a10.1 10.1 0 0 0 4.64 1.12h.01c5.46 0 9.89-4.4 9.89-9.84C21.94 6.4 17.5 2 12.04 2Zm5.76 13.98c-.24.68-1.4 1.3-1.94 1.34-.5.04-1.12.06-1.81-.11-.42-.11-.95-.31-1.64-.6-2.89-1.25-4.77-4.15-4.92-4.35-.14-.2-1.18-1.57-1.18-3 0-1.42.74-2.12 1.01-2.41.26-.28.58-.35.77-.35h.56c.18 0 .42-.07.66.5.24.59.82 2.02.89 2.16.07.14.12.31.02.5-.1.2-.15.31-.3.48-.14.17-.3.37-.43.5-.14.14-.29.29-.12.56.16.28.73 1.2 1.57 1.94 1.08.96 1.98 1.26 2.26 1.4.28.14.44.12.61-.07.16-.2.7-.81.89-1.09.19-.28.37-.23.62-.14.26.09 1.63.77 1.91.91.28.14.47.21.54.33.07.12.07.68-.17 1.36Z" />
    </svg>
  );
}

export function MicIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="9" y="3" width="6" height="11" rx="3" stroke="currentColor" strokeWidth="1.7" />
      <path d="M7 11a5 5 0 0 0 10 0M12 16v4M9 20h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function MusicIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 18V6l10-2v12" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <circle cx="7" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17" cy="16" r="2.5" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export function HeartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FireIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3s2.2 3.1 2.2 5.4c0 1.2-.7 2.2-1.8 2.6 2.4-.2 4.6 1.5 4.6 4.2A5 5 0 0 1 8.2 14c.2-2.6 2.2-3.8 3.1-5.3C12.3 7 12 4.8 12 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function NoteIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M10 18.2a2.7 2.7 0 1 1-1.8-2.55V6.2l10-2.1v9.45a2.7 2.7 0 1 1-1.8-2.55V6.55L10 8.3v9.9Z" />
    </svg>
  );
}

export function PandeiroIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="2" />
      <circle cx="32" cy="32" r="14" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="32" cy="10" r="3.2" stroke="currentColor" />
      <circle cx="50" cy="20" r="3.2" stroke="currentColor" />
      <circle cx="54" cy="38" r="3.2" stroke="currentColor" />
      <circle cx="42" cy="52" r="3.2" stroke="currentColor" />
      <circle cx="22" cy="52" r="3.2" stroke="currentColor" />
      <circle cx="10" cy="38" r="3.2" stroke="currentColor" />
      <circle cx="14" cy="20" r="3.2" stroke="currentColor" />
    </svg>
  );
}

export const highlightIcons = {
  mic: MicIcon,
  music: MusicIcon,
  heart: HeartIcon,
  fire: FireIcon,
};

export function NavIcon({ name }) {
  const props = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  switch (name) {
    case "home":
      return (
        <svg {...props}>
          <path d="M4 10.5 12 4l8 6.5" />
          <path d="M6.5 9.8V20h11V9.8" />
        </svg>
      );
    case "about":
      return (
        <svg {...props}>
          <circle cx="12" cy="8" r="3.1" />
          <path d="M5.5 19.2a6.5 6.5 0 0 1 13 0" />
        </svg>
      );
    case "videos":
      return (
        <svg {...props}>
          <rect x="4" y="6" width="16" height="12" rx="2" />
          <path d="m10 9 6 3-6 3V9Z" />
        </svg>
      );
    case "contact":
      return (
        <svg {...props}>
          <path d="M5.5 18.2 6.4 15A6.8 6.8 0 1 1 18.8 12 6.7 6.7 0 0 1 12 18.6c-1.3 0-2.5-.4-3.6-1L5.5 18.2Z" />
        </svg>
      );
    default:
      return <InstagramIcon />;
  }
}
