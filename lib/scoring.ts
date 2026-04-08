import { statementPairs } from '@/data/statementPairs';
import { getTypeByNumber } from '@/data/enneagramTypes';
import type { AssessmentResult, EnneagramTypeNumber, Scores } from '@/types';

export type Answers = Record<number, 'A' | 'B'>;

/**
 * Calculate the Enneagram assessment result from a completed set of answers.
 *
 * Scoring logic:
 * - Each chosen statement increments the score for its tagged type.
 * - The type with the highest score is the dominant type.
 * - The wing is determined by comparing the scores of the two adjacent types.
 * - Stress and growth types are looked up from the dominant type's data.
 */
export function calculateResult(answers: Answers): AssessmentResult {
  const scores: Scores = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };

  statementPairs.forEach((pair) => {
    const answer = answers[pair.id];
    if (answer === 'A') scores[pair.statementA.type]++;
    else if (answer === 'B') scores[pair.statementB.type]++;
  });

  // Sort types by score descending — first entry is dominant type
  const sorted = (Object.entries(scores) as [string, number][]).sort((a, b) => b[1] - a[1]);
  const dominantTypeNumber = Number(sorted[0][0]) as EnneagramTypeNumber;
  const dominantType = getTypeByNumber(dominantTypeNumber);

  // Wing: whichever adjacent type scored higher
  const [wingA, wingB] = dominantType.wings;
  const dominantWing = scores[wingA.typeNumber] >= scores[wingB.typeNumber] ? wingA : wingB;

  return {
    dominantType,
    dominantWing,
    scores,
    stressType: getTypeByNumber(dominantType.stressPoint),
    growthType: getTypeByNumber(dominantType.growthPoint),
  };
}

/**
 * Returns the percentage of questions answered (0–100).
 */
export function getProgress(answers: Answers): number {
  const answered = Object.keys(answers).length;
  return Math.round((answered / statementPairs.length) * 100);
}
