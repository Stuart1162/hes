import React from 'react';

const PAT = () => {
  return (
    <main>
      <section className="hero" style={{paddingTop: 36}}>
        <div className="container">
          <h1 style={{marginBottom: 8}}>Portable Appliance Testing (PAT)</h1>
          <p className="eicr__lead">Keep workplaces and rental properties safe and compliant with scheduled PAT testing.</p>
        </div>
      </section>

      <section className="tabs" style={{paddingTop: 0}}>
        <div className="container tab__panel">
          <h2 style={{marginTop: 0}}>What we do</h2>
          <ul>
            <li>Annual or periodic PAT testing for offices, shops, HMOs and venues</li>
            <li>Barcode asset register, pass labels and reporting</li>
            <li>Digital report with advisories and failures listed</li>
            <li>Repairs/replacements quoted where appropriate</li>
          </ul>
          <div className="hero__actions" style={{marginTop: 12}}>
            <a className="btn btn--primary" href="/contact">Request PAT testing quote</a>
            <a className="btn btn--ghost" href="/services#pat">Back to Services</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PAT;
