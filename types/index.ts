export type EnneagramTypeNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export interface Wing {
  typeNumber: EnneagramTypeNumber;
  name: string;
}

export interface EnneagramType {
  typeNumber: EnneagramTypeNumber;
  name: string;
  tagline: string;
  coreDesire: string;
  coreFear: string;
  description: string;
  wings: [Wing, Wing];
  stressPoint: EnneagramTypeNumber;
  growthPoint: EnneagramTypeNumber;
}

export interface StatementPair {
  id: number;
  statementA: {
    text: string;
    type: EnneagramTypeNumber;
  };
  statementB: {
    text: string;
    type: EnneagramTypeNumber;
  };
}

/**
 * A StatementPair as it will be presented to the user in a session.
 * `flipped: true` means statementB is shown as option A and statementA as option B.
 * The scoring engine uses `flipped` to credit the correct type regardless of display order.
 */
export interface SessionPair extends StatementPair {
  flipped: boolean;
}

export type Scores = Record<EnneagramTypeNumber, number>;

export interface AssessmentResult {
  dominantType: EnneagramType;
  dominantWing: Wing;
  scores: Scores;
  stressType: EnneagramType;
  growthType: EnneagramType;
}
