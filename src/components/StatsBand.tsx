import { useEffect, useState } from 'react';

export type Stat = {
  /** Big number, e.g. "321", "41", "76%" */
  value: string;
  /** Short caption under the number */
  label: string;
  /** Optional second line of detail */
  note?: string;
};

function useReveal(threshold = 0.15) {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);
  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold]);
  return { ref: setRef, isVisible };
}

/**
 * Quantitative proof band — a row of hard numbers rendered as text
 * (crawlable by search engines and AI agents, no images).
 */
export function StatsBand({
  items,
  footnote,
  className = '',
}: {
  items: Stat[];
  footnote?: string;
  className?: string;
}) {
  const { ref, isVisible } = useReveal(0.1);

  return (
    <div ref={ref} className={className}>
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.06] lg:grid-cols-4">
        {items.map((stat, index) => (
          <div
            key={stat.label}
            className={`bg-[#080c14] px-5 py-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: `${index * 90}ms` }}
          >
            <div className="font-display text-3xl font-bold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-kwar-electric lg:text-4xl">
              {stat.value}
            </div>
            <p className="mt-2.5 text-xs leading-relaxed text-white/45">{stat.label}</p>
            {stat.note && (
              <p className="mt-1 text-[11px] leading-relaxed text-white/25">{stat.note}</p>
            )}
          </div>
        ))}
      </div>
      {footnote && (
        <p className="mt-3 text-[11px] leading-relaxed text-white/30">{footnote}</p>
      )}
    </div>
  );
}
