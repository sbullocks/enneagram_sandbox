'use client';

import { useState, useCallback, useMemo } from 'react';
import { statementPairs } from '@/data/statementPairs';
import { buildSession, calculateResult, getProgress } from '@/lib/scoring';
import type { AssessmentResult, SessionPair } from '@/types';
import type { Answers } from '@/lib/scoring';
import IntroScreen from './IntroScreen';
import QuestionCard from './QuestionCard';
import ResultsScreen from './ResultsScreen';

type Phase = 'intro' | 'questions' | 'results';

export default function AssessmentFlow() {
  const [phase, setPhase] = useState<Phase>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [session, setSession] = useState<SessionPair[]>([]);

  const handleBegin = useCallback(() => {
    // Build a fresh randomized session each time the user begins
    setSession(buildSession(statementPairs));
    setPhase('questions');
  }, []);

  const handleAnswer = useCallback(
    (choice: 'A' | 'B') => {
      const pair = session[currentIndex];
      const updatedAnswers = { ...answers, [pair.id]: choice };
      setAnswers(updatedAnswers);

      const isLast = currentIndex === session.length - 1;

      if (isLast) {
        const assessmentResult = calculateResult(updatedAnswers, session);
        setResult(assessmentResult);
        setPhase('results');
      } else {
        setCurrentIndex((prev) => prev + 1);
      }
    },
    [answers, currentIndex, session]
  );

  const handleRetake = useCallback(() => {
    setPhase('intro');
    setCurrentIndex(0);
    setAnswers({});
    setResult(null);
    setSession([]);
  }, []);

  const progress = useMemo(
    () => getProgress(answers, statementPairs.length),
    [answers]
  );

  if (phase === 'intro') {
    return <IntroScreen onBegin={handleBegin} />;
  }

  if (phase === 'questions' && session.length > 0) {
    const pair = session[currentIndex];

    // Apply flip: swap which statement shows as A vs B for this pair
    const displayPair = pair.flipped
      ? { ...pair, statementA: pair.statementB, statementB: pair.statementA }
      : pair;

    return (
      <QuestionCard
        pair={displayPair}
        questionNumber={currentIndex + 1}
        totalQuestions={session.length}
        progress={progress}
        onAnswer={handleAnswer}
      />
    );
  }

  if (phase === 'results' && result) {
    return <ResultsScreen result={result} onRetake={handleRetake} />;
  }

  return null;
}
