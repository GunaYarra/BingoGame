interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-espresso/85 flex items-center justify-center p-4 z-50">
      <div className="bg-roast border border-caramel/40 rounded-xl p-6 max-w-xs w-full text-center shadow-2xl shadow-black/70 animate-[bounce_0.5s_ease-out]">
        <div className="text-5xl mb-4">☕</div>
        <h2 className="text-3xl font-bold text-caramel mb-2" style={{ fontFamily: 'var(--font-display)' }}>BINGO!</h2>
        <p className="text-cream/70 mb-6">You completed a line!</p>

        <button
          onClick={onDismiss}
          className="w-full bg-caramel text-espresso font-semibold py-3 px-6 rounded-lg active:opacity-80 transition-opacity"
        >
          Keep Playing
        </button>
      </div>
    </div>
  );
}
