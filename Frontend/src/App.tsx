import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from 'sonner';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import LegalGapMapPage from './pages/LegalGapMap';
import PlatformSafetyPage from './pages/PlatformSafetyIndex';
import ShePersistsTimelinePage from './pages/ShePersistsTimeline';
import AdvocacyReportPage from './pages/AdvocacyReport';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-900">
        <Toaster richColors theme="dark" />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/map" element={<LegalGapMapPage />} />
            <Route path="/platforms" element={<PlatformSafetyPage />} />
            <Route path="/timeline" element={<ShePersistsTimelinePage />} />
            <Route path="/report" element={<AdvocacyReportPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;