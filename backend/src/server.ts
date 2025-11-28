import express from 'express';
import cors from 'cors';
import { env } from './lib/env.js';
import legalGapsRouter from './routes/legal-gaps.js';
import platformsRouter from './routes/platforms.js';
import timelineRouter from './routes/timeline.js';
import healthRouter from './routes/health.js';

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.use('/api/health', healthRouter);
app.use('/api/legal-gaps', legalGapsRouter);
app.use('/api/platforms', platformsRouter);
app.use('/api/timeline', timelineRouter);

app.get('/api', (_req, res) => {
  res.json({
    message: 'RightsRadar API',
    routes: ['/api/legal-gaps', '/api/platforms', '/api/timeline', '/api/health']
  });
});

app.use((_req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(env.PORT, () => {
  console.log(`RightsRadar API listening on http://localhost:${env.PORT}`);
});

export default app;

