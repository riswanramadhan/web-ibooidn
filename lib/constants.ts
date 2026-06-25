export const WHATSAPP_MAIN_NUMBER = "6289506977942";
export const WHATSAPP_PHONE_E164 = "+6289506977942";

export function createWhatsappUrl(phoneNumber: string, message: string) {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_ORDER_URL = createWhatsappUrl(
  WHATSAPP_MAIN_NUMBER,
  "Halo Kak, saya dapat info dari website DekatLokal Iboo.idn. Saya ingin bertanya tentang wellness shot dan pemesanan.",
);

export const JOIN_RESELLER_URL = createWhatsappUrl(
  WHATSAPP_MAIN_NUMBER,
  "Halo Kak, saya dapat info dari website DekatLokal Iboo.idn. Saya tertarik bergabung menjadi reseller Iboo.idn.",
);

export const INSTAGRAM_URL = "https://www.instagram.com/iboo.idn/";

export const MARKETPLACE_URL = createWhatsappUrl(
  WHATSAPP_MAIN_NUMBER,
  "Halo Kak, saya dapat info dari website DekatLokal Iboo.idn. Saya ingin bertanya tentang opsi pemesanan marketplace Iboo.idn.",
);
