import { Router } from 'express';
import { supabase } from '../lib/supabase.js';
import { fallbackTimelineData } from '../data/fallback.js';

const timelineRouter = Router();

timelineRouter.get('/', async (_req, res) => {
  res.setHeader('cache-control', 'public, max-age=60');

  if (!supabase) {
    res.setHeader('x-data-source', 'fallback');
    return res.json(fallbackTimelineData);
  }

  const { data, error } = await supabase
    .from('timeline_events')
    .select('year,event,description')
    .order('year');

  if (error || !data) {
    console.error('[timeline] Supabase query failed', error);
    res.setHeader('x-data-source', 'fallback');
    return res.json(fallbackTimelineData);
  }

  res.setHeader('x-data-source', 'supabase');
  return res.json(data);
});

export default timelineRouter;

