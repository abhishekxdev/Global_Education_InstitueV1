import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AffiliationBanner from './components/AffiliationBanner';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import AboutPage from './pages/AboutPage';
import StudentZonePage from './pages/StudentZonePage';
import FacultyPage from './pages/FacultyPage';
import AccountsPage from './pages/AccountsPage';
import GalleryPage from './pages/GalleryPage';
import SyllabusPage from './pages/SyllabusPage';
import ContactPage from './pages/ContactPage';
import LegalDocumentsPage from './pages/LegalDocumentsPage';
import BuildingMapPage from './pages/BuildingMapPage';
import SafetyCertificatePage from './pages/SafetyCertificatePage';
import RecognitionOrderPage from './pages/RecognitionOrderPage';
import AffidavitPage from './pages/AffidavitPage';
import NCTEApplicationPage from './pages/NCTEApplicationPage';
import AdministrativeDocumentsPage from './pages/AdministrativeDocumentsPage';
import NoticesPage from './pages/NoticesPage';
import SplashScreen from './components/SplashScreen';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Header isMenuOpen={isMenuOpen} onMenuToggle={() => setIsMenuOpen(!isMenuOpen)} />
        <AffiliationBanner />
        <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/syllabus" element={<SyllabusPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/notice" element={<NoticesPage />} />
          <Route path="/student-zone" element={<StudentZonePage />} />
          <Route path="/faculty" element={<FacultyPage />} />
          <Route path="/accounts" element={<AccountsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/legal-documents" element={<LegalDocumentsPage />} />
          <Route path="/building-map" element={<BuildingMapPage />} />
          <Route path="/safety-certificate" element={<SafetyCertificatePage />} />
          <Route path="/recognition-order" element={<RecognitionOrderPage />} />
          <Route path="/affidavit" element={<AffidavitPage />} />
          <Route path="/ncte-application" element={<NCTEApplicationPage />} />
          <Route path="/administrative-documents" element={<AdministrativeDocumentsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
