import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen bg-white p-8">
      <h1 className="text-2xl font-bold text-center mb-4">
        Privacy Policy for Get Post AI
      </h1>
      <p className="mb-4 text-center">Last Updated: [20/12/2023]</p>

      <h2 className="text-xl font-bold mb-2">Introduction</h2>
      <p className="mb-4">
        Welcome to Get Post AI! This Privacy Policy outlines how we collect,
        use, and protect your information when you use our app. We are committed
        to ensuring that your privacy is protected.
      </p>

      <h2 className="text-xl font-bold mb-2">Information We Collect</h2>
      <p className="mb-4">
        Get Post AI stores all user data, including generated texts, locally on
        your device. No personal data is collected, stored, or transmitted to
        external servers by Get Post AI.
      </p>

      <h2 className="text-xl font-bold mb-2">Your Data Protection Rights</h2>
      <p className="mb-4">
        Under GDPR and CCPA, you have various rights, including the right to
        access, update, or delete the information we have on you. Since Get Post
        AI does not collect personal data, most of these rights do not apply.
        However, if you have concerns or questions, please contact us.
      </p>

      <h2 className="text-xl font-bold mb-2">Children's Privacy</h2>
      <p className="mb-4">
        Get Post AI does not specifically target children under the age of 13.
        We do not knowingly collect personal information from children under 13.
      </p>

      <h2 className="text-xl font-bold mb-2">Changes to Our Privacy Policy</h2>
      <p className="mb-4">
        We reserve the right to update or change our Privacy Policy at any time.
        We will notify you of any changes by posting the new Privacy Policy on
        this page. We advise you to review this Privacy Policy periodically for
        any changes.
      </p>

      <h2 className="text-xl font-bold mb-2">Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us
        at{" "}
        <a className="font-bold" href="mailto:aleksandrovich.mikita@gmail.com">
          aleksandrovich.mikita@gmail.com
        </a>
        .
      </p>
    </div>
  );
};

export default PrivacyPolicy;
