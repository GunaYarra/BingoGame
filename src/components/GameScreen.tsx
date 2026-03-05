import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full bg-espresso text-cream">
      {/* Header */}
      <header className="flex items-center justify-between p-3 bg-roast border-b border-caramel/30">
        <button
          onClick={onReset}
          className="text-caramel text-sm px-3 py-1.5 rounded active:text-cream transition-colors"
        >
          ← Back
        </button>
        <h1 className="font-bold text-cream" style={{ fontFamily: 'var(--font-display)' }}>Soc Ops</h1>
        <div className="w-16"></div>
      </header>

      {/* Instructions */}
      <p className="text-center text-cream/50 text-sm py-2 px-4">
        Tap a square when you find someone who matches it.
      </p>

      {/* Bingo indicator */}
      {hasBingo && (
        <div className="bg-caramel text-espresso text-center py-2 font-semibold text-sm">
          ☕ BINGO! You got a line!
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-3">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
