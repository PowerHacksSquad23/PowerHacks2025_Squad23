import { timelineData } from '@/data/mockData';
import { Milestone } from 'lucide-react';

const ShePersistsTimelinePage = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white">She Persists Timeline</h1>
          <p className="mt-2 text-lg text-gray-400">Key milestones in the global fight against online gender-based violence.</p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* The vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-700"></div>

          {timelineData.map((item, index) => (
            <div key={item.year} className={`mb-12 flex items-center w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className={`p-6 rounded-lg shadow-lg bg-gray-800 border border-gray-700 hover:border-[#FFA500] transition-colors duration-300`}>
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