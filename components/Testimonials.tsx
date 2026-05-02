import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900" id="testimoni">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent-orange font-bold tracking-widest uppercase text-base">
            Testimoni
          </span>
          <h2 className="text-4xl font-extrabold text-primary-dark dark:text-white mt-2 mb-4">
            Apa kata konsumen kami
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            Kisah nyata dari orang-orang yang telah mengonsumsi Iboo.idn
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              className="relative bg-light-sage dark:bg-slate-800/50 p-6 rounded-2xl border border-primary-dark/5 dark:border-slate-700 flex flex-col h-full transition-all duration-300 interactive-card"
              key={`${testimonial.name}-${testimonial.age}`}
            >
              <span className="material-symbols-outlined absolute top-4 right-4 text-slate-300 dark:text-slate-600 text-2xl">
                format_quote
              </span>
              <div className="flex text-accent-orange text-[20px] mb-3">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    className="material-symbols-outlined material-symbols-filled"
                    key={index}
                  >
                    star
                  </span>
                ))}
              </div>
              <p className="text-base text-slate-700 dark:text-slate-300 italic mb-6 flex-grow">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border-2 border-white shadow-md bg-primary-dark text-white font-bold text-xs flex items-center justify-center">
                  {testimonial.initial}
                </div>
                <div>
                  <p className="font-bold text-sm text-primary-dark dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-[11px] text-slate-400 font-medium">
                    {testimonial.age}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
