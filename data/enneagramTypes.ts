import type { EnneagramType, EnneagramTypeNumber } from '@/types';

export const enneagramTypes: EnneagramType[] = [
  {
    typeNumber: 1,
    name: 'The Reformer',
    tagline: 'The Rational, Idealistic Type',
    coreDesire: 'To be good, to have integrity, and to live by their principles',
    coreFear: 'Being corrupt, defective, or morally wrong',
    description:
      'Ones are driven by an inner voice that holds them — and others — to very high standards. They have a strong sense of what is right and wrong and feel a persistent pressure to improve themselves and the world around them. In co-parenting situations, they may struggle with a co-parent who does not operate with the same level of responsibility or fairness they expect. They need guidance that acknowledges their values, validates their frustration without feeding resentment, and helps them channel their principles into effective, measured action rather than rigid control.',
    wings: [
      { typeNumber: 9, name: 'The Idealist' },
      { typeNumber: 2, name: 'The Advocate' },
    ],
    stressPoint: 4,
    growthPoint: 7,
  },
  {
    typeNumber: 2,
    name: 'The Helper',
    tagline: 'The Caring, Interpersonal Type',
    coreDesire: 'To be loved, needed, and appreciated',
    coreFear: 'Being unloved, unwanted, or dispensable',
    description:
      'Twos are warm, giving, and deeply attuned to the needs of others — often at the expense of their own. They build their sense of worth around being needed and can struggle to ask for what they need directly. In high-conflict co-parenting, Twos may overextend themselves for the sake of peace or the children, then feel resentful when that effort is unseen. They respond well to guidance that affirms their care for their children, helps them set healthy limits without guilt, and acknowledges the emotional labor they are quietly carrying.',
    wings: [
      { typeNumber: 1, name: 'The Servant' },
      { typeNumber: 3, name: 'The Host' },
    ],
    stressPoint: 8,
    growthPoint: 4,
  },
  {
    typeNumber: 3,
    name: 'The Achiever',
    tagline: 'The Success-Oriented, Pragmatic Type',
    coreDesire: 'To feel valuable, successful, and admired',
    coreFear: 'Being worthless, failing, or seen as a fraud',
    description:
      'Threes are driven, adaptable, and image-conscious. They move quickly toward goals and can adjust their presentation depending on what the situation demands. In co-parenting conflict, Threes may default to performance — presenting well in court, managing perceptions — while struggling with the emotional reality underneath. They benefit from guidance that is direct, practical, and outcome-focused, while gently encouraging them to slow down and engage with the emotional truth of their situation rather than just managing how it looks.',
    wings: [
      { typeNumber: 2, name: 'The Charmer' },
      { typeNumber: 4, name: 'The Professional' },
    ],
    stressPoint: 9,
    growthPoint: 6,
  },
  {
    typeNumber: 4,
    name: 'The Individualist',
    tagline: 'The Sensitive, Introspective Type',
    coreDesire: 'To be authentic and to understand themselves deeply',
    coreFear: 'Having no identity or personal significance',
    description:
      'Fours experience the world through a rich emotional lens. They feel deeply, often sense that something essential is missing, and can move fluidly between longing and melancholy. In co-parenting conflict, Fours may feel uniquely unseen or misunderstood and can struggle with the impersonal nature of legal processes. Guidance for Fours should honor their emotional depth and individuality, help them translate feelings into language the system recognizes, and remind them that their sensitivity is a strength — not a liability — in advocating for their children.',
    wings: [
      { typeNumber: 3, name: 'The Aristocrat' },
      { typeNumber: 5, name: 'The Bohemian' },
    ],
    stressPoint: 2,
    growthPoint: 1,
  },
  {
    typeNumber: 5,
    name: 'The Investigator',
    tagline: 'The Intense, Cerebral Type',
    coreDesire: 'To be competent and knowledgeable',
    coreFear: 'Being helpless, useless, or overwhelmed by the world',
    description:
      'Fives are analytical, private, and self-reliant. They manage the world by understanding it and tend to conserve their emotional and social energy carefully. In co-parenting conflict, Fives may withdraw when overwhelmed, over-research rather than act, or struggle to communicate in emotionally accessible ways that resonate with others. They respond best to guidance that is well-reasoned, respects their autonomy, and helps them translate their thorough thinking into clear, effective communication and action.',
    wings: [
      { typeNumber: 4, name: 'The Iconoclast' },
      { typeNumber: 6, name: 'The Problem Solver' },
    ],
    stressPoint: 7,
    growthPoint: 8,
  },
  {
    typeNumber: 6,
    name: 'The Loyalist',
    tagline: 'The Committed, Security-Oriented Type',
    coreDesire: 'To have security, support, and reliable guidance',
    coreFear: 'Being without support, abandoned, or unable to survive on their own',
    description:
      'Sixes are loyal, responsible, and highly attuned to potential threats. They think carefully, anticipate what could go wrong, and seek reassurance from trusted sources. In co-parenting conflict, Sixes may feel caught between wanting to trust the process and fearing it will fail them. They can spiral into worst-case thinking or seek excessive reassurance. Guidance for Sixes should be steady, reliable, and honest — validating their vigilance while helping them distinguish real threats from anxious projections and build confidence in their own judgment.',
    wings: [
      { typeNumber: 5, name: 'The Defender' },
      { typeNumber: 7, name: 'The Buddy' },
    ],
    stressPoint: 3,
    growthPoint: 9,
  },
  {
    typeNumber: 7,
    name: 'The Enthusiast',
    tagline: 'The Spontaneous, Versatile Type',
    coreDesire: 'To be happy, free, and fully satisfied',
    coreFear: 'Being deprived, trapped in pain, or limited',
    description:
      'Sevens are energetic, optimistic, and constantly seeking new experiences. They are gifted at reframing difficulty as opportunity, but can also use that skill to avoid sitting with pain that needs attention. In co-parenting conflict, Sevens may minimize serious issues, move on too quickly, or feel deeply constrained by legal and emotional obligations they cannot simply escape. Guidance should acknowledge their natural resilience while helping them stay present with what is difficult, and channel their energy into constructive, sustained action.',
    wings: [
      { typeNumber: 6, name: 'The Entertainer' },
      { typeNumber: 8, name: 'The Realist' },
    ],
    stressPoint: 1,
    growthPoint: 5,
  },
  {
    typeNumber: 8,
    name: 'The Challenger',
    tagline: 'The Powerful, Dominating Type',
    coreDesire: 'To protect themselves and remain in control of their own life',
    coreFear: 'Being harmed, controlled, or at the mercy of others',
    description:
      'Eights are direct, self-confident, and fiercely protective of those they love. They lead with strength, resist vulnerability, and do not back down from confrontation. In high-conflict co-parenting, Eights may escalate when they feel disrespected or maneuvered, and their intensity can work against them in legal and mediation contexts. Guidance for Eights should be honest and direct — they have no patience for softening or hedging — and should help them distinguish strategic strength from reactive force, and advocate effectively for their children without self-sabotage.',
    wings: [
      { typeNumber: 7, name: 'The Maverick' },
      { typeNumber: 9, name: 'The Bear' },
    ],
    stressPoint: 5,
    growthPoint: 2,
  },
  {
    typeNumber: 9,
    name: 'The Peacemaker',
    tagline: 'The Easygoing, Self-Effacing Type',
    coreDesire: 'To have inner peace and harmony with others',
    coreFear: 'Loss, separation, or creating conflict that destroys connection',
    description:
      'Nines are accepting, patient, and deeply averse to conflict. They have a gift for seeing all sides and a tendency to merge with others\' priorities at the expense of their own. In co-parenting situations, Nines may go along to avoid conflict even when doing so harms them or their children, or become passively resistant when pushed too far. Guidance for Nines must be gentle but firm — helping them recognize that their needs and their children\'s needs are worth advocating for, and that avoiding conflict now often creates larger conflicts later.',
    wings: [
      { typeNumber: 8, name: 'The Advisor' },
      { typeNumber: 1, name: 'The Dreamer' },
    ],
    stressPoint: 6,
    growthPoint: 3,
  },
];

/**
 * Look up a type by number. Throws if not found (should never happen with valid input).
 */
export function getTypeByNumber(n: EnneagramTypeNumber): EnneagramType {
  const type = enneagramTypes.find((t) => t.typeNumber === n);
  if (!type) throw new Error(`Enneagram type ${n} not found`);
  return type;
}
