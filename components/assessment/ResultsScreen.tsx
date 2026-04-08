'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import type { AssessmentResult } from '@/types';

interface ResultsScreenProps {
  result: AssessmentResult;
  onRetake: () => void;
}

function ScoreBar({ label, score, max }: { label: string; score: number; max: number }) {
  const pct = Math.round((score / max) * 100);
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Typography variant="caption" color="text.secondary" sx={{ width: 60, flexShrink: 0 }}>
        {label}
      </Typography>
      <Box
        sx={{
          flex: 1,
          height: 8,
          bgcolor: 'grey.100',
          borderRadius: 4,
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            height: '100%',
            width: `${pct}%`,
            bgcolor: 'primary.main',
            borderRadius: 4,
            transition: 'width 0.6s ease',
          }}
        />
      </Box>
      <Typography variant="caption" color="text.secondary" sx={{ width: 20, textAlign: 'right' }}>
        {score}
      </Typography>
    </Box>
  );
}

export default function ResultsScreen({ result, onRetake }: ResultsScreenProps) {
  const { dominantType, dominantWing, scores, stressType, growthType } = result;
  const maxScore = Math.max(...(Object.values(scores) as number[]));

  const typeLabels: Record<number, string> = {
    1: 'Type 1', 2: 'Type 2', 3: 'Type 3', 4: 'Type 4', 5: 'Type 5',
    6: 'Type 6', 7: 'Type 7', 8: 'Type 8', 9: 'Type 9',
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        px: 2,
        py: 8,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ maxWidth: 640, width: '100%' }}>

        {/* Header */}
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Typography variant="overline" color="primary" sx={{ fontWeight: 600, letterSpacing: 2 }}>
            Your Results
          </Typography>
          <Typography variant="h4" sx={{ mt: 1 }}>
            Type {dominantType.typeNumber} — {dominantType.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 0.5 }}>
            {dominantType.tagline}
          </Typography>
        </Box>

        {/* Wing */}
        <Paper
          elevation={0}
          sx={{
            p: 3,
            mb: 3,
            borderRadius: 3,
            border: '1px solid',
            borderColor: 'divider',
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box>
            <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 1.5 }}>
              Dominant Wing
            </Typography>
            <Typography variant="h6">
              {dominantType.typeNumber}w{dominantWing.typeNumber} — {dominantWing.name}
            </Typography>
          </Box>
        </Paper>

        {/* Description */}
        <Paper
          elevation={0}
          sx={{ p: { xs: 3, sm: 4 }, mb: 3, borderRadius: 3, border: '1px solid', borderColor: 'divider' }}
        >
          <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 1.5 }}>
            About Your Type
          </Typography>
          <Typography variant="body1" sx={{ mt: 1.5, lineHeight: 1.85, color: 'text.primary' }}>
            {dominantType.description}
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
            <Box sx={{ flex: 1, minWidth: 200 }}>
              <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 1.5 }}>
                Core Desire
              </Typography>
              <Typography variant="body2" sx={{ mt: 0.5, lineHeight: 1.7 }}>
                {dominantType.coreDesire}
              </Typography>
            </Box>
            <Box sx={{ flex: 1, minWidth: 200 }}>
              <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 1.5 }}>
                Core Fear
              </Typography>
              <Typography variant="body2" sx={{ mt: 0.5, lineHeight: 1.7 }}>
                {dominantType.coreFear}
              </Typography>
            </Box>
          </Box>
        </Paper>

        {/* Stress & Growth */}
        <Paper
          elevation={0}
          sx={{ p: { xs: 3, sm: 4 }, mb: 3, borderRadius: 3, border: '1px solid', borderColor: 'divider' }}
        >
          <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 1.5 }}>
            Stress & Growth
          </Typography>

          <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
              <Chip label="Under Stress" size="small" color="warning" variant="outlined" sx={{ mt: 0.25 }} />
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                You may take on less healthy qualities of{' '}
                <strong>Type {stressType.typeNumber} — {stressType.name}</strong>.{' '}
                Recognizing this pattern is the first step to moving through it rather than being driven by it.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
              <Chip label="In Growth" size="small" color="success" variant="outlined" sx={{ mt: 0.25 }} />
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                At your healthiest, you move toward the positive qualities of{' '}
                <strong>Type {growthType.typeNumber} — {growthType.name}</strong>.
              </Typography>
            </Box>
          </Box>
        </Paper>

        {/* Score breakdown */}
        <Paper
          elevation={0}
          sx={{ p: { xs: 3, sm: 4 }, mb: 4, borderRadius: 3, border: '1px solid', borderColor: 'divider' }}
        >
          <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 1.5 }}>
            Score Breakdown
          </Typography>
          <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            {Object.entries(scores)
              .sort((a, b) => Number(b[0]) - Number(a[0]))
              .sort((a, b) => b[1] - a[1])
              .map(([type, score]) => (
                <ScoreBar
                  key={type}
                  label={typeLabels[Number(type)]}
                  score={score as number}
                  max={maxScore}
                />
              ))}
          </Box>
        </Paper>

        {/* Retake */}
        <Button
          variant="outlined"
          fullWidth
          onClick={onRetake}
          sx={{
            py: 1.5,
            fontWeight: 600,
            textTransform: 'none',
            borderRadius: 2,
            fontSize: '0.95rem',
          }}
        >
          Retake Assessment
        </Button>
      </Box>
    </Box>
  );
}
