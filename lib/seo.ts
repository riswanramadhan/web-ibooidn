import type { ProductKey } from "@/data/products";

export const SITE_URL = "https://ibooidn.dekatlokal.com";
export const BRAND_NAME = "Iboo.idn";
export const SITE_NAME = "Iboo.idn - DekatLokal";

export const SEO_TITLE =
  "Iboo.idn | Wellness Shot Buah Sayur dan Rempah Alami - DekatLokal";

export const SEO_DESCRIPTION =
  "Iboo.idn menghadirkan wellness shot 70 ml berbahan buah, sayur, dan rempah alami, tanpa gula dan air tambahan, praktis untuk rutinitas sehat.";

export const SOCIAL_TITLE =
  "Iboo.idn | Wellness Shot Buah Sayur dan Rempah Alami";

export const TWITTER_TITLE = "Iboo.idn | Wellness Shot Alami 70 ml";

export const TWITTER_DESCRIPTION =
  "Wellness shot alami dari buah, sayur, dan rempah pilihan untuk rutinitas gaya hidup sehat.";

export const HERO_IMAGE_PATH = "/images/hero-banner.jpg.PNG";
export const OG_IMAGE_PATH = "/images/iboo-og-image.jpg";
export const LOGO_IMAGE_PATH = "/images/logo-iboo.png.png";

export const HERO_IMAGE_ALT =
  "Iboo.idn wellness shot 70 ml berbahan buah sayur dan rempah alami";

export const SAFE_PRODUCT_DESCRIPTIONS: Record<ProductKey, string> = {
  purple_freak:
    "Purple Freak Iboo.idn adalah wellness shot 70 ml berbahan ekstrak buah bit, wortel, apel, jahe, dan lemon, tanpa tambahan gula, air, pengawet, pewarna, dan perasa buatan.",
  ginger_shot:
    "Ginger Shot Iboo.idn adalah varian wellness shot berbahan rempah alami untuk rutinitas gaya hidup sehat.",
  turmeric_shot:
    "Turmeric Shot Iboo.idn adalah varian wellness shot berbahan rempah alami untuk rutinitas gaya hidup sehat.",
  carrot_crush:
    "Carrot Crush Iboo.idn adalah varian wellness shot berbahan buah dan sayur alami untuk rutinitas gaya hidup sehat.",
  celery_shot:
    "Celery Shot Iboo.idn adalah varian wellness shot berbahan sayur alami untuk rutinitas gaya hidup sehat.",
};

export function absoluteUrl(path: string) {
  return new URL(path, `${SITE_URL}/`).toString();
}
