interface GridCell {
  marked: boolean;
  label?: string;
}

const GRID_CELLS: GridCell[] = [
  { marked: true,  label: 'Morning person' },
  { marked: false },
  { marked: true,  label: 'Has a plant' },
  { marked: false },
  { marked: true,  label: 'Dog owner' },
  { marked: false },
  { marked: true,  label: 'Remote worker' },
  { marked: false },
  { marked: true,  label: 'Coffee addict' },
  { marked: false },
  { marked: false },
  { marked: true,  label: 'Night owl' },
  { marked: true  }, // center / free space (index 12)
  { marked: true,  label: 'Cat person' },
  { marked: false },
  { marked: false },
  { marked: true,  label: 'Gym regular' },
  { marked: false },
  { marked: true,  label: 'Tea drinker' },
  { marked: false },
  { marked: true,  label: 'Book worm' },
  { marked: false },
  { marked: true,  label: 'Early riser' },
  { marked: false },
  { marked: true,  label: 'Foodie' },
];

interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden bg-espresso px-6">

      {/* Background bingo grid — purely decorative, does not reflect game logic */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
      >
        <div className="rotate-[-2.5deg] scale-110 blur-[3px] opacity-30 animate-grid-reveal">
          <div className="grid grid-cols-5 gap-1.5 w-[340px]">
            {GRID_CELLS.map((cell, i) =>
              i === 12 ? (
                <div
                  key={i}
                  className="bg-marked border border-caramel/40 rounded-md h-14 flex items-center justify-center text-cream/50 text-sm"
                >
                  <span aria-hidden="true">☕</span>
                </div>
              ) : cell.marked ? (
                <div
                  key={i}
                  className="bg-marked border border-caramel/40 rounded-md h-14 flex items-center justify-center text-cream/60 text-[8px] text-center px-1 leading-tight"
                >
                  {cell.label}
                </div>
              ) : (
                <div
                  key={i}
                  className="bg-foam/15 border border-caramel/15 rounded-md h-14"
                />
              )
            )}
          </div>
        </div>
      </div>

      {/* Dark scrim overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-espresso/80 via-espresso/50 to-espresso/85 pointer-events-none"
      />

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center gap-5 w-full max-w-sm text-center">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-1.5 bg-caramel/15 border border-caramel/30 rounded-full px-3 py-1 text-caramel text-xs tracking-wide animate-fade-up"
          style={{ animationDelay: '200ms' }}
        >
          <span aria-hidden="true">☕</span> Social Bingo
        </div>

        {/* Hero lockup */}
        <div className="flex flex-col items-center gap-2">
          <h1
            className="text-5xl font-bold text-cream leading-tight animate-fade-up"
            style={{ fontFamily: 'var(--font-display)', animationDelay: '360ms' }}
          >
            Soc Ops
          </h1>
          <p
            className="text-cream/70 text-sm max-w-[22ch] leading-relaxed animate-fade-up"
            style={{ animationDelay: '480ms' }}
          >
            Find 25 people who match each square. Connect five in a row to win.
          </p>
        </div>

        {/* How-to strip */}
        <div
          className="flex gap-2 w-full animate-fade-up"
          style={{ animationDelay: '580ms' }}
        >
          {[
            { emoji: '🔍', label: 'Find' },
            { emoji: '✅', label: 'Mark' },
            { emoji: '🏆', label: 'Win!' },
          ].map(({ emoji, label }) => (
            <div
              key={label}
              className="flex-1 bg-roast/80 border border-caramel/20 rounded-xl py-2 px-1 flex flex-col items-center gap-1"
            >
              <span aria-hidden="true" className="text-xl">{emoji}</span>
              <span className="text-cream text-[11px] font-medium">{label}</span>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <button
          onClick={onStart}
          className="w-full bg-caramel text-espresso font-bold py-4 rounded-xl text-lg shadow-xl shadow-black/50 active:opacity-80 transition-opacity animate-fade-up"
          style={{ animationDelay: '700ms' }}
        >
          Start Game
        </button>
      </div>
    </div>
  );
}

