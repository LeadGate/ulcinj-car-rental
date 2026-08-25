import { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";

// Mobile-resilience pattern (memory: feedback_widget_mobile_resilience.md, 2026-05-08)
// - requestIdleCallback defer (LCP/CLS budget)
// - omit `&city=` when target city is not in Localrent widget API catalog
//   (empty value → mobile picker; affiliate dashboard sample omits the key)
// - visible fallback link to www.localrent.com for Telegram WebView / Safari ITP
//   environments that block tpembd.com
// - 8s descendant-count failure detector (widget renders via <div>+<a> only,
//   so iframe/input/button/form selectors do NOT work)
const WIDGET_SRC =
  "https://tpembd.com/content?trs=513393&shmarker=713621.ulcinj&powered_by=true&country=133&city=18&lang=en&width=100&background=transparent&logo=false&header=false&gearbox=false&cars=false&border=false&footer=false&campaign_id=87&promo_id=4322";

const FALLBACK_URL = "https://www.localrent.com/en/montenegro/ulcinj/?marker=713621.ulcinj";
const FALLBACK_LABEL = "Or browse all Ulcinj rentals on Localrent →";


// GA4 funnel probe (2026-08-25) — port of the Astro fleet's AffiliateWidget.jsx
// probe (2026-08-22) to the React fleet. The widget is a THIRD-PARTY iframe from
// tpembd.com, so a click inside it is unreachable by design: same-origin policy,
// not a gap we can close. These events measure everything around it.
// Sent via window.gtag when it exists, falling back to a raw dataLayer push —
// a build that renames the global still records the event. No-ops entirely when
// GA4 is absent, so an untagged site is unaffected.
function track(name: string, params?: Record<string, unknown>) {
  try {
    if (typeof window === "undefined") return;
    const w = window as Window & {
      gtag?: (...args: unknown[]) => void;
      dataLayer?: unknown[];
    };
    const payload = { ...(params || {}), page_path: window.location.pathname };
    if (typeof w.gtag === "function") {
      w.gtag("event", name, payload);
      return;
    }
    if (Array.isArray(w.dataLayer)) w.dataLayer.push(["event", name, payload]);
  } catch {
    /* analytics must never break the page */
  }
}

const AffiliateWidget = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scriptFailed, setScriptFailed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const node = containerRef.current;
    if (!node) return;
    if (node.querySelector("script")) return;

    const load = () => {
      if (!containerRef.current) return;
      // `trigger` marks how this page view reached the load. The Astro fleet gates
      // the same probe behind an IntersectionObserver, so its widget_view means
      // "reached the viewport"; here it means "load started". Keeping the React
      // behaviour untouched and labelling the event is honest; silently reusing
      // the name across two different meanings is not.
      track("widget_view", { trigger: "idle-no-observer" });
      const script = document.createElement("script");
      script.async = true;
      script.src = WIDGET_SRC;
      script.charset = "utf-8";
      script.onerror = () => {
        setScriptFailed(true);
        track("widget_failed", { reason: "script_onerror" });
      };
      containerRef.current.appendChild(script);
      window.setTimeout(() => {
        if (!containerRef.current) return;
        // Node count, not the Astro selector list: this widget renders via
        // <div>+<a> only, so iframe/form/input/button never match here.
        const nodes = containerRef.current.querySelectorAll("*").length;
        if (nodes < 6) {
          setScriptFailed(true);
          track("widget_failed", { nodes });
        } else {
          track("widget_loaded", { nodes });
        }
      }, 8000);
    };

    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
    };
    if (typeof w.requestIdleCallback === "function") {
      w.requestIdleCallback(load, { timeout: 2000 });
    } else {
      window.setTimeout(load, 1500);
    }
  }, []);

  // widget_exit — fires at most once per page view. Mirrors the Astro probe.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let over = false;
    let sent = false;
    const enter = () => { over = true; };
    const leave = () => { over = false; };
    const onBlur = () => {
      if (!over || sent) return;
      sent = true;
      track("widget_exit");
    };
    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);
    el.addEventListener("touchstart", enter, { passive: true });
    window.addEventListener("blur", onBlur);
    return () => {
      el.removeEventListener("mouseenter", enter);
      el.removeEventListener("mouseleave", leave);
      el.removeEventListener("touchstart", enter);
      window.removeEventListener("blur", onBlur);
    };
  }, []);

  return (
    <section className="py-8" id="compare-cars">
      <div className="container max-w-3xl mx-auto">
        <div className="bg-background rounded-lg p-6 text-center border border-border shadow-sm">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Search className="text-primary" size={24} />
            <h3 className="text-lg font-bold m-0">Search &amp; Compare Ulcinj Car Rentals</h3>
          </div>
          <div
            ref={containerRef}
            className="my-4 rounded-lg max-w-3xl mx-auto overflow-visible"
          />
          {scriptFailed && (
            <p className="text-muted-foreground text-sm mb-2">
              Widget couldn't load. Use the direct link below.
            </p>
          )}
          <p className="text-muted-foreground text-xs italic mt-3">
            Free cancellation on most vehicles
          </p>
          <p className="text-sm mt-3">
            <a
              href={FALLBACK_URL}
              target="_blank"
              rel="noopener nofollow sponsored"
              onClick={() => track("widget_fallback_click")}
              className="text-primary underline underline-offset-2 hover:no-underline"
            >
              {FALLBACK_LABEL}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AffiliateWidget;
