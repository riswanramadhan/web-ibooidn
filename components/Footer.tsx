import Image from "next/image";
import { INSTAGRAM_URL, WHATSAPP_ORDER_URL } from "@/lib/constants";

const footerPartners = [
  {
    alt: "Logo DekatLokal partner digital Iboo.idn",
    className: "max-h-12 max-w-full object-contain",
    height: 48,
    src: "/images/dekat-lokal (1).png",
    width: 200,
  },
  {
    alt: "Logo Rumah BUMN Makassar pendukung Iboo.idn",
    className: "max-h-16 max-w-full object-contain",
    height: 64,
    src: "/images/rumah-bumn (1).png",
    width: 200,
  },
  {
    alt: "Logo Bank BRI pendukung Iboo.idn",
    className: "max-h-10 max-w-full object-contain",
    height: 40,
    src: "/images/bank-bri (2).png",
    width: 200,
  },
];

export function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-24">
          <div className="lg:col-span-2">
            <a
              className="text-3xl font-extrabold text-primary-dark mb-8 block"
              href="#beranda"
            >
              Iboo<span className="text-accent-orange">.idn</span>
            </a>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-8 leading-relaxed text-base">
              Merawat tubuh dengan sadar, setiap hari.
            </p>
            <div className="flex gap-4">
              <a
                aria-label="WhatsApp Iboo.idn"
                className="w-10 h-10 rounded-full bg-light-sage dark:bg-slate-800 flex items-center justify-center hover:bg-accent-orange hover:text-white transition-all text-primary-dark"
                href={WHATSAPP_ORDER_URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined whatsapp-icon">
                  chat
                </span>
              </a>
              <a
                aria-label="Instagram Iboo.idn"
                className="w-10 h-10 rounded-full bg-light-sage dark:bg-slate-800 flex items-center justify-center hover:bg-accent-orange hover:text-white transition-all text-primary-dark"
                href={INSTAGRAM_URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm8.5 1.5h-8.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5Zm5.25-2.38a1.13 1.13 0 1 1 0 2.26 1.13 1.13 0 0 1 0-2.26Z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-extrabold text-primary-dark dark:text-white mb-6">
              Navigasi
            </h2>
            <ul className="space-y-4 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <li>
                <a
                  className="hover:text-accent-orange transition-colors"
                  href="#beranda"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  className="hover:text-accent-orange transition-colors"
                  href="#tentang"
                >
                  Tentang
                </a>
              </li>
              <li>
                <a
                  className="hover:text-accent-orange transition-colors"
                  href="#produk"
                >
                  Produk
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-extrabold text-primary-dark dark:text-white mb-6">
              Section Lainnya
            </h2>
            <ul className="space-y-4 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <li>
                <a
                  className="hover:text-accent-orange transition-colors"
                  href="#mitra"
                >
                  Reseller
                </a>
              </li>
              <li>
                <a
                  className="hover:text-accent-orange transition-colors"
                  href="#testimoni"
                >
                  Testimoni
                </a>
              </li>
              <li>
                <a
                  className="hover:text-accent-orange transition-colors"
                  href="#bantuan"
                >
                  Bantuan
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-extrabold text-primary-dark dark:text-white mb-6">
              Mitra Kami
            </h2>
            <div className="flex flex-col gap-3 items-start">
              {footerPartners.map((partner) => {
                const logo = (
                  <Image
                    alt={partner.alt}
                    className={partner.className}
                    height={partner.height}
                    quality={80}
                    sizes="200px"
                    src={partner.src}
                    width={partner.width}
                  />
                );

                return (
                  <div className="h-16 w-44 flex items-center" key={partner.alt}>
                    {partner.alt ===
                    "Logo DekatLokal partner digital Iboo.idn" ? (
                      <a
                        aria-label="DekatLokal"
                        className="inline-flex items-center"
                        href="https://dekatlokal.com"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {logo}
                      </a>
                    ) : (
                      logo
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 dark:border-slate-800 flex items-center justify-center">
          <p className="text-slate-400 text-sm text-center">
            &copy;2026 Iboo.idn. All rights reserved | Powered by{" "}
            <a
              className="font-bold underline hover:text-accent-orange"
              href="https://dekatlokal.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              DekatLokal
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
