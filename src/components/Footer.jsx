function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-white/60 md:flex-row">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-white">WormGPT</span>
          <span className="hidden text-white/30 md:inline">•</span>
          <span>Futuristic, immersive UI</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#get-started" className="hover:text-white">Get Started</a>
          <a href="#docs" className="hover:text-white">Docs</a>
          <a href="#" className="hover:text-white">Privacy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
