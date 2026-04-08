import type { StatementPair } from '@/types';

/**
 * 36 forced-choice statement pairs.
 * Each of the 9 types is compared against every other type exactly once (9×8/2 = 36).
 * Statements target core fear/desire and inner motivation — not surface behavior.
 * Original content. Not sourced from RHETI or the Enneagram Institute.
 */
export const statementPairs: StatementPair[] = [
  // --- Type 1 vs others ---
  {
    id: 1,
    statementA: {
      text: 'I feel a persistent inner pressure to do things correctly — cutting corners, even small ones, bothers me.',
      type: 1,
    },
    statementB: {
      text: 'My first instinct in most situations is to ask what I can do to help or what someone else might need.',
      type: 2,
    },
  },
  {
    id: 2,
    statementA: {
      text: 'Getting something right matters more to me than getting recognition for it.',
      type: 1,
    },
    statementB: {
      text: 'I am motivated by achieving results that others can see and respect.',
      type: 3,
    },
  },
  {
    id: 3,
    statementA: {
      text: 'I have a clear sense of what the right thing to do is, and I feel compelled to act on it.',
      type: 1,
    },
    statementB: {
      text: 'I process most experiences through a personal emotional lens and need to feel genuinely understood.',
      type: 4,
    },
  },
  {
    id: 4,
    statementA: {
      text: 'I feel responsible for addressing what is wrong, even when it is not technically my problem to fix.',
      type: 1,
    },
    statementB: {
      text: 'I hold back in most situations until I feel I fully understand what is happening.',
      type: 5,
    },
  },
  {
    id: 5,
    statementA: {
      text: 'I hold myself to high standards because I believe that is what integrity requires.',
      type: 1,
    },
    statementB: {
      text: 'I look carefully for what could go wrong before I commit to a course of action.',
      type: 6,
    },
  },
  {
    id: 6,
    statementA: {
      text: 'I struggle to let go of mistakes or imperfections until I have properly addressed them.',
      type: 1,
    },
    statementB: {
      text: 'I find it easier to focus on what is possible ahead than to stay with what is painful right now.',
      type: 7,
    },
  },
  {
    id: 7,
    statementA: {
      text: 'I tend to hold back strong reactions because I believe in responding from principle, not impulse.',
      type: 1,
    },
    statementB: {
      text: 'When something feels wrong or unjust, I confront it directly rather than hold back.',
      type: 8,
    },
  },
  {
    id: 8,
    statementA: {
      text: 'I often feel a responsibility to improve things — in myself and in my environment.',
      type: 1,
    },
    statementB: {
      text: 'I prioritize keeping the peace and maintaining a sense of calm over pushing for change.',
      type: 9,
    },
  },

  // --- Type 2 vs others ---
  {
    id: 9,
    statementA: {
      text: 'The most satisfying moments for me are when I have genuinely made someone\'s life easier or better.',
      type: 2,
    },
    statementB: {
      text: 'The most satisfying moments for me are when my efforts produce results that earn genuine recognition — when others can see the value of what I have done.',
      type: 3,
    },
  },
  {
    id: 10,
    statementA: {
      text: 'I am very attuned to other people\'s emotional states and naturally adjust to what they seem to need.',
      type: 2,
    },
    statementB: {
      text: 'I am most at home in deep, honest conversations where I do not have to pretend to be okay.',
      type: 4,
    },
  },
  {
    id: 11,
    statementA: {
      text: 'I find it hard to say no to someone who needs help, even when I am already stretched thin.',
      type: 2,
    },
    statementB: {
      text: 'I need time alone to recharge, and I guard my personal space and energy carefully.',
      type: 5,
    },
  },
  {
    id: 12,
    statementA: {
      text: 'I build closeness by giving — being there for people is how I show I care.',
      type: 2,
    },
    statementB: {
      text: 'I build closeness through reliability — I show up consistently and expect the same in return.',
      type: 6,
    },
  },
  {
    id: 13,
    statementA: {
      text: 'I feel most connected when I am needed by someone I care about.',
      type: 2,
    },
    statementB: {
      text: 'I feel most alive when I am engaged in something exciting or full of new possibilities.',
      type: 7,
    },
  },
  {
    id: 14,
    statementA: {
      text: 'I soften my approach to preserve the relationship, even when I am frustrated.',
      type: 2,
    },
    statementB: {
      text: 'I say what I mean directly, even if it creates friction — I would rather deal with it than avoid it.',
      type: 8,
    },
  },
  {
    id: 15,
    statementA: {
      text: 'I work hard to make sure the people I love feel cared for and supported.',
      type: 2,
    },
    statementB: {
      text: 'I work hard to make sure the people around me feel comfortable and at ease.',
      type: 9,
    },
  },

  // --- Type 3 vs others ---
  {
    id: 16,
    statementA: {
      text: 'I am good at reading what a situation calls for and presenting myself accordingly.',
      type: 3,
    },
    statementB: {
      text: 'I resist presenting myself as something I am not — authenticity matters more to me than approval.',
      type: 4,
    },
  },
  {
    id: 17,
    statementA: {
      text: 'I focus on results and keep moving — analysis is only useful when it leads to action.',
      type: 3,
    },
    statementB: {
      text: 'I need to fully understand a situation before I feel ready to act on it.',
      type: 5,
    },
  },
  {
    id: 18,
    statementA: {
      text: 'I trust my own instincts and ability to figure things out as I go.',
      type: 3,
    },
    statementB: {
      text: 'I feel more confident when I have thought through the risks and have a backup plan ready.',
      type: 6,
    },
  },
  {
    id: 19,
    statementA: {
      text: 'I am driven by specific goals I can point to as evidence of what I have accomplished.',
      type: 3,
    },
    statementB: {
      text: 'I am drawn to new experiences and open possibilities more than a fixed destination.',
      type: 7,
    },
  },
  {
    id: 20,
    statementA: {
      text: 'I adjust my approach based on what will produce the best outcome in a given situation.',
      type: 3,
    },
    statementB: {
      text: 'I stay the course on what I believe is right, regardless of how it lands with others.',
      type: 8,
    },
  },
  {
    id: 21,
    statementA: {
      text: 'I need to be working toward something — achieving goals and being valued for what I accomplish gives my life a sense of purpose.',
      type: 3,
    },
    statementB: {
      text: 'I am energized by calm — having space to simply be without pressure or demands.',
      type: 9,
    },
  },

  // --- Type 4 vs others ---
  {
    id: 22,
    statementA: {
      text: 'I am drawn to what is personal, meaningful, and emotionally true — even when it is painful.',
      type: 4,
    },
    statementB: {
      text: 'I am more comfortable with ideas and information than with emotionally charged conversations.',
      type: 5,
    },
  },
  {
    id: 23,
    statementA: {
      text: 'I would rather feel something deeply — even something difficult — than live on the surface.',
      type: 4,
    },
    statementB: {
      text: 'I would rather feel stable and prepared than open myself to something uncertain or risky.',
      type: 6,
    },
  },
  {
    id: 24,
    statementA: {
      text: 'I tend to sit with difficult feelings and give them space rather than rush past them.',
      type: 4,
    },
    statementB: {
      text: 'When things get heavy, I instinctively look for a way to shift the energy or find a lighter angle.',
      type: 7,
    },
  },
  {
    id: 25,
    statementA: {
      text: 'My strongest emotional responses come from feeling unseen, dismissed, or misunderstood.',
      type: 4,
    },
    statementB: {
      text: 'My strongest emotional responses come from feeling controlled, disrespected, or treated unjustly.',
      type: 8,
    },
  },
  {
    id: 26,
    statementA: {
      text: 'I need my inner world — my feelings, my story — to be recognized as real and significant.',
      type: 4,
    },
    statementB: {
      text: 'I tend to minimize my inner world so I do not burden or unsettle the people around me.',
      type: 9,
    },
  },

  // --- Type 5 vs others ---
  {
    id: 27,
    statementA: {
      text: 'I prefer to work through problems on my own before involving or consulting others.',
      type: 5,
    },
    statementB: {
      text: 'When facing something uncertain, my instinct is to consult someone I trust before deciding.',
      type: 6,
    },
  },
  {
    id: 28,
    statementA: {
      text: 'I go deep on fewer things rather than broad across many — depth matters more to me than variety.',
      type: 5,
    },
    statementB: {
      text: 'I thrive with variety and new input — staying in one lane for too long feels limiting.',
      type: 7,
    },
  },
  {
    id: 29,
    statementA: {
      text: 'I manage difficult situations by stepping back, observing, and thinking carefully before engaging.',
      type: 5,
    },
    statementB: {
      text: 'I manage difficult situations by stepping forward, making a decision, and taking charge.',
      type: 8,
    },
  },
  {
    id: 30,
    statementA: {
      text: 'When I am overwhelmed, I withdraw — I need quiet and solitude to process and recover.',
      type: 5,
    },
    statementB: {
      text: 'When I am overwhelmed, I go along with what others want rather than assert my own needs.',
      type: 9,
    },
  },

  // --- Type 6 vs others ---
  {
    id: 31,
    statementA: {
      text: 'I feel more secure when I have thought through the worst-case scenario and have a plan for it.',
      type: 6,
    },
    statementB: {
      text: 'I feel more secure when I know there are multiple options available and I am not locked in.',
      type: 7,
    },
  },
  {
    id: 32,
    statementA: {
      text: 'I look for trustworthy guidance or reliable structure before committing to something significant.',
      type: 6,
    },
    statementB: {
      text: 'I trust my own judgment first — external authority needs to earn my respect before I follow it.',
      type: 8,
    },
  },
  {
    id: 33,
    statementA: {
      text: 'Uncertainty makes me anxious, and I work hard to anticipate and prepare for what might go wrong.',
      type: 6,
    },
    statementB: {
      text: 'Uncertainty does not trouble me much — I generally believe things will work out without needing to control them.',
      type: 9,
    },
  },

  // --- Type 7 vs others ---
  {
    id: 34,
    statementA: {
      text: 'I deal with hardship by looking forward — focusing on what comes next rather than dwelling on what hurts now.',
      type: 7,
    },
    statementB: {
      text: 'I deal with hardship by pushing through it — strength and force of will are how I get to the other side.',
      type: 8,
    },
  },
  {
    id: 35,
    statementA: {
      text: 'I resist being tied to one path — I want to keep my options open and stay flexible.',
      type: 7,
    },
    statementB: {
      text: 'I resist disruption to a settled state — peace and stability matter more to me than novelty.',
      type: 9,
    },
  },

  // --- Type 8 vs 9 ---
  {
    id: 36,
    statementA: {
      text: 'When something is not working, I push harder, speak more directly, and take stronger action.',
      type: 8,
    },
    statementB: {
      text: 'When something is not working, I tend to wait, adapt, or let the situation resolve on its own.',
      type: 9,
    },
  },
];
