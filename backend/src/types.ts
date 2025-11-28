export type LegalGapCountry = {
  id: string;
  name: string;
  status: 'Comprehensive Laws' | 'Partial Laws' | 'Weak Laws' | 'No Data';
  details: string;
};

export type PlatformSafetyRow = {
  rank: number;
  platform: string;
  score: number;
  change: string;
};

export type TimelineEvent = {
  year: string;
  event: string;
  description: string;
};

