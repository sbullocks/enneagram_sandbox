/**
 * Unit 1 — Scaffold verification
 * Confirms TypeScript types are valid and core modules resolve correctly.
 */

import type { EnneagramType, StatementPair, AssessmentResult, Scores } from '@/types';
import type { EnneagramTypeNumber } from '@/types';

describe('Unit 1 — Type definitions', () => {
  it('EnneagramTypeNumber accepts valid values 1–9', () => {
    const validTypes: EnneagramTypeNumber[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(validTypes).toHaveLength(9);
  });

  it('EnneagramType shape is structurally correct', () => {
    const mockType: EnneagramType = {
      typeNumber: 1,
      name: 'The Reformer',
      tagline: 'The Rational, Idealistic Type',
      coreDesire: 'To be good, to have integrity',
      coreFear: 'Being corrupt, evil, or defective',
      description: 'Mock description',
      wings: [
        { typeNumber: 9, name: 'The Idealist' },
        { typeNumber: 2, name: 'The Advocate' },
      ],
      stressPoint: 4,
      growthPoint: 7,
    };
    expect(mockType.typeNumber).toBe(1);
    expect(mockType.wings).toHaveLength(2);
    expect(mockType.stressPoint).toBe(4);
    expect(mockType.growthPoint).toBe(7);
  });

  it('StatementPair has two typed statements', () => {
    const pair: StatementPair = {
      id: 1,
      statementA: { text: 'I hold myself to very high standards.', type: 1 },
      statementB: { text: 'I go out of my way to help others.', type: 2 },
    };
    expect(pair.statementA.type).toBe(1);
    expect(pair.statementB.type).toBe(2);
  });

  it('Scores shape covers all 9 types', () => {
    const scores: Scores = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
    expect(Object.keys(scores)).toHaveLength(9);
  });
});
