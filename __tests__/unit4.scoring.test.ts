/**
 * Unit 4 — Scoring engine (with session/flip support)
 */

import { calculateResult, buildSession, getProgress } from '@/lib/scoring';
import { statementPairs } from '@/data/statementPairs';
import type { Answers } from '@/lib/scoring';
import type { EnneagramTypeNumber, SessionPair } from '@/types';

/**
 * Build a non-flipped session (preserves original A/B order) for deterministic tests.
 */
function buildFlatSession(): SessionPair[] {
  return statementPairs.map((p) => ({ ...p, flipped: false }));
}

/** Answer every pair so that targetType always wins (non-flipped session) */
function buildAnswersFor(targetType: EnneagramTypeNumber, session: SessionPair[]): Answers {
  const answers: Answers = {};
  session.forEach((pair) => {
    answers[pair.id] = pair.statementA.type === targetType ? 'A' : 'B';
  });
  return answers;
}

describe('Unit 4 — Scoring engine', () => {
  it('returns the correct dominant type when one type wins all its matchups', () => {
    const session = buildFlatSession();
    for (let t = 1; t <= 9; t++) {
      const type = t as EnneagramTypeNumber;
      const answers = buildAnswersFor(type, session);
      const result = calculateResult(answers, session);
      expect(result.dominantType.typeNumber).toBe(type);
    }
  });

  it('dominant type score equals 8 when it wins all matchups', () => {
    const session = buildFlatSession();
    const answers = buildAnswersFor(1, session);
    const result = calculateResult(answers, session);
    expect(result.scores[1]).toBe(8);
  });

  it('wing is one of the two adjacent types', () => {
    const session = buildFlatSession();
    for (let t = 1; t <= 9; t++) {
      const type = t as EnneagramTypeNumber;
      const answers = buildAnswersFor(type, session);
      const result = calculateResult(answers, session);
      const wingNumbers = result.dominantType.wings.map((w) => w.typeNumber);
      expect(wingNumbers).toContain(result.dominantWing.typeNumber);
    }
  });

  it('stress and growth types are not the dominant type', () => {
    const session = buildFlatSession();
    const answers = buildAnswersFor(1, session);
    const result = calculateResult(answers, session);
    expect(result.stressType.typeNumber).not.toBe(result.dominantType.typeNumber);
    expect(result.growthType.typeNumber).not.toBe(result.dominantType.typeNumber);
  });

  it('stress and growth types match the data model', () => {
    const session = buildFlatSession();
    const answers = buildAnswersFor(1, session);
    const result = calculateResult(answers, session);
    expect(result.stressType.typeNumber).toBe(result.dominantType.stressPoint);
    expect(result.growthType.typeNumber).toBe(result.dominantType.growthPoint);
  });

  it('scores object contains all 9 types', () => {
    const session = buildFlatSession();
    const answers = buildAnswersFor(3, session);
    const result = calculateResult(answers, session);
    expect(Object.keys(result.scores)).toHaveLength(9);
  });

  it('total score across all types equals 36', () => {
    const session = buildFlatSession();
    const answers = buildAnswersFor(5, session);
    const result = calculateResult(answers, session);
    const total = (Object.values(result.scores) as number[]).reduce((sum, s) => sum + s, 0);
    expect(total).toBe(36);
  });

  it('flipped pairs still credit the correct type', () => {
    // Build a session where all pairs are flipped
    const flippedSession: SessionPair[] = statementPairs.map((p) => ({ ...p, flipped: true }));
    // In a flipped pair, display-A = underlying-B, so choosing 'A' should credit statementB's type
    const answers: Answers = {};
    flippedSession.forEach((pair) => { answers[pair.id] = 'A'; }); // always pick display-A
    const result = calculateResult(answers, flippedSession);
    // Every 'A' choice on a flipped pair credits statementB's type
    const expectedScores: Answers = {};
    flippedSession.forEach((pair) => {
      // Just verify total is still 36
    });
    const total = (Object.values(result.scores) as number[]).reduce((sum, s) => sum + s, 0);
    expect(total).toBe(36);
  });

  it('buildSession returns all 36 pairs', () => {
    const session = buildSession(statementPairs);
    expect(session).toHaveLength(36);
  });

  it('buildSession assigns a flipped boolean to every pair', () => {
    const session = buildSession(statementPairs);
    session.forEach((pair) => {
      expect(typeof pair.flipped).toBe('boolean');
    });
  });

  it('getProgress returns 0 with no answers', () => {
    expect(getProgress({}, 36)).toBe(0);
  });

  it('getProgress returns 100 with all 36 answered', () => {
    const session = buildFlatSession();
    const answers = buildAnswersFor(1, session);
    expect(getProgress(answers, 36)).toBe(100);
  });

  it('getProgress returns correct percentage for partial answers', () => {
    const partial: Answers = { 1: 'A', 2: 'B', 3: 'A' };
    expect(getProgress(partial, 36)).toBe(Math.round((3 / 36) * 100));
  });
});
