import { Map, Shield, BarChart, FileText, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const HomePage = () => {
  const heroImageUrl = 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/326700c1-cffe-44cf-aadf-9b1235bab97b/hero-banner-bn98f0p-1764327276831.webp';

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[50vh] flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${heroImageUrl})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">Tracking Digital Safety for Women</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
            RightsRadar provides a global overview of laws and platform accountability in the fight against online gender-based violence (OGBV).
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Legal Gap Map */}
          <FeatureCard
            to="/map"
            icon={<Map className="h-10 w-10 text-[#FF69B4]" />}
            title="Legal Gap Map"
            description="Visualize which countries have adequate laws to protect women from OGBV."
          />

          {/* Platform Safety Index */}
          <FeatureCard
            to="/platforms"
            icon={<Shield className="h-10 w-10 text-[#FFA500]" />}
            title="Platform Safety Index"
            description="Compare how major tech platforms are responding to safety concerns."
          />

          {/* She Persists Timeline */}
          <FeatureCard
            to="/timeline"
            icon={<BarChart className="h-10 w-10 text-[#FF69B4]" />}
            title="She Persists Timeline"
            description="Explore the key milestones in the fight for digital rights and safety."
          />

          {/* Advocacy Report */}
          <FeatureCard
            to="/report"
            icon={<FileText className="h-10 w-10 text-[#FFA500]" />}
            title="Advocacy Report"
            description="Generate a briefing note to advocate for stronger OGBV legislation."
          />
        </div>

        <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-4">Why This Matters</h2>
            <p className="max-w-3xl mx-auto text-gray-400">
                Online gender-based violence is a critical human rights issue. By providing transparent data, we empower advocates, policymakers, and citizens to demand accountability and drive meaningful change. Our mission is to make the digital world safer for everyone.
            </p>
        </div>
      </main>
    </div>
  );
};

interface FeatureCardProps {
  to: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ to, icon, title, description }: FeatureCardProps) => (
  <Link to={to} className="block group">
    <Card className="bg-gray-800 border-gray-700 hover:border-[#FF69B4] transition-all duration-300 h-full flex flex-col">
      <CardHeader className="flex-shrink-0">
        <div className="flex items-center space-x-4">
          {icon}
          <CardTitle className="text-xl text-white">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-400">{description}</p>
      </CardContent>
      <div className="p-6 pt-0 flex justify-end">
          <ChevronRight className="h-6 w-6 text-gray-500 group-hover:text-[#FF69B4] transform group-hover:translate-x-1 transition-transform"/>
      </div>
    </Card>
  </Link>
);

export default HomePage;
