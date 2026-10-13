export default function AboutPage() {
  return (
    <main className="mt-4 space-y-4">
      <section className="rounded-[24px] border border-[#183335]/10 bg-white px-6 py-10 sm:px-12">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#879492]">About</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">About SPAS LLC</h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[#60716f] sm:text-lg">
          SPAS LLC is a Washington limited liability company focused on software development and related services. We develop apps and services with a focus on reliability, clarity, and long-term maintenance.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Who we are",
            body: "A software company based in Issaquah, Washington, building digital products for businesses and consumers.",
          },
          {
            title: "What we do",
            body: "End-to-end product work — discovery, engineering, release, and maintenance.",
          },
          {
            title: "How we work",
            body: "Quality, clarity, and long-term ownership of what we ship.",
          },
        ].map((block) => (
          <article key={block.title} className="rounded-2xl border border-[#183335]/10 bg-white p-6">
            <h2 className="text-lg font-extrabold">{block.title}</h2>
            <p className="mt-3 text-sm leading-7 text-[#60716f]">{block.body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
