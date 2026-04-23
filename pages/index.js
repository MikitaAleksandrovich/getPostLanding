import { useState } from "react";
import Image from "next/image";
import getPostIcon from "../public/getPostIcon.jpg";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    salesEmail: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Contact form submission:", formData);
    setFormData({ name: "", email: "", salesEmail: "", message: "" });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-black text-white">
      <div className="mb-8">
        <div className="rounded-md overflow-hidden">
          <Image
            src={getPostIcon}
            alt="Get Post Icon"
            width={150}
            height={52}
            className="rounded-md"
            priority={true}
          />
        </div>
      </div>
      <div className="text-2xl lg:text-4xl font-bold text-center mb-8">
        Get Post AI
      </div>
      <a
        href="https://apps.apple.com/us/app/get-post-ai/id6474195231"
        className="bg-white text-black px-6 lg:px-8 py-3 lg:py-4 rounded-full text-base lg:text-lg hover:bg-gray-200"
      >
        Download Now
      </a>

      <div className="mt-12 w-full max-w-xl bg-white text-black rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-center">Contact Us</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="salesEmail"
            >
              Sales Email
            </label>
            <input
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              id="salesEmail"
              name="salesEmail"
              type="email"
              value={formData.salesEmail}
              onChange={handleChange}
              placeholder="sales@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help?"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white rounded-md py-2 font-semibold hover:bg-gray-900"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;