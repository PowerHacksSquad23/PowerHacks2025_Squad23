import { Router } from 'express';
import { supabase } from '../lib/supabase.js';
import { fallbackLegalGapData } from '../data/fallback.js';
const legalGapsRouter = Router();
legalGapsRouter.get('/', async (_req, res) => {
    res.setHeader('cache-control', 'public, max-age=60');
    if (!supabase) {
        res.setHeader('x-data-source', 'fallback');
        return res.json(fallbackLegalGapData);
    }
    const { data, error } = await supabase
        .from('legal_gap_countries')
        .select('id,name,status,details')
        .order('name');
    if (error || !data) {
        console.error('[legal-gaps] Supabase query failed', error);
        res.setHeader('x-data-source', 'fallback');
        return res.json(fallbackLegalGapData);
    }
    res.setHeader('x-data-source', 'supabase');
    return res.json(data);
});
export default legalGapsRouter;
//# sourceMappingURL=legal-gaps.js.map