import Image from "next/image";
import { WHATSAPP_ORDER_URL } from "@/lib/constants";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Produk", href: "#produk" },
  { label: "Reseller", href: "#mitra" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Bantuan", href: "#bantuan" },
];

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        <div className="flex items-center">
          <a
            className="flex items-center gap-3 text-2xl font-extrabold text-primary-dark dark:text-light-sage"
            href="#beranda"
          >
            <Image
              alt="Logo Iboo.idn wellness shot alami"
              className="h-10 w-10 object-cover rounded-full"
              height={40}
              quality={80}
              sizes="40px"
              src="/images/logo-iboo.png.png"
              width={40}
              priority
            />
            <span>
              Iboo<span className="text-accent-orange">.idn</span>
            </span>
          </a>
        </div>

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 font-medium">
          {navItems.map((item) => (
            <a
              className="hover:text-accent-orange transition-colors"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            className="bg-accent-orange text-white text-sm px-5 py-2 rounded-full font-semibold md:ml-2 hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20"
            href={WHATSAPP_ORDER_URL}
            rel="noopener noreferrer"
            target="_blank"
          >
            Order Now
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
