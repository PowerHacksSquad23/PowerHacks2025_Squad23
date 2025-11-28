import { Router } from 'express';
import { supabase } from '../lib/supabase.js';
import { fallbackPlatformSafetyData } from '../data/fallback.js';
const platformsRouter = Router();
platformsRouter.get('/', async (_req, res) => {
    res.setHeader('cache-control', 'public, max-age=60');
    if (!supabase) {
        res.setHeader('x-data-source', 'fallback');
        return res.json(fallbackPlatformSafetyData);
    }
    const { data, error } = await supabase
        .from('platform_safety_index')
        .select('rank,platform,score,change')
        .order('rank');
    if (error || !data) {
        console.error('[platforms] Supabase query failed', error);
        res.setHeader('x-data-source', 'fallback');
        return res.json(fallbackPlatformSafetyData);
    }
    res.setHeader('x-data-source', 'supabase');
    return res.json(data);
});
export default platformsRouter;
//# sourceMappingURL=platforms.js.map