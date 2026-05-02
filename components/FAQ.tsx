"use client";

import { useState } from "react";
import { faqItems } from "@/data/faq";
import { cn } from "@/lib/cn";

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-light-sage dark:bg-primary-dark/10" id="bantuan">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-primary-dark dark:text-white mb-4">
            Bantuan
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            Pertanyaan yang paling sering ditanyakan seputar produk, konsumsi,
            dan pemesanan Iboo.idn.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqItems.map((item, index) => (
            <div
              className={cn(
                "accordion-item bg-white dark:bg-slate-800 rounded-large border border-slate-200 dark:border-slate-700 text-left interactive-card overflow-hidden",
                index === faqItems.length - 1 && "md:col-span-2",
                activeIndex === index && "active is-selected",
              )}
              key={item.question}
            >
              <button
                className="w-full flex items-center justify-between p-8 text-left"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                type="button"
              >
                <h3 className="text-lg font-bold text-primary-dark dark:text-white">
                  {index + 1}. {item.question}
                </h3>
                <span className="material-symbols-outlined arrow-icon transition-transform text-primary-dark dark:text-white">
                  expand_more
                </span>
              </button>
              <div className="accordion-content">
                <div className="px-8 pb-8 text-slate-500 dark:text-slate-400 text-sm">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
