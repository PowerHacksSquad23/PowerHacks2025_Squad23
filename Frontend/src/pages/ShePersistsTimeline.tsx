import { useQuery } from '@tanstack/react-query';
import { Milestone, AlertTriangle } from 'lucide-react';
import { fetchTimeline } from '@/lib/api';
import type { TimelineEvent } from '@/types/data';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const ShePersistsTimelinePage = () => {
  const { data, isLoading, isError, error } = useQuery<TimelineEvent[]>({
    queryKey: ['timeline'],
    queryFn: fetchTimeline
  });

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white">She Persists Timeline</h1>
          <p className="mt-2 text-lg text-gray-400">Key milestones in the global fight against online gender-based violence.</p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-700"></div>

          {isLoading && <Skeleton className="h-64 w-full bg-gray-700" />}

          {isError && (
            <Alert className="bg-gray-900 border border-red-500/50 text-white">
              <AlertTriangle className="text-red-400" />
              <AlertTitle>Unable to load milestones</AlertTitle>
              <AlertDescription>{error instanceof Error ? error.message : 'Please try again later.'}</AlertDescription>
            </Alert>
          )}

          {data?.map((item, index) => (
            <div key={`${item.year}-${item.event}`} className={`mb-12 flex items-center w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className="p-6 rounded-lg shadow-lg bg-gray-800 border border-gray-700 hover:border-[#FFA500] transition-colors duration-300">
                  <p className="text-2xl font-bold text-[#FFA500]">{item.year}</p>
                  <h3 className="text-xl font-semibold mt-2 text-white">{item.event}</h3>
                  <p className="mt-2 text-gray-400">{item.description}</p>
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-gray-900 rounded-full border-2 border-[#FFA500] flex items-center justify-center">
                <Milestone className="w-4 h-4 text-[#FFA500]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShePersistsTimelinePage;