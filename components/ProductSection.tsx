"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { productOrder, products, type ProductKey } from "@/data/products";
import { MARKETPLACE_URL, WHATSAPP_ORDER_URL } from "@/lib/constants";
import { cn } from "@/lib/cn";
import { useInView } from "@/hooks/useInView";

const productObserverOptions: IntersectionObserverInit = {
  threshold: 0.2,
  rootMargin: "0px 0px -90px 0px",
};

type VariantSelectorProps = {
  activeKey: ProductKey;
  onSelect: (variantKey: ProductKey) => void;
  order: ProductKey[];
  products: Record<ProductKey, { name: string }>;
  buttonRefs: React.MutableRefObject<Record<ProductKey, HTMLButtonElement | null>>;
};

function ProductVariantSelector({
  activeKey,
  onSelect,
  order,
  products,
  buttonRefs,
}: VariantSelectorProps) {
  return (
    <div className="mt-8">
      <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar scroll-smooth">
        {order.map((key) => {
          const product = products[key];
          const isActive = key === activeKey;

          return (
            <button
              aria-pressed={isActive}
              className={cn(
                "flex-shrink-0 px-4 py-2 rounded-full border-2 text-sm transition-all",
                isActive
                  ? "border-primary-dark bg-primary-dark text-white font-extrabold scale-105 shadow-md shadow-primary-dark/20"
                  : "border-slate-200 dark:border-slate-700 hover:border-primary-dark font-semibold dark:text-slate-300",
              )}
              key={key}
              onClick={() => onSelect(key)}
              ref={(element) => {
                buttonRefs.current[key] = element;
              }}
              type="button"
            >
              {product.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function ProductSection() {
  const [activeKey, setActiveKey] = useState<ProductKey>("purple_freak");
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const [isSwitching, setIsSwitching] = useState(false);
  const [isImagePopped, setIsImagePopped] = useState(false);
  const { ref, isInView } = useInView<HTMLElement>(productObserverOptions);
  const touchStartX = useRef(0);
  const popTimer = useRef<number | null>(null);
  const buttonRefs = useRef<Record<ProductKey, HTMLButtonElement | null>>({
    purple_freak: null,
    ginger_shot: null,
    turmeric_shot: null,
    carrot_crush: null,
    celery_shot: null,
  });

  const activeProduct = products[activeKey];
  const accordionItems = [
    {
      icon: "eco",
      title: "Komposisi",
      content: (
        <ul className="space-y-3">
          {activeProduct.composition.map((item) => (
            <li className="flex items-start gap-3" key={item}>
              <span className="material-symbols-outlined text-primary-dark text-sm mt-1">
                check_circle
              </span>
              {item}
            </li>
          ))}
        </ul>
      ),
    },
    {
      icon: "biotech",
      title: "Cara penyimpanan dan konsumsi",
      content: (
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-light-sage dark:bg-slate-900 p-4 rounded-xl">
            <p className="text-xs font-bold uppercase text-slate-400 mb-1">
              Cara Penyimpanan
            </p>
            <p className="font-bold text-primary-dark dark:text-white">
              {activeProduct.storage.title}
            </p>
            <p>{activeProduct.storage.detail}</p>
          </div>
          <div className="bg-light-sage dark:bg-slate-900 p-4 rounded-xl">
            <p className="text-xs font-bold uppercase text-slate-400 mb-1">
              Konsumsi
            </p>
            <p className="font-bold text-primary-dark dark:text-white">
              {activeProduct.consumption.title}
            </p>
            <p>{activeProduct.consumption.detail}</p>
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    setIsSwitching(true);
    const timer = window.setTimeout(() => setIsSwitching(false), 280);
    return () => window.clearTimeout(timer);
  }, [activeKey]);

  useEffect(() => {
    return () => {
      if (popTimer.current) window.clearTimeout(popTimer.current);
    };
  }, []);

  const selectProductVariant = (variantKey: ProductKey) => {
    setActiveKey(variantKey);
    buttonRefs.current[variantKey]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  const scrollProductVariants = (direction: number) => {
    const currentIndex = productOrder.indexOf(activeKey);
    const nextIndex =
      (currentIndex + direction + productOrder.length) % productOrder.length;
    selectProductVariant(productOrder[nextIndex]);
  };

  const popImage = () => {
    setIsImagePopped(true);
    if (popTimer.current) window.clearTimeout(popTimer.current);
    popTimer.current = window.setTimeout(() => setIsImagePopped(false), 180);
  };

  return (
    <section
      className="relative overflow-hidden pt-8 pb-24 hero-gradient"
      id="produk"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div
          className={cn(
            "relative group reveal-up",
            isInView && "is-visible",
          )}
        >
          <div className="absolute -inset-4 bg-primary-dark/5 rounded-large blur-3xl group-hover:bg-primary-dark/10 transition-all duration-700" />
          <div className="relative">
            <button
              aria-label="Geser varian ke kiri"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 text-primary-dark dark:text-slate-200 flex items-center justify-center hover:border-primary-dark transition-colors shadow-md"
              onClick={() => scrollProductVariants(-1)}
              type="button"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button
              aria-label="Geser varian ke kanan"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 text-primary-dark dark:text-slate-200 flex items-center justify-center hover:border-primary-dark transition-colors shadow-md"
              onClick={() => scrollProductVariants(1)}
              type="button"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
            <Image
              alt={activeProduct.imageAlt}
              className={cn(
                "w-full aspect-square object-cover rounded-3xl image-pop",
                isSwitching && "product-switching",
                isImagePopped && "is-pop",
              )}
              height={1000}
              id="product-main-image"
              key={activeProduct.image}
              onClick={popImage}
              onTouchEnd={(event) => {
                const deltaX =
                  event.changedTouches[0].clientX - touchStartX.current;
                if (Math.abs(deltaX) < 40) return;
                scrollProductVariants(deltaX < 0 ? 1 : -1);
              }}
              onTouchStart={(event) => {
                touchStartX.current = event.changedTouches[0].clientX;
              }}
              priority
              quality={80}
              sizes="(min-width: 1024px) 520px, 90vw"
              src={activeProduct.image}
              style={{
                objectPosition:
                  activeProduct.imagePosition || "center center",
              }}
              width={1000}
            />
            {activeProduct.showBestSeller && (
              <div className="absolute top-4 right-4 bg-white/55 dark:bg-slate-800/55 backdrop-blur-md px-3 py-2 rounded-xl shadow-lg border border-white/40 dark:border-slate-500/40 flex items-center gap-2">
                {activeProduct.showBadgeIcon && (
                  <div className="bg-primary-dark/10 p-1.5 rounded-full">
                    <span className="material-symbols-outlined text-slate-900 dark:text-white">
                      workspace_premium
                    </span>
                  </div>
                )}
                <div>
                  <p className="text-sm font-[900] text-slate-900 dark:text-white uppercase tracking-wider">
                    Best Seller
                  </p>
                </div>
              </div>
            )}
          </div>

          <ProductVariantSelector
            activeKey={activeKey}
            buttonRefs={buttonRefs}
            onSelect={selectProductVariant}
            order={productOrder}
            products={products}
          />
        </div>

        <div
          className={cn(
            "space-y-8 reveal-up",
            isInView && "is-visible",
          )}
          style={{ transitionDelay: "70ms" }}
        >
          <div>
            <span className="inline-block px-5 py-2 bg-accent-orange text-white font-bold rounded-full text-base mb-6">
              PRODUK KAMI
            </span>
            <h1 className="text-5xl font-extrabold text-primary-dark dark:text-white leading-tight mb-4">
              {activeProduct.name}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong>{activeProduct.descriptionLead}</strong>{" "}
              {activeProduct.descriptionBody}
            </p>
          </div>

          <div className="space-y-4">
            {accordionItems.map((item, index) => (
              <div
                className={cn(
                  "accordion-item border border-slate-200 dark:border-slate-700 rounded-2xl bg-white dark:bg-slate-800/50 overflow-hidden shadow-sm",
                  activeAccordion === index && "active",
                )}
                key={item.title}
              >
                <button
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-primary-dark dark:text-white"
                  onClick={() =>
                    setActiveAccordion(activeAccordion === index ? null : index)
                  }
                  type="button"
                >
                  <span className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-accent-orange">
                      {item.icon}
                    </span>
                    {item.title}
                  </span>
                  <span className="material-symbols-outlined arrow-icon transition-transform">
                    expand_more
                  </span>
                </button>
                <div className="accordion-content">
                  <div className="p-5 pt-0 text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-700 mt-4">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-700">
            <div className="flex flex-wrap gap-4">
              <a
                className="group flex items-center gap-3 bg-whatsapp-brand px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-white"
                href={WHATSAPP_ORDER_URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-3xl whatsapp-icon">
                  chat
                </span>
                <div className="text-left">
                  <p className="text-xs font-bold text-white/80 uppercase tracking-widest leading-none">
                    Order On
                  </p>
                  <p className="text-lg font-extrabold">WhatsApp</p>
                </div>
                <span className="material-symbols-outlined text-white group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
              <a
                className="group flex items-center gap-3 bg-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all border border-slate-200 dark:border-slate-700 dark:bg-slate-800"
                href={MARKETPLACE_URL}
              >
                <span className="material-symbols-outlined text-whatsapp-brand text-3xl whatsapp-icon">
                  chat
                </span>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-none">
                    Order on
                  </p>
                  <p className="text-lg font-extrabold text-primary-dark dark:text-white">
                    Marketplace
                  </p>
                </div>
                <span className="material-symbols-outlined text-primary-dark dark:text-white group-hover:translate-x-1 transition-transform">
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
