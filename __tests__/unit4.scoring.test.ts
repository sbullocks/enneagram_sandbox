/**
 * Unit 4 — Scoring engine
 */

import { calculateResult, getProgress } from '@/lib/scoring';
import { statementPairs } from '@/data/statementPairs';
import type { Answers } from '@/lib/scoring';
import type { EnneagramTypeNumber } from '@/types';

/** Answer every pair so that typeTarget always wins */
function buildAnswersFor(targetType: EnneagramTypeNumber): Answers {
  const answers: Answers = {};
  statementPairs.forEach((pair) => {
    answers[pair.id] = pair.statementA.type === targetType ? 'A' : 'B';
  });
  return answers;
}

describe('Unit 4 — Scoring engine', () => {
  it('returns the correct dominant type when one type wins all its matchups', () => {
    for (let t = 1; t <= 9; t++) {
      const type = t as EnneagramTypeNumber;
      const answers = buildAnswersFor(type);
      const result = calculateResult(answers);
      expect(result.dominantType.typeNumber).toBe(type);
    }
  });

  it('dominant type score equals 8 when it wins all matchups (each type appears in 8 pairs)', () => {
    const answers = buildAnswersFor(1);
    const result = calculateResult(answers);
    expect(result.scores[1]).toBe(8);
  });

  it('wing is one of the two adjacent types', () => {
    for (let t = 1; t <= 9; t++) {
      const type = t as EnneagramTypeNumber;
      const answers = buildAnswersFor(type);
      const result = calculateResult(answers);
      const wingNumbers = result.dominantType.wings.map((w) => w.typeNumber);
      expect(wingNumbers).toContain(result.dominantWing.typeNumber);
    }
  });

  it('stress and growth types are not the dominant type', () => {
    const answers = buildAnswersFor(1);
    const result = calculateResult(answers);
    expect(result.stressType.typeNumber).not.toBe(result.dominantType.typeNumber);
    expect(result.growthType.typeNumber).not.toBe(result.dominantType.typeNumber);
  });

  it('stress and growth types match the data model', () => {
    const answers = buildAnswersFor(1);
    const result = calculateResult(answers);
    expect(result.stressType.typeNumber).toBe(result.dominantType.stressPoint);
    expect(result.growthType.typeNumber).toBe(result.dominantType.growthPoint);
  });

  it('scores object contains all 9 types', () => {
    const answers = buildAnswersFor(3);
    const result = calculateResult(answers);
    expect(Object.keys(result.scores)).toHaveLength(9);
  });

  it('total score across all types equals 36 (one point per answered pair)', () => {
    const answers = buildAnswersFor(5);
    const result = calculateResult(answers);
    const total = (Object.values(result.scores) as number[]).reduce((sum, s) => sum + s, 0);
    expect(total).toBe(36);
  });

  it('getProgress returns 0 with no answers', () => {
    expect(getProgress({})).toBe(0);
  });

  it('getProgress returns 100 with all 36 answered', () => {
    const answers = buildAnswersFor(1);
    expect(getProgress(answers)).toBe(100);
  });

  it('getProgress returns correct percentage for partial answers', () => {
    const partial: Answers = { 1: 'A', 2: 'B', 3: 'A' };
    expect(getProgress(partial)).toBe(Math.round((3 / 36) * 100));
  });
});
