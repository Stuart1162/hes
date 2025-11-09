import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-gray-700 mb-4">
        This Privacy Policy explains how we collect, use, and protect your personal information
        when you use our services and website. We are committed to safeguarding your data and
        being transparent about our practices.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-3">Information We Collect</h2>
      <p className="text-gray-700 mb-4">
        We may collect personal information that you provide voluntarily, such as your name,
        email address, phone number, and details related to service requests. We may also
        collect usage data like pages visited and interactions to improve our website.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-3">How We Use Your Information</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>To provide and manage our electrical services.</li>
        <li>To respond to enquiries and provide quotes.</li>
        <li>To improve our website and customer experience.</li>
        <li>To comply with legal obligations.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-3">Sharing Your Information</h2>
      <p className="text-gray-700 mb-4">
        We do not sell your personal information. We may share it with trusted third parties
        who assist in delivering our services (e.g., subcontractors), or when required by law.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-3">Data Retention</h2>
      <p className="text-gray-700 mb-4">
        We retain personal data only for as long as necessary to fulfil the purposes described
        in this policy and to comply with legal and regulatory requirements.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-3">Your Rights</h2>
      <p className="text-gray-700 mb-4">
        You may have rights under applicable data protection laws, including the right to
        access, correct, or delete your personal information. To exercise these rights, please
        contact us at <a href="mailto:hes.glasgow@gmail.com" className="text-yellow-600 underline">hes.glasgow@gmail.com</a>.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-3">Contact</h2>
      <p className="text-gray-700">
        If you have any questions about this Privacy Policy, please contact us at 0141 642 0611 or
        <a href="mailto:hes.glasgow@gmail.com" className="text-yellow-600 underline"> hes.glasgow@gmail.com</a>.
      </p>
    </main>
  );
};

export default PrivacyPolicyPage;
