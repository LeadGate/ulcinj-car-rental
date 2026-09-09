import type { ReactNode } from "react";

interface HeroDiagonalProps {
  title: string;
  backgroundImage: string;
  backgroundAlt?: string;
  /** Якорь виджета для кнопки в первом экране. Задавать ТОЛЬКО на главной. */
  anchorCtaHref?: string;
  children?: ReactNode;
}

/**
 * HeroDiagonal — full-width hero with background image and dark overlay.
 *
 * Кнопка в hero рисуется ТОЛЬКО когда передан anchorCtaHref (главная).
 * На служебных страницах его нет — там виджета нет, кнопка вела бы в пустоту.
 * Override правила feedback_hero_cta_no_duplicate принят оператором 09.09.2026:
 * виджет начинается ниже первого экрана, без якорной кнопки он невидим.
 */
const HeroDiagonal = ({
  title,
  backgroundImage,
  backgroundAlt,
  anchorCtaHref,
  children,
}: HeroDiagonalProps) => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <img
        src={backgroundImage}
        alt={backgroundAlt || ""}
        width={1600}
        height={900}
        fetchPriority="high"
        loading="eager"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="container max-w-4xl text-center relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold hero-text mb-6">
          {title}
        </h1>
        {anchorCtaHref && (
          <a
            href={anchorCtaHref}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-md shadow-lg hover:brightness-95 active:scale-[0.97] transition-all duration-200 no-underline"
          >
            Find your car ↓
          </a>
        )}
        {children && (
          <div className="mt-6 text-white/90 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            {children}
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroDiagonal;
