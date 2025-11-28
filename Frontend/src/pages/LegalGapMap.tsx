import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { fetchLegalGaps } from '@/lib/api';
import type { LegalGapCountry } from '@/types/data';

const staticMapUrl = 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/326700c1-cffe-44cf-aadf-9b1235bab97b/legal-gap-map-static-h8hhj02-1764327967647.webp';

const statusColors: { [key: string]: string } = {
  'Comprehensive Laws': '#4CBB17', // Green
  'Partial Laws': '#FFD700', // Yellow
  'Weak Laws': '#C41E3A', // Red
  'No Data': '#808080', // Gray
};

const LegalGapMapPage = () => {
  const { data, isLoading, isError, error } = useQuery<LegalGapCountry[]>({
    queryKey: ['legal-gaps'],
    queryFn: fetchLegalGaps
  });

  const statusCounts = useMemo(() => {
    if (!data) return null;

    return data.reduce<Record<string, number>>((acc, item) => {
      acc[item.status] = (acc[item.status] ?? 0) + 1;
      return acc;
    }, {});
  }, [data]);

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white">Legal Gap Map</h1>
          <p className="mt-2 text-lg text-gray-400">A global overview of legislative status against Online Gender-Based Violence.</p>
        </div>

        <div className="flex flex-wrap justify-center mb-8 gap-x-6 gap-y-2">
            {Object.entries(statusColors).map(([status, color]) => (
                <div key={status} className="flex items-center">
                    <div className="w-4 h-4 rounded-full mr-2 border border-gray-500" style={{ backgroundColor: color }}></div>
                    <span>{status}</span>
                </div>
            ))}
        </div>

        <Card className="border-gray-700 bg-gray-800 shadow-lg rounded-lg overflow-hidden p-4">
          <img src={staticMapUrl} alt="Static world map showing legal gaps for OGBV" className="w-full h-auto rounded-md" />
        </Card>

        <Card className="mt-8 border-gray-700 bg-gray-800">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Live data feed</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading && <Skeleton className="h-32 w-full bg-gray-700" />}

            {isError && (
              <Alert className="bg-gray-900 border border-red-500/50 text-white">
                <AlertTriangle className="text-red-400" />
                <AlertTitle>Unable to load country list</AlertTitle>
                <AlertDescription>{error instanceof Error ? error.message : 'Please try again later.'}</AlertDescription>
              </Alert>
            )}

            {statusCounts && (
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
                {Object.keys(statusColors).map((status) => (
                  <Card key={status} className="bg-gray-900 border-gray-700">
                    <CardContent className="pt-6">
                      <p className="text-sm text-gray-400">{status}</p>
                      <p className="text-3xl font-bold" style={{ color: statusColors[status] || '#fff' }}>
                        {statusCounts[status] ?? 0}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {data && (
              <div className="space-y-4">
                {data.map((country) => (
                  <div key={country.id} className="flex flex-col md:flex-row md:items-center md:justify-between border border-gray-700 rounded-lg p-4">
                    <div>
                      <p className="text-lg font-semibold">{country.name}</p>
                      <p className="text-sm text-gray-400">{country.details}</p>
                    </div>
                    <span
                      className="mt-3 md:mt-0 inline-flex items-center rounded-full px-4 py-1 text-sm font-semibold"
                      style={{ backgroundColor: `${statusColors[country.status] ?? '#444444'}20`, color: statusColors[country.status] ?? '#ffffff' }}
                    >
                      {country.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="mt-8 border-gray-700 bg-gray-800 p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Interpreting the Map</h2>
          <p className="text-gray-400">
            This map provides a high-level visualization of the legal landscape concerning Online Gender-Based Violence (OGBV). The colors represent the strength and
            comprehensiveness of laws in different regions based on our latest data. While this static map provides a snapshot, the underlying data is continuously
            updated. Use the <a href="/report" className="text-[#FF69B4] underline">Advocacy Report Generator</a> to get detailed, up-to-the-minute information for specific
            countries.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default LegalGapMapPage;