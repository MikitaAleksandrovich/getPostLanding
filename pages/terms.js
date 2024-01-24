import Link from "next/link";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen bg-white p-8">
      <h1 className="text-2xl font-bold text-center mb-4">
        Terms of Use for Get Post AI
      </h1>
      <p className="mb-4 text-center">Last Updated: [24/01/2024]</p>

      <h2 className="text-xl font-bold mb-2">Introduction</h2>
      <p className="mb-4">
        Welcome to Get Post AI, an app for generating, correction and
        translation of you posts using AI.
      </p>

      <h2 className="text-xl font-bold mb-2">Acceptance of Terms</h2>
      <p className="mb-4">
        By using Get Post AI, you agree to these Terms. If you do not agree, do
        not use Get Post AI.
      </p>

      <h2 className="text-xl font-bold mb-2">Changes to Terms</h2>
      <p className="mb-4">
        We reserve the right to modify these Terms at any time and will provide
        notice of any significant changes.
      </p>

      <h2 className="text-xl font-bold mb-2">Using Get Post AI</h2>
      <p className="mb-4">
        You agree to use Get Post AI lawfully and in accordance with our
        partner's terms at{" "}
        <Link
          style={{ color: "blue", textDecoration: "underline" }}
          href="https://openai.com/policies/usage-policies"
          target="_blank"
        >
          OpenAI Usage Policies
        </Link>
      </p>

      <h2 className="text-xl font-bold mb-2">User Content and Data</h2>
      <p className="mb-4">You are responsible for the content you create.</p>
      <p className="mb-4">
        All data is stored locally on your device. Get Post AI does not collect
        or store personal data.
      </p>

      <h2 className="text-xl font-bold mb-2">Intellectual Property Rights</h2>
      <p className="mb-4">
        All rights in Get Post AI are owned by or licensed to us.
      </p>

      <h2 className="text-xl font-bold mb-2">Disclaimer of Warranties</h2>
      <p className="mb-4">
        Get Post AI is provided "as is," without warranty of any kind.
      </p>

      <h2 className="text-xl font-bold mb-2">Limitation of Liability</h2>
      <p className="mb-4">
        Our liability is limited to the fullest extent permitted by law.
      </p>

      <h2 className="text-xl font-bold mb-2">Governing Law</h2>
      <p className="mb-4">These Terms are governed by the laws of Poland.</p>

      <h2 className="text-xl font-bold mb-2">Contact Information</h2>
      <p>
        Questions about these Terms should be sent to{" "}
        <a
          className="font-bold"
          style={{ textDecoration: "underline", color: "blue" }}
          href="mailto:aleksandrovich.mikita@gmail.com"
        >
          aleksandrovich.mikita@gmail.com
        </a>
        .
      </p>
    </div>
  );
};

export default PrivacyPolicy;
