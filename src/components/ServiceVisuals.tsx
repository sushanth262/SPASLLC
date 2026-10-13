export function ApplicationVisual() {
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

export function ServicesVisual() {
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

export function OperationsVisual() {
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
