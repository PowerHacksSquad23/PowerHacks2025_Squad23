import { createClient } from '@supabase/supabase-js';
import { env } from './env.js';
let client = null;
if (env.SUPABASE_URL && (env.SUPABASE_SERVICE_ROLE_KEY || env.SUPABASE_ANON_KEY)) {
    const key = env.SUPABASE_SERVICE_ROLE_KEY ?? env.SUPABASE_ANON_KEY ?? '';
    client = createClient(env.SUPABASE_URL, key, {
        auth: {
            persistSession: false
        },
        global: {
            headers: { 'x-backend-service': 'rights-radar' }
        }
    });
}
else {
    console.warn('[backend] Supabase credentials missing. Falling back to static data.');
}
export const supabase = client;
//# sourceMappingURL=supabase.js.map