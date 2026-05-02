import { resellers } from "@/data/resellers";
import { JOIN_RESELLER_URL } from "@/lib/constants";

export function ResellerSection() {
  return (
    <section className="py-24 bg-light-sage dark:bg-slate-900/50" id="mitra">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-primary-dark dark:text-white mb-4">
            Reseller Kami
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            Temukan produk kami di berbagai wilayah Sulawesi Selatan
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {resellers.map((reseller) => (
            <a
              className="bg-white dark:bg-slate-800 p-8 rounded-large border border-slate-200 dark:border-slate-700 hover:border-accent-orange transition-all shadow-sm group interactive-card cursor-pointer flex flex-col min-h-[260px]"
              href={reseller.url}
              key={`${reseller.location}-${reseller.name}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 bg-primary-dark text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                  {reseller.location}
                </span>
                <span className="material-symbols-outlined text-primary-dark dark:text-light-sage opacity-20 group-hover:opacity-100 transition-opacity">
                  location_on
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-6">
                {reseller.name}
              </h3>
              <span className="inline-flex items-center justify-center gap-2 w-full py-3 bg-whatsapp-brand text-white rounded-xl font-bold hover:scale-[1.02] transition-transform shadow-lg shadow-green-500/20 mt-auto">
                <span className="material-symbols-outlined text-xl whatsapp-icon">
                  chat
                </span>
                Shop Now
              </span>
            </a>
          ))}
          <a
            className="bg-primary-dark p-8 rounded-large border border-primary-dark flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-emerald-900 transition-colors interactive-card"
            href={JOIN_RESELLER_URL}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-accent-orange text-4xl mb-4 group-hover:scale-110 transition-transform">
              add_circle
            </span>
            <p className="text-white font-bold">Join Reseller Kami</p>
          </a>
        </div>
      </div>
    </section>
  );
}
