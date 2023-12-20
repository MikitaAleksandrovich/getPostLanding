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
      <a
        href="https://apps.apple.com/us/app/get-post-ai/id6474195231"
        className="bg-white text-black px-6 lg:px-8 py-3 lg:py-4 rounded-full text-base lg:text-lg hover:bg-gray-200"
      >
        Download Now
      </a>
    </div>
  );
};

export default Home;
