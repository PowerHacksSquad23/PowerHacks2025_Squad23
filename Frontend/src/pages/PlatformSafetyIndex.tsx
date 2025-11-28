import { platformSafetyData } from '@/data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUp, ArrowDown, Minus } from 'lucide-react';

const PlatformSafetyPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white">Platform Safety Index</h1>
          <p className="mt-2 text-lg text-gray-400">Comparing platform responsiveness to online gender-based violence.</p>
        </div>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Leaderboard</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="p-4">Rank</th>
                    <th className="p-4">Platform</th>
                    <th className="p-4 text-center">Safety Score</th>
                    <th className="p-4 text-center">Change</th>
                  </tr>
                </thead>
                <tbody>
                  {platformSafetyData.map((item) => (
                    <tr key={item.rank} className="border-b border-gray-700 last:border-b-0 hover:bg-gray-700/50">
                      <td className="p-4 font-bold text-2xl text-[#FF69B4]">{item.rank}</td>
                      <td className="p-4 text-lg font-medium">{item.platform}</td>
                      <td className="p-4 text-center text-xl font-semibold">{item.score}</td>
                      <td className="p-4 flex items-center justify-center">
                        <span className={`flex items-center font-bold ${item.change.startsWith('+') ? 'text-green-400' : item.change.startsWith('-') ? 'text-red-400' : 'text-gray-400'}`}>
                          {item.change.startsWith('+') && <ArrowUp className="h-5 w-5 mr-1" />}
                          {item.change.startsWith('-') && <ArrowDown className="h-5 w-5 mr-1" />}
                          {!item.change.startsWith('+') && !item.change.startsWith('-') && <Minus className="h-5 w-5 mr-1" />}
                          {item.change.substring(1)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PlatformSafetyPage;