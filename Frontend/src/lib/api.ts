import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

// --- 1. Fetch Platform Safety ---
export const fetchPlatformSafety = async () => {
  const { data, error } = await supabase
    .from('tech_platforms')
    .select('*')
    .order('safety_score', { ascending: false });

  if (error) throw error;

  return (data as any[]).map((item, index) => ({
    id: item.id,
    rank: index + 1,
    platform: item.platform_name,
    score: item.safety_score,
    change: index % 2 === 0 ? '+2' : '-1'
  }));
};

// --- 2. Fetch GBV Laws (Map) ---
export const fetchGbvLaws = async () => {
  const { data, error } = await supabase
    .from('gbv_laws')
    .select('*');

  if (error) throw error;
  return data;
};

// --- 3. Fetch Timeline (Real DB Connection) ---
export const fetchTimeline = async () => {
  const { data, error } = await supabase
    .from('gbv_timeline')
    .select('*')
    .order('year', { ascending: true }); // Orders events from oldest to newest

  if (error) throw error;
  return data;
};