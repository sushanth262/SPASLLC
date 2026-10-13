import { ArrowUpRight } from "./Icons";
import type { ProductCategory, SpasProduct } from "../lib/products";
import { PRODUCT_CATEGORIES, SPAS_PRODUCTS } from "../lib/products";

function ProductCard({ product }: { product: SpasProduct }) {
  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      className="product-card group flex gap-4 rounded-2xl border border-[#183335]/10 bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(24,51,53,.08)]"
    >
      <img
        src={product.iconSrc}
        alt={product.iconAlt}
        width={56}
        height={56}
        className="product-card__icon size-14 shrink-0 rounded-[14px] border border-[#183335]/10 bg-[#f4f3ee] object-cover"
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#879492]">{product.categoryLabel}</p>
            <h3 className="mt-1 text-lg font-extrabold tracking-[-0.03em] text-[#183335]">{product.name}</h3>
          </div>
          <span className="grid size-9 shrink-0 place-items-center rounded-full border border-[#183335]/12 text-[#183335] transition-colors group-hover:bg-[#caf05b]">
            <ArrowUpRight className="size-4" />
          </span>
        </div>
        <p className="mt-2 text-sm leading-6 text-[#60716f]">{product.description}</p>
        {product.platforms?.length ? (
          <p className="mt-3 text-[10px] font-extrabold uppercase tracking-[0.13em] text-[#879492]">{product.platforms.join(" · ")}</p>
        ) : null}
        <p className="mt-2 truncate text-xs font-bold text-[#398d82]">{product.url.replace(/^https:\/\//, "")}</p>
      </div>
    </a>
  );
}

type ProductShowcaseProps = {
  title?: string;
  lead?: string;
  /** Show only one category, or all grouped */
  filter?: ProductCategory | "all";
};

export function ProductShowcase({
  title = "Products we operate",
  lead = "Selected applications and platforms delivered by SPAS LLC.",
  filter = "all",
}: ProductShowcaseProps) {
  const categories =
    filter === "all"
      ? PRODUCT_CATEGORIES
      : PRODUCT_CATEGORIES.filter((c) => c.id === filter);

  return (
    <section className="space-y-6" aria-labelledby="products-showcase-title">
      <div>
        <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#879492]">Products</p>
        <h2 id="products-showcase-title" className="mt-2 text-2xl font-extrabold tracking-[-0.04em] sm:text-3xl">
          {title}
        </h2>
        {lead ? <p className="mt-3 max-w-2xl text-sm leading-7 text-[#60716f]">{lead}</p> : null}
      </div>

      {categories.map((cat) => {
        const items = SPAS_PRODUCTS.filter((p) => p.category === cat.id);
        if (items.length === 0) return null;
        return (
          <div key={cat.id} className="space-y-3">
            {filter === "all" ? (
              <>
                <h3 className="text-base font-extrabold text-[#183335]">{cat.title}</h3>
                <p className="text-sm text-[#60716f]">{cat.lead}</p>
              </>
            ) : null}
            <div className="grid gap-4 lg:grid-cols-2">
              {items.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
