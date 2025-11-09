import React from 'react';

const TermsPage = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      <p className="text-gray-700 mb-4">
        These Terms and Conditions govern your use of our website and services. By accessing
        or using our website, you agree to be bound by these terms.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Services</h2>
      <p className="text-gray-700 mb-4">
        We provide electrical services as described on our website or quoted to you directly.
        All services are subject to availability and may require a site visit for confirmation.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Quotes and Payments</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Quotes are valid for a limited period as stated on the quote.</li>
        <li>Payment terms will be specified on invoices. Late payments may incur fees.</li>
        <li>Materials remain our property until paid in full.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Cancellations</h2>
      <p className="text-gray-700 mb-4">
        If you need to cancel or reschedule, please contact us as soon as possible. Charges may
        apply for late cancellations, especially where materials have been purchased.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Liability</h2>
      <p className="text-gray-700 mb-4">
        We will exercise reasonable skill and care in providing our services. To the fullest
        extent permitted by law, we exclude liability for indirect or consequential losses.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Your Responsibilities</h2>
      <p className="text-gray-700 mb-4">
        You agree to provide safe access to the property and to inform us of any known hazards.
        You are responsible for obtaining any necessary permissions for the work to be carried out.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Contact</h2>
      <p className="text-gray-700">
        For questions about these Terms and Conditions, contact us at 0141 642 0611 or
        <a href="mailto:hes.glasgow@gmail.com" className="text-yellow-600 underline"> hes.glasgow@gmail.com</a>.
      </p>
    </main>
  );
};

export default TermsPage;
