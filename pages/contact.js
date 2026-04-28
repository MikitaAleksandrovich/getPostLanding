import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen bg-white p-8">
      <div className="max-w-2xl w-full mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4">Contact Get Post AI</h1>
        <p className="text-center text-gray-600 mb-10">
          The following contact information is provided as placeholder (dummy) data.
        </p>

        <div className="bg-gray-100 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-2">Email</h2>
          <p className="text-gray-700">
            <a className="underline" href="mailto:support@getpostai.example">
              support@getpostai.example
            </a>
          </p>
          <p className="text-sm text-gray-500 mt-1">Dummy support inbox for demonstrations only.</p>
        </div>

        <div className="bg-gray-100 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-2">Phone</h2>
          <p className="text-gray-700">+1 (555) 123-4567</p>
          <p className="text-sm text-gray-500 mt-1">Placeholder hotline — not monitored.</p>
        </div>

        <div className="bg-gray-100 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-2">Office</h2>
          <p className="text-gray-700">1234 Imaginary Ave, Suite 200</p>
          <p className="text-gray-700">Fiction City, FC 00000</p>
          <p className="text-sm text-gray-500 mt-1">Sample address for reference purposes.</p>
        </div>

        <div className="text-center text-sm text-gray-500">
          Need real assistance? Please reach out through the official channels shared in the app.
        </div>
      </div>
    </div>
  );
};

export default Contact;