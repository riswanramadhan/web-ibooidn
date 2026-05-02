import { WHATSAPP_ORDER_URL } from "@/lib/constants";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      <a
        aria-label="Order Iboo.idn via WhatsApp"
        className="w-14 h-14 bg-whatsapp-brand text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
        href={WHATSAPP_ORDER_URL}
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="material-symbols-outlined text-2xl whatsapp-icon">
          chat
        </span>
      </a>
    </div>
  );
}
