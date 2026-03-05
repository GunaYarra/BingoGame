interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center relative overflow-hidden bg-espresso px-6">
      {/* Atmospheric warm glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 55% at 50% 42%, oklch(0.28 0.06 45 / 0.95), oklch(0.16 0.04 45 / 0))',
        }}
      />

      {/* Decorative coffee rings */}
      <div
        aria-hidden="true"
        className="absolute -top-16 -right-20 w-72 h-72 rounded-full border border-caramel/8"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-12 -left-16 w-48 h-48 rounded-full border border-caramel/6"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-8 right-4 w-32 h-32 rounded-full border-2 border-caramel/5"
      />

      {/* Content column */}
      <div className="relative z-10 flex flex-col items-center gap-6 w-full max-w-sm">
        {/* Hero lockup */}
        <div className="flex flex-col items-center gap-2">
          <span
            className="text-6xl animate-fade-up"
            style={{ animationDelay: '0ms' }}
          >
            ☕
          </span>
          <h1
            className="font-display text-5xl font-bold text-cream text-center leading-tight animate-fade-up"
            style={{ animationDelay: '120ms' }}
          >
            Soc Ops
          </h1>
          <p
            className="text-caramel tracking-widest text-xs uppercase animate-fade-up"
            style={{ animationDelay: '240ms' }}
          >
            Gather · Discover · Connect
          </p>
        </div>

        {/* Feature strip */}
        <div
          className="flex gap-2 w-full animate-fade-up"
          style={{ animationDelay: '380ms' }}
        >
          <div className="flex-1 bg-roast border border-caramel/20 rounded-xl p-3 flex flex-col items-center gap-1 text-center">
            <span aria-hidden="true">🔍</span>
            <span className="text-cream text-xs font-medium">Find</span>
            <span className="text-cream/50 text-[10px]">Match someone</span>
          </div>
          <div className="flex-1 bg-roast border border-caramel/20 rounded-xl p-3 flex flex-col items-center gap-1 text-center">
            <span aria-hidden="true">☑️</span>
            <span className="text-cream text-xs font-medium">Mark</span>
            <span className="text-cream/50 text-[10px]">Tap the square</span>
          </div>
          <div className="flex-1 bg-roast border border-caramel/20 rounded-xl p-3 flex flex-col items-center gap-1 text-center">
            <span aria-hidden="true">🏆</span>
            <span className="text-cream text-xs font-medium">Win</span>
            <span className="text-cream/50 text-[10px]">5 in a row!</span>
          </div>
        </div>

        {/* CTA button */}
        <button
          onClick={onStart}
          className="w-full bg-caramel text-espresso font-semibold py-4 rounded-xl text-lg shadow-lg shadow-caramel/20 active:opacity-80 transition-opacity animate-fade-up"
          style={{ animationDelay: '520ms' }}
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
