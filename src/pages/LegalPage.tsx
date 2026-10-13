import { LEGAL_LAST_UPDATED } from "../lib/legal";

type Section = { title: string; body: string };

type LegalPageProps = {
  title: string;
  intro: string;
  sections: Section[];
};

export default function LegalPage({ title, intro, sections }: LegalPageProps) {
  return (
    <main className="mt-4">
      <article className="rounded-[24px] border border-[#183335]/10 bg-white px-6 py-10 sm:px-12">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#879492]">Legal</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">{title}</h1>
        <p className="mt-2 text-sm font-semibold text-[#879492]">Last updated: {LEGAL_LAST_UPDATED}</p>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[#60716f]">{intro}</p>

        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-extrabold">{section.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#60716f]">{section.body}</p>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
