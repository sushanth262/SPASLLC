type IconProps = {
  className?: string;
};

function ArrowUpRight({ className = "size-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LogoMark({ className = "size-10" }: IconProps) {
  return (
    <svg className={`logo-mark ${className}`} viewBox="0 0 44 44" fill="none" role="img" aria-label="SPAS monogram">
      <rect width="44" height="44" rx="14" fill="#183335" />
      <path
        d="M25.8 11.5h-6.2c-4 0-6.5 2.1-6.5 5 0 3 2.4 4.3 6.3 4.9l4.2.7c3.7.6 5.8 2 5.8 4.9 0 3.3-2.8 5.5-7.2 5.5h-7.4"
        stroke="#F7F7F1"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M22 31.8V12.2h5.1c3.7 0 6.1 2.3 6.1 5.6 0 3.4-2.4 5.7-6.1 5.7H22"
        stroke="#CAF05B"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ApplicationVisual() {
  return (
    <div className="visual-panel bg-[#e1efed]">
      <div className="absolute -right-8 -top-9 size-32 rounded-full bg-[#b8dfda]" />
      <div className="absolute left-7 top-7 w-[66%] rounded-xl border border-[#183335]/10 bg-white p-3 shadow-[0_18px_35px_rgba(24,51,53,.12)]">
        <div className="mb-4 flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-[#ef9e8e]" />
          <span className="size-1.5 rounded-full bg-[#f2c971]" />
          <span className="size-1.5 rounded-full bg-[#8bcab4]" />
        </div>
        <div className="h-2 w-16 rounded-full bg-[#183335]" />
        <div className="mt-2 h-1.5 w-24 rounded-full bg-[#183335]/15" />
        <div className="mt-5 grid grid-cols-2 gap-2">
          <div className="h-10 rounded-md bg-[#caf05b]" />
          <div className="h-10 rounded-md bg-[#f0f2e9]" />
        </div>
      </div>
      <div className="absolute bottom-5 right-7 w-[42%] rounded-[18px] border-[5px] border-[#183335] bg-white p-2 shadow-[0_16px_30px_rgba(24,51,53,.2)]">
        <div className="h-12 rounded-lg bg-[#183335] p-2">
          <div className="h-1.5 w-7 rounded-full bg-[#caf05b]" />
          <div className="mt-2 h-1 w-10 rounded-full bg-white/35" />
        </div>
        <div className="mt-2 h-2 w-full rounded-full bg-[#e1efed]" />
        <div className="mt-1 h-2 w-3/4 rounded-full bg-[#e1efed]" />
      </div>
    </div>
  );
}

function ServicesVisual() {
  return (
    <div className="visual-panel bg-[#eeeaf9]">
      <div className="absolute -bottom-14 -left-10 size-36 rounded-full bg-[#d5cef2]" />
      <div className="absolute left-1/2 top-1/2 size-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#183335]/10 bg-white shadow-[0_18px_40px_rgba(24,51,53,.14)]">
        <div className="grid h-full place-items-center">
          <svg className="size-10 text-[#183335]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="m8.5 8-4 4 4 4M15.5 8l4 4-4 4M13.5 5l-3 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <svg className="absolute inset-0 size-full text-[#183335]/25" viewBox="0 0 320 160" fill="none" aria-hidden="true">
        <path d="M55 40 125 68M265 38l-69 31M56 124l70-32M264 125l-68-33" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 5" />
      </svg>
      {[
        "left-[12%] top-[15%] bg-[#caf05b]",
        "right-[12%] top-[14%] bg-[#8dd7cf]",
        "bottom-[13%] left-[13%] bg-white",
        "bottom-[12%] right-[12%] bg-[#183335]",
      ].map((styles) => (
        <span key={styles} className={`absolute size-10 rounded-xl border border-[#183335]/10 shadow-sm ${styles}`} />
      ))}
    </div>
  );
}

function OperationsVisual() {
  return (
    <div className="visual-panel bg-[#e9efd9]">
      <div className="absolute -right-10 -top-10 size-36 rounded-full bg-[#d7e5b4]" />
      <div className="absolute inset-x-6 bottom-6 top-7 rounded-xl bg-[#183335] p-4 shadow-[0_20px_38px_rgba(24,51,53,.2)]">
        <div className="flex items-center justify-between">
          <div>
            <div className="h-1.5 w-12 rounded-full bg-white/80" />
            <div className="mt-2 h-1 w-20 rounded-full bg-white/20" />
          </div>
          <span className="rounded-full bg-[#caf05b] px-2 py-1 text-[7px] font-extrabold uppercase tracking-wider text-[#183335]">Live</span>
        </div>
        <div className="mt-6 flex h-14 items-end gap-2">
          {[42, 58, 48, 76, 64, 92, 80].map((height, index) => (
            <span key={index} className="flex-1 rounded-t-sm bg-[#8dd7cf]" style={{ height: `${height}%`, opacity: 0.45 + index * 0.08 }} />
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2">
          <span className="size-2 rounded-full bg-[#caf05b]" />
          <span className="h-1 w-20 rounded-full bg-white/25" />
        </div>
      </div>
    </div>
  );
}

const services = [
  {
    title: "Applications",
    description: "Mobile and web products built around real customer needs.",
    detail: "iOS · Android · Web",
    visual: ApplicationVisual,
  },
  {
    title: "Services",
    description: "Product engineering, integrations, and APIs that connect your business.",
    detail: "Engineering · APIs · Advisory",
    visual: ServicesVisual,
  },
  {
    title: "Operations",
    description: "Reliable delivery, attentive support, and ongoing improvement.",
    detail: "Release · Support · Scale",
    visual: OperationsVisual,
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#f4f3ee] text-[#183335]">
      <div className="page-shell py-4 sm:py-6">
        <header className="flex h-[76px] items-center justify-between rounded-2xl border border-[#183335]/10 bg-white px-5 shadow-[0_8px_35px_rgba(24,51,53,.05)] sm:px-8">
          <a href="#home" className="group flex items-center gap-3" aria-label="SPAS LLC home">
            <LogoMark />
            <span className="text-base font-extrabold tracking-[-0.025em] sm:text-lg">SPAS LLC</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            <a href="#home" className="nav-link nav-active">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          <a href="#contact" className="grid size-10 place-items-center rounded-full bg-[#caf05b] text-[#183335] transition-transform hover:-translate-y-0.5 md:hidden" aria-label="Contact">
            <ArrowUpRight />
          </a>
        </header>

        <main>
          <section id="home" className="relative mt-4 overflow-hidden rounded-[24px] bg-[#183335] px-6 py-12 text-white sm:px-12 sm:py-16 lg:min-h-[390px] lg:px-16">
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
                  <a href="#about" className="button-primary">
                    Learn about us
                    <ArrowUpRight />
                  </a>
                  <a href="#contact" className="button-secondary">Contact</a>
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
                      <div className="mt-5 flex h-12 items-end gap-1.5">
                        {[40, 62, 48, 74, 66, 91].map((height, index) => (
                          <span key={index} className="flex-1 rounded-t-sm bg-[#398d82]" style={{ height: `${height}%` }} />
                        ))}
                      </div>
                    </div>
                    <div className="rounded-xl bg-[#e8e3f6] p-4">
                      <span className="block size-7 rounded-full bg-[#183335]" />
                      <p className="mt-7 text-[8px] font-bold uppercase tracking-wider text-[#183335]/50">Uptime</p>
                      <p className="mt-1 text-xl font-extrabold">99.99%</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between rounded-xl border border-[#183335]/8 bg-white px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-[#70bc7d]" />
                      <span className="text-[9px] font-bold">All systems operational</span>
                    </div>
                    <span className="text-[8px] font-bold text-[#183335]/35">Live</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="services" className="grid gap-4 py-4 lg:grid-cols-3">
            {services.map((service) => {
              const Visual = service.visual;
              return (
                <article key={service.title} className="group rounded-[22px] border border-[#183335]/10 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(24,51,53,.10)]">
                  <Visual />
                  <div className="px-2 pb-3 pt-6">
                    <div className="flex items-start justify-between gap-4">
                      <h2 className="text-2xl font-extrabold tracking-[-0.045em]">{service.title}</h2>
                      <span className="grid size-9 shrink-0 place-items-center rounded-full border border-[#183335]/12 transition-colors group-hover:bg-[#caf05b]">
                        <ArrowUpRight />
                      </span>
                    </div>
                    <p className="mt-3 min-h-12 text-sm leading-6 text-[#60716f]">{service.description}</p>
                    <p className="mt-5 border-t border-[#183335]/10 pt-4 text-[10px] font-extrabold uppercase tracking-[0.13em] text-[#879492]">{service.detail}</p>
                  </div>
                </article>
              );
            })}
          </section>

          <section id="about" className="sr-only" aria-label="About SPAS LLC">
            SPAS LLC is a software company based in Issaquah, Washington.
          </section>
        </main>

        <footer id="contact" className="flex flex-col gap-5 rounded-2xl border border-[#183335]/10 bg-white px-6 py-7 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="font-semibold text-[#60716f]">© 2026 <span className="font-extrabold text-[#183335]">SPAS LLC</span> · Issaquah, WA</p>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 font-bold text-[#60716f]" aria-label="Footer navigation">
            <a href="#home" className="transition-colors hover:text-[#183335]">Privacy</a>
            <a href="#home" className="transition-colors hover:text-[#183335]">Terms</a>
            <a href="#contact" className="inline-flex items-center gap-1.5 text-[#183335]">
              Contact
              <ArrowUpRight className="size-3.5" />
            </a>
          </nav>
        </footer>
      </div>
    </div>
  );
}
