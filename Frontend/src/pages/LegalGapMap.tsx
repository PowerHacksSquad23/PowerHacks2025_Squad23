import { Card } from '@/components/ui/card';

const staticMapUrl = 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/326700c1-cffe-44cf-aadf-9b1235bab97b/legal-gap-map-static-h8hhj02-1764327967647.webp';

const statusColors: { [key: string]: string } = {
  'Comprehensive Laws': '#4CBB17', // Green
  'Partial Laws': '#FFD700', // Yellow
  'Weak Laws': '#C41E3A', // Red
  'No Data': '#808080', // Gray
};

const LegalGapMapPage = () => {
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

        <Card className="mt-8 border-gray-700 bg-gray-800 p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Interpreting the Map</h2>
            <p className="text-gray-400">
                This map provides a high-level visualization of the legal landscape concerning Online Gender-Based Violence (OGBV). The colors represent the strength and comprehensiveness of laws in different regions based on our latest data. While this static map provides a snapshot, the underlying data is continuously updated. Use the <a href="/report" className="text-[#FF69B4] underline">Advocacy Report Generator</a> to get detailed, up-to-the-minute information for specific countries.
            </p>
        </Card>
      </div>
    </div>
  );
};

export default LegalGapMapPage;