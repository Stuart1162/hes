import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import EICR from './components/EICR';
import Domestic from './components/Domestic';
import Commercial from './components/Commercial';
import Landlords from './components/Landlords';
import Contact from './components/Contact';
import Header from './components/Header';
import ServiceTemplate from './components/services/ServiceTemplate';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';
import Locations from './components/Locations';
import LocationPage from './components/LocationPage';
import PatTesting from './components/services/PatTesting';
import EmergencyLighting from './components/services/EmergencyLighting';
import EicrCertificates from './components/services/EicrCertificates';
import CommercialRewiring from './components/services/CommercialRewiring';
import OfficeLighting from './components/services/OfficeLighting';
import SmokeFireAlarms from './components/services/SmokeFireAlarms';
import AreasCovered from './components/AreasCovered';
import SitemapPage from './pages/SitemapPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import SEO from './components/SEO';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 site-container">
      <Helmet>
        <title>Henderson Electrical Services | Electrician Services Glasgow</title>
        <meta name="description" content="HES - Professional electrician services in Glasgow. Emergency electrical services, EICR testing, and more. Fully certified and insured electricians." />
        <meta name="keywords" content="electrician glasgow, emergency electrician, electrical services, eicr testing, electrical repairs" />
        <link rel="canonical" href="https://hesglasgow.com" />
      </Helmet>
      <Router>
        <SEO />
        <ScrollToTop />
        <div className="fixed top-5 left-0 right-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Header />
          </div>
        </div>

        {/* Fixed WhatsApp Tab */}
        <a
          href="https://wa.me/447956557418?text=Hi%20there%2C%20I%27d%20like%20to%20get%20a%20quote%20for%20your%20electrical%20services."
          className="whatsapp-tab"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="whatsapp-tab__icon" aria-hidden="true">
            <path fill="#fff" d="M19.11 17.46c-.27-.14-1.58-.78-1.83-.87-.25-.09-.43-.14-.62.14-.19.27-.71.87-.87 1.05-.16.18-.32.2-.6.07-.27-.14-1.15-.42-2.2-1.34-.81-.72-1.36-1.6-1.52-1.86-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.62-1.49-.85-2.04-.22-.53-.45-.46-.62-.46-.16 0-.34-.02-.52-.02-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29s.98 2.65 1.12 2.84c.14.18 1.93 2.96 4.68 4.16.65.28 1.16.45 1.55.58.65.21 1.25.18 1.72.11.52-.08 1.58-.64 1.8-1.26.22-.62.22-1.16.16-1.27-.07-.11-.25-.18-.52-.32z"/>
            <path fill="#fff" d="M16 3C8.83 3 3 8.83 3 16c0 2.28.62 4.41 1.69 6.24L3 29l6.92-1.82A12.92 12.92 0 0 0 16 29c7.17 0 13-5.83 13-13S23.17 3 16 3zm0 23.5c-2.2 0-4.23-.72-5.88-1.93l-.42-.31-4.02 1.06 1.08-3.91-.32-.41A9.5 9.5 0 1 1 16 26.5z"/>
          </svg>
          <span className="whatsapp-tab__text">WhatsApp</span>
        </a>

        <div className="w-full">
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/domestic' component={Domestic} />
            <Route path='/commercial' component={Commercial} />
            <Route path='/landlords' component={Landlords} />
            <Route path='/services' component={Services} />
            <Route path='/service/fuseboards' render={() => <ServiceTemplate serviceId="fuseboards" />} />
            <Route path='/service/smoke-alarms' render={() => <ServiceTemplate serviceId="smoke-alarms" />} />
            <Route path='/eicr' component={EICR} />
            <Route path='/service/lighting' render={() => <ServiceTemplate serviceId="lighting" />} />
            <Route path='/service/pat-testing' component={PatTesting} />
            <Route path='/service/sockets' render={() => <ServiceTemplate serviceId="sockets" />} />
            <Route path='/service/shower-installations' render={() => <ServiceTemplate serviceId="shower-installations" />} />
            <Route path='/service/rewiring' render={() => <ServiceTemplate serviceId="rewiring" />} />
            <Route path='/service/fault-finding' render={() => <ServiceTemplate serviceId="fault-finding" />} />
            <Route path='/service/electrical-repairs' render={() => <ServiceTemplate serviceId="electrical-repairs" />} />
            <Route path='/service/emergency-lighting' component={EmergencyLighting} />
            <Route path='/service/eicr-certificates' component={EicrCertificates} />
            <Route path='/service/commercial-rewiring' component={CommercialRewiring} />
            <Route path='/service/office-lighting' component={OfficeLighting} />
            <Route path='/service/smoke-fire-alarms' component={SmokeFireAlarms} />
            <Route path='/contact' component={Contact} />
            <Route path='/quote' component={QuoteForm} />
            <Route path='/get-a-quote' component={QuoteForm} />
            <Route path='/locations' component={Locations} />
            <Route path='/location/:id' component={LocationPage} />
            <Route path='/areas-covered' component={AreasCovered} />
            <Route path='/sitemap' component={SitemapPage} />
            <Route path='/privacy-policy' component={PrivacyPolicyPage} />
            <Route path='/terms' component={TermsPage} />
            {/* Fallback dynamic service route: must come after specific service routes */}
            <Route path='/service/:serviceId' component={ServiceTemplate} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
