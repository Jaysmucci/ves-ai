import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden px-6">
      {/* Spotlight beam */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-[-15%] top-1/2 h-[160%] w-[70%] -translate-y-1/2"
          style={{
            background: `linear-gradient(
              108deg,
              transparent 0%,
              rgba(255,255,255,0.015) 15%,
              rgba(255,255,255,0.06) 35%,
              rgba(255,255,255,0.11) 50%,
              rgba(255,255,255,0.06) 65%,
              rgba(255,255,255,0.015) 85%,
              transparent 100%
            )`,
            transform: "translateY(-50%) rotate(-16deg)",
          }}
        />
        <div
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() > 0.8 ? 1.5 : 0.75,
              height: Math.random() > 0.8 ? 1.5 : 0.75,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.15,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center mt-14">
        <h1
          className="font-medium tracking-[-0.03em] text-white"
          style={{
            fontSize: "clamp(2.75rem, 8vw, 5.8rem)",
            lineHeight: 0.92,
            fontWeight: 580,
          }}
        >
          Reliable groundwater
          <br />
          assessment from{" "}
          <span className="relative inline-block">
            VES data
            <span className="absolute -bottom-1.5 left-0 right-0 h-1 border-b-2 border-dashed border-white/40" />
            <span className="absolute -bottom-1 right-0 h-2.5 w-2.5 translate-x-1/2 rounded-full bg-white/40" />
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-md text-[17px] leading-snug text-white/55 md:text-lg">
          Turn Vertical Electrical Sounding measurements into clear, defensible
          aquifer models and drilling recommendations.
        </p>

        <div className="mt-10">
          <Button className="h-11 rounded-full bg-white px-6 text-[14px] font-medium text-black mb-5 hover:bg-white/90">
            <a href="/register">Get Started</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
