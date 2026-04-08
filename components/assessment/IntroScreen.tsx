'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

interface IntroScreenProps {
  onBegin: () => void;
}

export default function IntroScreen({ onBegin }: IntroScreenProps) {
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
      <Paper
        elevation={0}
        sx={{
          maxWidth: 580,
          width: '100%',
          p: { xs: 4, sm: 6 },
          borderRadius: 3,
          border: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Typography variant="overline" color="primary" sx={{ fontWeight: 600, letterSpacing: 2 }}>
          Personality Assessment
        </Typography>

        <Typography variant="h4" sx={{ mt: 1, mb: 2 }}>
          Discover Your Enneagram Type
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
          This assessment will help identify your core personality type — the patterns of thinking,
          feeling, and behaving that are most fundamental to who you are.
        </Typography>

        <Box
          component="ul"
          sx={{
            listStyle: 'none',
            p: 0,
            m: 0,
            mb: 4,
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5,
          }}
        >
          {[
            '36 questions — approximately 5 to 8 minutes',
            'You will be presented with two statements — choose the one that feels most true to you most of the time',
            'Answer based on your general patterns, not how you feel today',
            'There are no right or wrong answers',
          ].map((item) => (
            <Box
              key={item}
              component="li"
              sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  bgcolor: 'primary.main',
                  mt: '9px',
                  flexShrink: 0,
                }}
              />
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                {item}
              </Typography>
            </Box>
          ))}
        </Box>

        <Button
          variant="contained"
          size="large"
          onClick={onBegin}
          fullWidth
          sx={{
            py: 1.75,
            fontSize: '1rem',
            fontWeight: 600,
            borderRadius: 2,
            textTransform: 'none',
            boxShadow: 'none',
            '&:hover': { boxShadow: 'none' },
          }}
        >
          Begin Assessment
        </Button>
      </Paper>
    </Box>
  );
}
