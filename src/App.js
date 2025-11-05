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
import SEO from './components/SEO';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Helmet>
        <title>Your Electrician Glasgow | Professional Electrical Services</title>
        <meta name="description" content="Professional electrician services in Glasgow. 24/7 emergency electrical services, EICR testing, and more. Fully certified and insured electricians." />
        <meta name="keywords" content="electrician glasgow, emergency electrician, electrical services, eicr testing, electrical repairs" />
        <link rel="canonical" href="https://yourelectrician-glasgow.co.uk" />
      </Helmet>
      <Router>
        <SEO />
        <div className="fixed top-0 left-0 right-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Header />
          </div>
        </div>
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
            <Route path='/locations' component={Locations} />
            <Route path='/location/:id' component={LocationPage} />
            <Route path='/areas-covered' component={AreasCovered} />
            <Route path='/sitemap' component={SitemapPage} />
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
