import { ProductShowcase } from "../components/ProductCards";

export default function ProductsPage() {
  return (
    <main className="mt-4 space-y-4">
      <section className="rounded-[24px] border border-[#183335]/10 bg-white px-6 py-10 sm:px-12">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#879492]">Products</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">Software we ship</h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[#60716f]">
          Applications and platforms built and operated by SPAS LLC — from mobile and web research tools to
          AI-powered learning management.
        </p>
      </section>

      <section className="rounded-[24px] border border-[#183335]/10 bg-[#fafaf8] px-6 py-10 sm:px-12">
        <ProductShowcase variant="page" />
      </section>
    </main>
  );
}
