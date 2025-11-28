import React from 'react';

interface EvidenceCardProps {
  url: string;
  timestampUTC: string;
  contentHash: string;
  logoUrl: string;
}

const EvidenceCard: React.FC<EvidenceCardProps> = ({ url, timestampUTC, contentHash, logoUrl }) => {
  const shortUrl = url.length > 50 ? `${url.substring(0, 47)}...` : url;
  const shortHash = `${contentHash.substring(0, 8)}...${contentHash.substring(contentHash.length - 8)}`;

  return (
    <div className="relative bg-slate-900 text-white rounded-lg shadow-lg p-6 w-full max-w-md mx-auto font-sans anialiased">
      <div className="absolute top-4 right-4 bg-green-500 text-slate-900 text-xs font-bold px-2 py-1 rounded-full">VERIFIED INTEGRITY</div>
      <img src={logoUrl} alt="Watermark" className="absolute bottom-4 left-4 w-16 h-16 opacity-10" />
      
      <div className="space-y-4">
        <div>
          <p className="text-xs text-slate-400 uppercase">URL</p>
          <p className="text-sm font-medium text-slate-200 break-all">{shortUrl}</p>
        </div>
        <div>
          <p className="text-xs text-slate-400 uppercase">Timestamp (UTC)</p>
          <p className="text-lg font-mono text-red-500">{timestampUTC}</p>
        </div>
        <div>
          <p className="text-xs text-slate-400 uppercase">Content Hash (SHA-256)</p>
          <p className="text-sm font-mono text-slate-300 break-all">{shortHash}</p>
        </div>
      </div>
    </div>
  );
};

export default EvidenceCard;