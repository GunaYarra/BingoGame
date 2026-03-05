interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="min-h-dvh flex flex-col justify-between bg-espresso overflow-hidden">
      {/* Top spacer */}
      <div className="flex-1" />

      {/* Hero block */}
      <div className="px-6 pb-0">
        <p
          className="text-sm text-caramel/60 tracking-widest uppercase font-medium animate-fade-in"
          style={{ animationDelay: '0ms' }}
        >
          <span aria-hidden="true">☕ </span>Social Bingo
        </p>

        <h1
          className="text-[4.5rem] leading-[1.05] font-bold text-cream animate-fade-in"
          style={{ fontFamily: 'var(--font-display)', animationDelay: '150ms' }}
        >
          Soc
          <br />
          Ops
        </h1>

        <div
          className="h-px bg-caramel w-24 mt-4 animate-slide-in"
          style={{ animationDelay: '350ms' }}
        />

        <p
          className="text-cream/60 text-sm mt-3 max-w-[18ch] leading-relaxed animate-fade-in"
          style={{ animationDelay: '480ms' }}
        >
          Find the people who match. Five in a row wins.
        </p>
      </div>

      {/* Middle spacer */}
      <div className="flex-1" />

      {/* Bottom zone */}
      <div className="px-6 pb-10 flex flex-col gap-4">
        {/* Stat bar */}
        <div
          className="flex gap-4 justify-center text-center animate-fade-in"
          style={{ animationDelay: '580ms' }}
          aria-hidden="true"
        >
          <div className="flex flex-col gap-0.5">
            <span className="text-2xl font-bold text-caramel">25</span>
            <span className="text-cream/50 text-[10px] uppercase tracking-wider">Squares</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-2xl font-bold text-caramel">5</span>
            <span className="text-cream/50 text-[10px] uppercase tracking-wider">To win</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-2xl font-bold text-caramel">1</span>
            <span className="text-cream/50 text-[10px] uppercase tracking-wider">Free space</span>
          </div>
        </div>

        {/* CTA button */}
        <button
          onClick={onStart}
          className="w-full bg-caramel text-espresso font-bold py-4 rounded-lg text-lg tracking-wide active:opacity-80 transition-opacity animate-fade-in"
          style={{ animationDelay: '700ms' }}
        >
          Start the Game
        </button>
      </div>
    </div>
  );
}
