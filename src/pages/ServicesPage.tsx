const services = [
  {
    title: "Applications",
    description: "Consumer and business apps for iOS, Android, and web.",
  },
  {
    title: "Platforms & APIs",
    description: "Backend services, integrations, and data pipelines.",
  },
  {
    title: "Product engineering",
    description: "UX, implementation, testing, and store submission support.",
  },
  {
    title: "Advisory",
    description: "Architecture and delivery planning for teams that need an experienced partner.",
  },
];

export default function ServicesPage() {
  return (
    <main className="mt-4 space-y-4">
      <section className="rounded-[24px] border border-[#183335]/10 bg-white px-6 py-10 sm:px-12">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#879492]">Services</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">What we do</h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[#60716f]">
          SPAS LLC delivers software products and technology services across applications, platforms, and ongoing operations.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        {services.map((service) => (
          <article key={service.title} className="rounded-2xl border border-[#183335]/10 bg-white p-6">
            <h2 className="text-xl font-extrabold tracking-[-0.03em]">{service.title}</h2>
            <p className="mt-3 text-sm leading-7 text-[#60716f]">{service.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
