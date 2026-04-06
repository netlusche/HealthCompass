import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { I18nProvider } from './components/providers/I18nProvider';
import { PrivacyProvider } from './components/providers/PrivacyProvider';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { SkipLink } from './components/layout/SkipLink';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Accessibility from './pages/Accessibility';
import Alcohol from './pages/Alcohol';
import Anxiety from './pages/Anxiety';
import Burnout from './pages/Burnout';
import Copd from './pages/Copd';
import Copyright from './pages/Copyright';
import Dementia from './pages/Dementia';
import Diabetes from './pages/Diabetes';
import Disclaimer from './pages/Disclaimer';
import HeartAttack from './pages/HeartAttack';
import Imprint from './pages/Imprint';
import Kidney from './pages/Kidney';
import Osteoporosis from './pages/Osteoporosis';
import Privacy from './pages/Privacy';
import { useI18n } from './components/providers/I18nProvider';

function MetaManager() {
  const { t, locale } = useI18n();

  React.useEffect(() => {
    // Update Document Title
    if (t.meta?.title) {
      document.title = t.meta.title;
    }

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    if (t.meta?.description) {
      metaDescription.setAttribute('content', t.meta.description);
    }

    // Update OpenGraph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && t.meta?.title) ogTitle.setAttribute('content', t.meta.title);

    // Update OpenGraph Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && t.meta?.description) ogDesc.setAttribute('content', t.meta.description);

    // Update Twitter Title
    let twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle && t.meta?.title) twTitle.setAttribute('content', t.meta.title);

    // Update Twitter Description
    let twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc && t.meta?.description) twDesc.setAttribute('content', t.meta.description);
  }, [t, locale]);

  return null;
}

function App() {
  return (
    <PrivacyProvider>
      <I18nProvider>
        <HashRouter>
          <MetaManager />
          <div className="min-h-screen flex flex-col bg-slate-50/50 text-slate-800 antialiased selection:bg-teal-100 selection:text-teal-900 transition-colors duration-300 font-sans">
            <SkipLink />
            <Navbar />
            <main id="main-content" className="flex-grow flex flex-col">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/accessibility" element={<Accessibility />} />
                <Route path="/alcohol" element={<Alcohol />} />
                <Route path="/anxiety" element={<Anxiety />} />
                <Route path="/burnout" element={<Burnout />} />
                <Route path="/copd" element={<Copd />} />
                <Route path="/copyright" element={<Copyright />} />
                <Route path="/dementia" element={<Dementia />} />
                <Route path="/diabetes" element={<Diabetes />} />
                <Route path="/disclaimer" element={<Disclaimer />} />
                <Route path="/heart-attack" element={<HeartAttack />} />
                <Route path="/imprint" element={<Imprint />} />
                <Route path="/kidney" element={<Kidney />} />
                <Route path="/osteoporosis" element={<Osteoporosis />} />
                <Route path="/privacy" element={<Privacy />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </HashRouter>
      </I18nProvider>
    </PrivacyProvider>
  );
}

export default App;
