import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Suspense, lazy } from 'react';
import { Shield } from 'lucide-react';

import Header from './components/Header';
import Footer from './components/Footer';

// Lazy Load Pages for Performance Optimization
const HomePage = lazy(() => import('./pages/Home'));
const LegalGapMapPage = lazy(() => import('./pages/LegalGapMap'));
const PlatformSafetyPage = lazy(() => import('./pages/PlatformSafetyIndex'));
const AdvocacyReportPage = lazy(() => import('./pages/AdvocacyReport'));
const Login = lazy(() => import('./pages/Login'));
const ShePersistsTimelinePage = lazy(() => import('./pages/ShePersistsTimeline'));

// Loading Fallback Component
const LoadingScreen = () => (
  <div className="flex h-screen w-full items-center justify-center bg-gray-900">
    <div className="flex flex-col items-center gap-4 animate-pulse">
      <Shield className="h-12 w-12 text-purple-500" />
      <p className="text-purple-400 font-mono text-sm tracking-widest">LOADING RIGHTSRADAR...</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-900 text-white">
        <Toaster richColors theme="dark" />
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/map" element={<LegalGapMapPage />} />
              <Route path="/platforms" element={<PlatformSafetyPage />} />
              <Route path="/evidence" element={<AdvocacyReportPage />} />
              <Route path="/report" element={<AdvocacyReportPage />} />
              <Route path="/timeline" element={<ShePersistsTimelinePage />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;