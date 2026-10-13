import { Link } from "react-router-dom";
import { ArrowUpRight } from "../components/Icons";
import { ApplicationVisual, OperationsVisual, ServicesVisual } from "../components/ServiceVisuals";

const pillars = [
  {
    title: "Applications",
    description: "Mobile and web products built around real customer needs.",
    detail: "iOS · Android · Web",
    visual: ApplicationVisual,
  },
  {
    title: "Custom services",
    description: "Integration, APIs, and product engineering that connect your business.",
    detail: "Engineering · APIs · Advisory",
    visual: ServicesVisual,
  },
  {
    title: "Operations & support",
    description: "Reliable delivery, attentive support, and ongoing improvement.",
    detail: "Release · Support · Scale",
    visual: OperationsVisual,
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="relative mt-4 overflow-hidden rounded-[24px] bg-[#183335] px-6 py-12 text-white sm:px-12 sm:py-16 lg:min-h-[390px] lg:px-16">
        <div className="hero-glow absolute inset-0" />
        <div className="relative grid h-full items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
          <div className="max-w-2xl">
            <p className="mb-5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#8dd7cf]">Software company · Issaquah, WA</p>
            <h1 className="text-[clamp(2.7rem,5.2vw,5.4rem)] font-extrabold leading-[0.96] tracking-[-0.065em] text-balance">
              Software products
              <br />
              <span className="text-[#caf05b]">and services.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/62 sm:text-lg sm:leading-8">
              SPAS LLC designs, builds, and operates digital applications and technology services for businesses and consumers.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/about" className="button-primary">
                Learn about us
                <ArrowUpRight />
              </Link>
              <Link to="/contact" className="button-secondary">
                Contact
              </Link>
            </div>
          </div>

          <div className="relative mx-auto h-[250px] w-full max-w-[420px] sm:h-[280px]">
            <div className="absolute inset-0 rotate-3 rounded-[28px] border border-white/15 bg-white/5" />
            <div className="absolute inset-4 -rotate-2 overflow-hidden rounded-[24px] bg-[#f7f7f1] p-5 text-[#183335] shadow-[0_30px_70px_rgba(0,0,0,.22)]">
              <div className="flex items-center justify-between">
                <div className="flex gap-1.5">
                  <span className="size-2 rounded-full bg-[#183335]/15" />
                  <span className="size-2 rounded-full bg-[#183335]/15" />
                  <span className="size-2 rounded-full bg-[#183335]/15" />
                </div>
                <span className="text-[8px] font-extrabold uppercase tracking-[0.18em] text-[#183335]/45">Overview</span>
              </div>
              <div className="mt-7 grid grid-cols-[1fr_.72fr] gap-3">
                <div className="rounded-xl bg-[#dceeea] p-4">
                  <p className="text-[8px] font-bold uppercase tracking-wider text-[#183335]/50">Product health</p>
                  <p className="mt-1 text-2xl font-extrabold">98.4%</p>
                </div>
                <div className="rounded-xl bg-[#e8e3f6] p-4">
                  <span className="block size-7 rounded-full bg-[#183335]" />
                  <p className="mt-7 text-[8px] font-bold uppercase tracking-wider text-[#183335]/50">Uptime</p>
                  <p className="mt-1 text-xl font-extrabold">99.99%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 py-4 lg:grid-cols-3" aria-labelledby="home-pillars">
        <h2 id="home-pillars" className="sr-only">
          What we offer
        </h2>
        {pillars.map((service) => {
          const Visual = service.visual;
          return (
            <article key={service.title} className="group rounded-[22px] border border-[#183335]/10 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(24,51,53,.10)]">
              <Visual />
              <div className="px-2 pb-3 pt-6">
                <h3 className="text-2xl font-extrabold tracking-[-0.045em]">{service.title}</h3>
                <p className="mt-3 min-h-12 text-sm leading-6 text-[#60716f]">{service.description}</p>
                <p className="mt-5 border-t border-[#183335]/10 pt-4 text-[10px] font-extrabold uppercase tracking-[0.13em] text-[#879492]">{service.detail}</p>
              </div>
            </article>
          );
        })}
      </section>

      <section className="rounded-2xl border border-[#183335]/10 bg-white px-6 py-8 text-center sm:px-10" aria-label="Trust">
        <ul className="flex flex-col gap-3 text-sm font-bold text-[#60716f] sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8">
          <li>U.S. company · Issaquah, Washington</li>
          <li>Privacy-first contact</li>
          <li>No cold-call sales</li>
        </ul>
      </section>
    </main>
  );
}
