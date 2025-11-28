import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const AdvocacyReportPage = () => {
  const [formData, setFormData] = useState({ name: '', organization: '', country: '', platform: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.country) {
        toast.error('Please fill in at least your name and country of focus.');
        return;
    }
    
    toast.success('Generating your report... This is a demo feature.');
    // In a real app, this would trigger a PDF generation service.
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white">Advocacy Report Generator</h1>
          <p className="mt-2 text-lg text-gray-400">Create a tailored briefing note for your advocacy efforts.</p>
        </div>

        <Card className="max-w-2xl mx-auto bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Generate Your Briefing Note</CardTitle>
            <CardDescription>Fill in the details below to create a PDF summary.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className='text-white'>Your Name</Label>
                  <Input id="name" placeholder="e.g., Imani Adebayo" value={formData.name} onChange={handleChange} className="bg-gray-700 border-gray-600 text-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="organization" className='text-white'>Your Organization (Optional)</Label>
                  <Input id="organization" placeholder="e.g., Digital Rights Africa" value={formData.organization} onChange={handleChange} className="bg-gray-700 border-gray-600 text-white" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="country" className='text-white'>Country of Focus</Label>
                <Input id="country" placeholder="e.g., Nigeria" value={formData.country} onChange={handleChange} className="bg-gray-700 border-gray-600 text-white" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="platform" className='text-white'>Specific Platform of Concern (Optional)</Label>
                <Input id="platform" placeholder="e.g., Meta" value={formData.platform} onChange={handleChange} className="bg-gray-700 border-gray-600 text-white" />
              </div>
              <Button type="submit" className="w-full bg-[#FF69B4] text-white hover:bg-[#E05A9A]">
                Generate PDF
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdvocacyReportPage;