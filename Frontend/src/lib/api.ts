import type { LegalGapCountry, PlatformSafetyEntry, TimelineEvent } from '@/types/data';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:4000/api';

async function request<T>(path: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || `Request to ${path} failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export const fetchLegalGaps = () => request<LegalGapCountry[]>('/legal-gaps');
export const fetchPlatformSafety = () => request<PlatformSafetyEntry[]>('/platforms');
export const fetchTimeline = () => request<TimelineEvent[]>('/timeline');

