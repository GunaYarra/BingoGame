interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 bg-espresso">
      <div className="text-center max-w-sm">
        <div className="text-4xl mb-3">☕</div>
        <h1 className="text-4xl font-bold text-cream mb-2" style={{ fontFamily: 'var(--font-display)' }}>Soc Ops</h1>
        <p className="text-lg text-caramel mb-8 tracking-wide">Social Bingo</p>

        <div className="bg-roast rounded-lg p-6 shadow-lg shadow-black/40 border border-caramel/20 mb-8">
          <h2 className="font-semibold text-cream mb-3">How to play</h2>
          <ul className="text-left text-cream/70 text-sm space-y-2">
            <li>• Find people who match the questions</li>
            <li>• Tap a square when you find a match</li>
            <li>• Get 5 in a row to win!</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-caramel text-espresso font-semibold py-4 px-8 rounded-lg text-lg active:opacity-80 transition-opacity"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
