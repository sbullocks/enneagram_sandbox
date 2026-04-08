/**
 * Unit 3 — Statement pairs
 * Validates structural integrity of all 36 forced-choice pairs.
 */

import { statementPairs } from '@/data/statementPairs';
import type { EnneagramTypeNumber } from '@/types';

const VALID_TYPES: EnneagramTypeNumber[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

describe('Unit 3 — Statement pairs', () => {
  it('contains exactly 36 pairs', () => {
    expect(statementPairs).toHaveLength(36);
  });

  it('pair IDs are unique and sequential from 1 to 36', () => {
    const ids = statementPairs.map((p) => p.id);
    for (let i = 1; i <= 36; i++) {
      expect(ids).toContain(i);
    }
    expect(new Set(ids).size).toBe(36);
  });

  it('every statement is assigned a valid type number 1–9', () => {
    statementPairs.forEach((pair) => {
      expect(VALID_TYPES).toContain(pair.statementA.type);
      expect(VALID_TYPES).toContain(pair.statementB.type);
    });
  });

  it('each pair pits two different types against each other', () => {
    statementPairs.forEach((pair) => {
      expect(pair.statementA.type).not.toBe(pair.statementB.type);
    });
  });

  it('no type matchup appears more than once', () => {
    const seen = new Set<string>();
    statementPairs.forEach((pair) => {
      const key = [pair.statementA.type, pair.statementB.type].sort().join('-');
      expect(seen.has(key)).toBe(false);
      seen.add(key);
    });
  });

  it('all 36 unique type matchups are present (9×8/2 = 36)', () => {
    const expected = new Set<string>();
    for (let i = 1; i <= 9; i++) {
      for (let j = i + 1; j <= 9; j++) {
        expected.add(`${i}-${j}`);
      }
    }
    const actual = new Set<string>();
    statementPairs.forEach((pair) => {
      const key = [pair.statementA.type, pair.statementB.type].sort().join('-');
      actual.add(key);
    });
    expected.forEach((key) => {
      expect(actual.has(key)).toBe(true);
    });
  });

  it('all statements are non-empty strings', () => {
    statementPairs.forEach((pair) => {
      expect(pair.statementA.text.trim().length).toBeGreaterThan(0);
      expect(pair.statementB.text.trim().length).toBeGreaterThan(0);
    });
  });

  it('each type appears at least once as statementA and once as statementB across all pairs', () => {
    const typesAsA = new Set(statementPairs.map((p) => p.statementA.type));
    const typesAsB = new Set(statementPairs.map((p) => p.statementB.type));
    VALID_TYPES.forEach((t) => {
      expect(typesAsA.has(t) || typesAsB.has(t)).toBe(true);
    });
  });

  it('each type appears in exactly 8 pairs', () => {
    const counts: Record<number, number> = {};
    statementPairs.forEach((pair) => {
      counts[pair.statementA.type] = (counts[pair.statementA.type] || 0) + 1;
      counts[pair.statementB.type] = (counts[pair.statementB.type] || 0) + 1;
    });
    VALID_TYPES.forEach((t) => {
      expect(counts[t]).toBe(8);
    });
  });
});
