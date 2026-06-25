import Image from "next/image";
import { partners } from "@/data/partners";
import { cn } from "@/lib/cn";

export function Partner() {
  return (
    <section
      className="py-20 px-4 bg-light-sage dark:bg-primary-dark/10"
      id="partner"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="inline-flex items-center justify-center bg-accent-orange text-white font-extrabold tracking-widest uppercase text-xl md:text-2xl mb-6 px-6 py-2 rounded-full">
            Didukung Oleh Mitra Terpercaya
          </h2>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Iboo.idn didukung oleh mitra-mitra terpercaya seperti DekatLokal
            dan Rumah BUMN Makassar untuk memberikan layanan terbaik kepada
            pelanggan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {partners.map((partner) => {
            const content = (
              <Image
                alt={partner.alt}
                className={partner.imageClassName}
                height={partner.height}
                quality={80}
                sizes="(min-width: 768px) 240px, 70vw"
                src={partner.image}
                width={partner.width}
              />
            );

            return (
              <div
                className={cn(
                  "flex items-center justify-center min-h-[140px] transition-transform duration-300 hover:-translate-y-2",
                  partner.cardClassName,
                )}
                key={partner.name}
              >
                {partner.name === "DekatLokal" ? (
                  <a
                    aria-label="DekatLokal"
                    className="flex items-center justify-center"
                    href="https://dekatlokal.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
