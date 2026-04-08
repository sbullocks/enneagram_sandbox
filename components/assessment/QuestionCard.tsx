'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import Paper from '@mui/material/Paper';
import type { StatementPair } from '@/types';

interface QuestionCardProps {
  pair: StatementPair;
  questionNumber: number;
  totalQuestions: number;
  progress: number;
  onAnswer: (choice: 'A' | 'B') => void;
}

export default function QuestionCard({
  pair,
  questionNumber,
  totalQuestions,
  progress,
  onAnswer,
}: QuestionCardProps) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
        py: 6,
        bgcolor: 'background.default',
      }}
    >
      <Box sx={{ maxWidth: 620, width: '100%' }}>
        {/* Progress */}
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 500 }}>
              Question {questionNumber} of {totalQuestions}
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 500 }}>
              {progress}%
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: 6,
              borderRadius: 3,
              bgcolor: 'grey.200',
              '& .MuiLinearProgress-bar': { borderRadius: 3 },
            }}
          />
        </Box>

        {/* Prompt */}
        <Typography
          variant="overline"
          color="primary"
          sx={{ display: 'block', mb: 2, fontWeight: 600, letterSpacing: 1.5 }}
        >
          Choose the statement that feels most true to you
        </Typography>

        {/* Option cards */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {(['A', 'B'] as const).map((choice) => {
            const statement = choice === 'A' ? pair.statementA : pair.statementB;
            return (
              <Paper
                key={choice}
                elevation={0}
                onClick={() => onAnswer(choice)}
                sx={{
                  p: { xs: 3, sm: 4 },
                  borderRadius: 3,
                  border: '1.5px solid',
                  borderColor: 'divider',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 2.5,
                  '&:hover': {
                    borderColor: 'primary.main',
                    bgcolor: 'primary.50',
                    transform: 'translateY(-1px)',
                    boxShadow: '0 4px 16px rgba(74, 111, 165, 0.12)',
                  },
                  '&:active': {
                    transform: 'translateY(0)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    border: '1.5px solid',
                    borderColor: 'divider',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    mt: 0.25,
                  }}
                >
                  <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700 }}>
                    {choice}
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ lineHeight: 1.75, color: 'text.primary' }}>
                  {statement.text}
                </Typography>
              </Paper>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
