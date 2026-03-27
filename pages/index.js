import Image from "next/image";
import getPostIcon from "../public/getPostIcon.jpg";

const Home = () => {
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
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <a
          href="https://apps.apple.com/us/app/get-post-ai/id6474195231"
          className="btn-primary"
        >
          Download Now
        </a>
        <a
          href="mailto:contact@getpostaidemo.com?subject=Contact%20Get%20Post%20AI"
          className="btn-secondary"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Home;