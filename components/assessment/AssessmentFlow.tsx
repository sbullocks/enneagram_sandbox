'use client';

import { useState, useCallback } from 'react';
import { statementPairs } from '@/data/statementPairs';
import { calculateResult, getProgress } from '@/lib/scoring';
import type { AssessmentResult } from '@/types';
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

  const handleBegin = useCallback(() => {
    setPhase('questions');
  }, []);

  const handleAnswer = useCallback(
    (choice: 'A' | 'B') => {
      const pair = statementPairs[currentIndex];
      const updatedAnswers = { ...answers, [pair.id]: choice };
      setAnswers(updatedAnswers);

      const isLast = currentIndex === statementPairs.length - 1;

      if (isLast) {
        const assessmentResult = calculateResult(updatedAnswers);
        setResult(assessmentResult);
        setPhase('results');
      } else {
        setCurrentIndex((prev) => prev + 1);
      }
    },
    [answers, currentIndex]
  );

  const handleRetake = useCallback(() => {
    setPhase('intro');
    setCurrentIndex(0);
    setAnswers({});
    setResult(null);
  }, []);

  if (phase === 'intro') {
    return <IntroScreen onBegin={handleBegin} />;
  }

  if (phase === 'questions') {
    const pair = statementPairs[currentIndex];
    const progress = getProgress(answers);

    return (
      <QuestionCard
        pair={pair}
        questionNumber={currentIndex + 1}
        totalQuestions={statementPairs.length}
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
