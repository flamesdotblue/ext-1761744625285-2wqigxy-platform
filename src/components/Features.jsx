import { Rocket, Shield, Cpu, Zap } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Fast Iteration',
    desc: 'Prototype ideas quickly with a streamlined UI optimized for speed and clarity.',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    desc: 'Your inputs stay on your device. Transparent controls and export options.',
  },
  {
    icon: Cpu,
    title: 'Developer Friendly',
    desc: 'Clear prompts, reproducible sessions, and copy-ready outputs for your stack.',
  },
  {
    icon: Zap,
    title: 'Powerful Controls',
    desc: 'Tune temperature, system behavior, and context length with precision.',
  },
];

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/10">
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
        <Icon size={22} />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-white/75">{desc}</p>
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
    </div>
  );
}

function Features() {
  return (
    <section id="get-started" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Designed for flow</h2>
        <p className="mt-3 text-white/75">
          A focused set of tools to help you think, build, and ship faster.
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <FeatureCard key={f.title} icon={f.icon} title={f.title} desc={f.desc} />
        ))}
      </div>
    </section>
  );
}

export default Features;
