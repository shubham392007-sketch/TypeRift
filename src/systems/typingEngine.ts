import { TypingMetrics } from "@/types/game";

export function validateInput(target: string, input: string) {
  let correct = 0;
  for (let index = 0; index < input.length; index += 1) {
    if (input[index]?.toLowerCase() === target[index]?.toLowerCase()) correct += 1;
  }

  return {
    isPrefixValid: correct === input.length,
    isComplete: input.toLowerCase() === target.toLowerCase(),
    correctChars: correct,
    mistakesInWord: input.length - correct
  };
}

export function calculateMetrics(params: {
  correctChars: number;
  totalChars: number;
  mistakes: number;
  elapsedMs: number;
}): TypingMetrics {
  const minutes = Math.max(params.elapsedMs / 60000, 1 / 60);
  const wpm = Math.round(params.correctChars / 5 / minutes);
  const attempted = Math.max(params.totalChars, 1);
  const accuracy = params.totalChars === 0 ? 100 : Math.max(0, Math.round((params.correctChars / attempted) * 100));

  return {
    wpm,
    accuracy,
    correctChars: params.correctChars,
    totalChars: params.totalChars,
    mistakes: params.mistakes
  };
}
