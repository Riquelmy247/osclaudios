import { getWhatsAppUrl, siteData } from "../data/data";
import { WhatsAppIcon } from "./Icons";

export default function WhatsAppButton() {
  return (
    <a
      className="wa-float"
      href={getWhatsAppUrl("default")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chamar ${siteData.contact.responsible} no WhatsApp`}
    >
      <WhatsAppIcon size={30} />
    </a>
  );
}
