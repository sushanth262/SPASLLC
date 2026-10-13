import { ArrowUpRight } from "./Icons";
import type { ProductCategory, SpasProduct } from "../lib/products";
import { PRODUCT_CATEGORIES, SPAS_PRODUCTS } from "../lib/products";

function ProductCard({ product, large }: { product: SpasProduct; large?: boolean }) {
  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`product-card group flex gap-5 rounded-[22px] border border-[#183335]/10 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-[#183335]/18 hover:shadow-[0_20px_50px_rgba(24,51,53,.10)]${
        large ? " sm:items-center" : ""
      }`}
    >
      <img
        src={product.iconSrc}
        alt={product.iconAlt}
        width={large ? 72 : 56}
        height={large ? 72 : 56}
        className={`product-card__icon shrink-0 rounded-[16px] border border-[#183335]/10 bg-[#f4f3ee] object-cover shadow-[0_8px_20px_rgba(24,51,53,.06)]${
          large ? " size-[4.5rem]" : " size-14"
        }`}
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#879492]">{product.categoryLabel}</p>
            <h3 className={`mt-1 font-extrabold tracking-[-0.03em] text-[#183335]${large ? " text-xl sm:text-2xl" : " text-lg"}`}>
              {product.name}
            </h3>
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
  /** Page layout: no duplicate page title block; larger cards */
  variant?: "embedded" | "page";
  /** Show only one category, or all grouped */
  filter?: ProductCategory | "all";
};

export function ProductShowcase({ variant = "embedded", filter = "all" }: ProductShowcaseProps) {
  const categories =
    filter === "all"
      ? PRODUCT_CATEGORIES
      : PRODUCT_CATEGORIES.filter((c) => c.id === filter);
  const large = variant === "page";

  return (
    <section className={large ? "space-y-10" : "space-y-6"} aria-label="Product list">
      {categories.map((cat) => {
        const items = SPAS_PRODUCTS.filter((p) => p.category === cat.id);
        if (items.length === 0) return null;
        return (
          <div key={cat.id} className={large ? "space-y-5" : "space-y-3"}>
            {filter === "all" ? (
              <div className={large ? "border-b border-[#183335]/10 pb-4" : ""}>
                <h2 className={`font-extrabold text-[#183335]${large ? " text-xl sm:text-2xl tracking-[-0.03em]" : " text-base"}`}>
                  {cat.title}
                </h2>
                <p className={`mt-2 text-[#60716f]${large ? " max-w-2xl text-base leading-7" : " text-sm"}`}>{cat.lead}</p>
              </div>
            ) : null}
            <div className={`grid gap-4${large ? "" : " lg:grid-cols-2"}`}>
              {items.map((product) => (
                <ProductCard key={product.id} product={product} large={large} />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
