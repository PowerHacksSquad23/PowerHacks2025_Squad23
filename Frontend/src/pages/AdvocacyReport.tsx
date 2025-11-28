import { useState, useRef } from 'react';
import { toPng } from 'html-to-image';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import EvidenceCard from '@/components/EvidenceCard';

// Mock function to simulate backend hash generation
const generateMockHash = async (url: string) => {
  await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
  const timestamp = new Date().toUTCString();
  const hash = `0x${[...Array(64)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')}`;
  return { url, timestamp, hash };
};

export default function AdvocacyReport() {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [captureData, setCaptureData] = useState<{ url: string; timestamp: string; hash: string } | null>(null);
  const evidenceCardRef = useRef<HTMLDivElement>(null);

  const handleCapture = async () => {
    if (!url) {
      toast.error('Please enter a URL to capture.');
      return;
    }

    setIsLoading(true);
    setCaptureData(null);
    toast.loading('Generating digital proof... Please wait.');

    try {
      const { url: capturedUrl, timestamp, hash } = await generateMockHash(url);
      setCaptureData({ url: capturedUrl, timestamp, hash });
      toast.success('Digital proof generated successfully!');
    } catch (error) {
      toast.error('Failed to generate proof. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    if (!evidenceCardRef.current) {
        toast.error('Evidence card component not found.');
        return;
    }

    toast.loading('Preparing download...');

    toPng(evidenceCardRef.current, { cacheBust: true, quality: 1.0 })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = `rights-radar-proof-${new Date().toISOString()}.png`;
        link.href = dataUrl;
        link.click();
        toast.success('Download started!');
      })
      .catch((err) => {
        console.error(err);
        toast.error('Failed to create image for download.');
      });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Advocacy Report Generator</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Card>
          <CardHeader>
            <CardTitle>Capture Digital Evidence</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-slate-600">
              Enter a URL to generate a timestamped, verifiable proof of its content at a specific moment.
            </p>
            <div className="space-y-2">
              <Label htmlFor="url">URL to Capture</Label>
              <Input
                id="url"
                type="url"
                placeholder="https://example.com/article"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <Button onClick={handleCapture} disabled={isLoading} className="w-full bg-purple-600 hover:bg-purple-700">
              {isLoading ? 'Capturing...' : 'Capture Content'}
            </Button>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="bg-slate-50">
            <CardHeader>
              <CardTitle>Digital Notary Proof</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading && (
                <div className="flex items-center justify-center h-48">
                    <p className="text-slate-500">Generating verifiable evidence...</p>
                </div>
              )}
              {captureData && (
                <div className="space-y-4">
                  <div ref={evidenceCardRef}>
                    <EvidenceCard 
                        url={captureData.url}
                        timestampUTC={captureData.timestamp}
                        contentHash={captureData.hash}
                        logoUrl='https://storage.googleapis.com/dala-prod-public-storage/generated-images/326700c1-cffe-44cf-aadf-9b1235bab97b/rightsradarlogo-z3zq6q9-1764337073678.webp'
                    />
                  </div>
                  <Button onClick={handleDownload} className="w-full bg-orange-500 hover:bg-orange-600">
                    Download Proof as PNG
                  </Button>
                </div>
              )}
              {!isLoading && !captureData && (
                <div className="flex items-center justify-center h-48">
                  <p className="text-center text-slate-500">Your generated proof will appear here.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}