import { MARKETPLACE_URL, WHATSAPP_ORDER_URL } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 px-6 py-16 md:py-20 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_60%)]" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-accent-orange/15 blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              Yuk, Mulai Rawat Tubuhmu Hari Ini!
            </h2>
            <p className="text-sm md:text-base text-white/90 mb-12 max-w-4xl mx-auto md:whitespace-nowrap">
              Satu shot Iboo.idn dapat mengingkatkan energi dan kesehatanmu
              secara konsisten.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                className="group flex items-center gap-3 bg-accent-orange px-7 py-3 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all w-full sm:w-auto text-white"
                href={MARKETPLACE_URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-white text-3xl whatsapp-icon">
                  chat
                </span>
                <div className="text-left">
                  <p className="text-xs font-bold text-white/80 uppercase tracking-widest leading-none">
                    Order on
                  </p>
                  <p className="text-lg font-extrabold">Marketplace</p>
                </div>
                <span className="material-symbols-outlined text-white group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
              <a
                className="group flex items-center gap-3 bg-white px-7 py-3 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all w-full sm:w-auto"
                href={WHATSAPP_ORDER_URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-whatsapp-brand text-3xl whatsapp-icon">
                  chat
                </span>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-none">
                    Order On
                  </p>
                  <p className="text-lg font-extrabold text-whatsapp-brand">
                    WhatsApp
                  </p>
                </div>
                <span className="material-symbols-outlined text-whatsapp-brand group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
