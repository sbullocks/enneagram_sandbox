/**
 * Unit 2 — Enneagram data model
 * Validates structural integrity of all 9 type definitions.
 */

import { enneagramTypes, getTypeByNumber } from '@/data/enneagramTypes';
import type { EnneagramTypeNumber } from '@/types';

describe('Unit 2 — Enneagram data model', () => {
  it('contains exactly 9 types', () => {
    expect(enneagramTypes).toHaveLength(9);
  });

  it('each type has a unique typeNumber 1–9', () => {
    const numbers = enneagramTypes.map((t) => t.typeNumber);
    const unique = new Set(numbers);
    expect(unique.size).toBe(9);
    for (let i = 1; i <= 9; i++) {
      expect(numbers).toContain(i);
    }
  });

  it('each type has exactly 2 wings', () => {
    enneagramTypes.forEach((t) => {
      expect(t.wings).toHaveLength(2);
    });
  });

  it('each wing typeNumber is adjacent on the circle', () => {
    const adjacency: Record<EnneagramTypeNumber, [EnneagramTypeNumber, EnneagramTypeNumber]> = {
      1: [9, 2],
      2: [1, 3],
      3: [2, 4],
      4: [3, 5],
      5: [4, 6],
      6: [5, 7],
      7: [6, 8],
      8: [7, 9],
      9: [8, 1],
    };
    enneagramTypes.forEach((t) => {
      const [leftWing, rightWing] = adjacency[t.typeNumber];
      const wingNumbers = t.wings.map((w) => w.typeNumber);
      expect(wingNumbers).toContain(leftWing);
      expect(wingNumbers).toContain(rightWing);
    });
  });

  it('stress and growth points are valid type numbers 1–9', () => {
    enneagramTypes.forEach((t) => {
      expect(t.stressPoint).toBeGreaterThanOrEqual(1);
      expect(t.stressPoint).toBeLessThanOrEqual(9);
      expect(t.growthPoint).toBeGreaterThanOrEqual(1);
      expect(t.growthPoint).toBeLessThanOrEqual(9);
    });
  });

  it('stress and growth points are not the same as the core type', () => {
    enneagramTypes.forEach((t) => {
      expect(t.stressPoint).not.toBe(t.typeNumber);
      expect(t.growthPoint).not.toBe(t.typeNumber);
    });
  });

  it('each type has non-empty required text fields', () => {
    enneagramTypes.forEach((t) => {
      expect(t.name.trim().length).toBeGreaterThan(0);
      expect(t.tagline.trim().length).toBeGreaterThan(0);
      expect(t.coreDesire.trim().length).toBeGreaterThan(0);
      expect(t.coreFear.trim().length).toBeGreaterThan(0);
      expect(t.description.trim().length).toBeGreaterThan(0);
      t.wings.forEach((w) => {
        expect(w.name.trim().length).toBeGreaterThan(0);
      });
    });
  });

  it('getTypeByNumber returns the correct type', () => {
    const type1 = getTypeByNumber(1);
    expect(type1.typeNumber).toBe(1);
    expect(type1.name).toBe('The Reformer');

    const type9 = getTypeByNumber(9);
    expect(type9.typeNumber).toBe(9);
    expect(type9.name).toBe('The Peacemaker');
  });

  it('getTypeByNumber throws for an invalid type number', () => {
    expect(() => getTypeByNumber(99 as EnneagramTypeNumber)).toThrow();
  });

  it('known stress and growth arrows are correct', () => {
    expect(getTypeByNumber(1).stressPoint).toBe(4);
    expect(getTypeByNumber(1).growthPoint).toBe(7);
    expect(getTypeByNumber(4).stressPoint).toBe(2);
    expect(getTypeByNumber(4).growthPoint).toBe(1);
    expect(getTypeByNumber(9).stressPoint).toBe(6);
    expect(getTypeByNumber(9).growthPoint).toBe(3);
  });
});
