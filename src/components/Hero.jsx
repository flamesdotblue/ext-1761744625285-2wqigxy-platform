import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/kg9idNYfDKoDwibE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays to increase contrast over 3D */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-neutral-950/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Live Preview
        </div>
        <h1 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
          <span className="bg-gradient-to-r from-orange-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
            WormGPT
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
          Tunnel through complexity with a sleek, futuristic interface. A focused AI experience for builders, researchers, and creatives.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#get-started"
            className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-white/90"
          >
            Get Started
          </a>
          <a
            href="#docs"
            className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Documentation
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
