import { Router } from 'express';
import { supabase } from '../lib/supabase.js';

const healthRouter = Router();

healthRouter.get('/', async (_req, res) => {
  const healthy = Boolean(supabase);
  res.json({
    status: 'ok',
    supabase: healthy ? 'configured' : 'fallback',
    timestamp: new Date().toISOString()
  });
});

export default healthRouter;

