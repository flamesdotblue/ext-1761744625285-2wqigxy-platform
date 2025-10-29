import { useState } from 'react';

function Demo() {
  const [input, setInput] = useState('Explain how a wormhole might work using a simple analogy.');
  const [output, setOutput] = useState(
    'Imagine spacetime as a sheet of paper. A wormhole folds the paper so distant points touch, letting you step across instead of walking the long path.'
  );

  const handleRun = () => {
    // Local demo only: mimic a quick response transformation
    if (!input.trim()) return;
    const variations = [
      'Picture the universe as a tunnel of tiles. A wormhole opens a door between far tiles so you can slip through instantly.',
      'Think of space like a city grid. A wormhole is a private subway that connects two far stations with a single stop.',
      'Treat spacetime like fabric. A wormhole pinches two distant threads together so you can hop across the stitch.',
    ];
    const pick = Math.floor(Math.random() * variations.length);
    setOutput(variations[pick]);
  };

  return (
    <section id="docs" className="relative mx-auto max-w-6xl px-6 pb-24">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Try a quick prompt</h2>
        <p className="mt-3 text-white/75">A simple, client-side mock to preview the experience.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <label className="mb-2 block text-sm font-medium text-white/80">Prompt</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={7}
            className="w-full resize-y rounded-xl border border-white/10 bg-neutral-900/60 p-4 text-sm text-white placeholder-white/40 outline-none focus:border-white/20"
            placeholder="Type your prompt…"
          />
          <div className="mt-4 flex items-center justify-between">
            <div className="text-xs text-white/60">Local preview only</div>
            <button
              onClick={handleRun}
              className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-neutral-900 transition hover:bg-white/90"
            >
              Run
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <label className="mb-2 block text-sm font-medium text-white/80">Output</label>
          <div className="min-h-[168px] rounded-xl border border-white/10 bg-neutral-900/60 p-4 text-sm leading-relaxed text-white/90">
            {output}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Demo;
