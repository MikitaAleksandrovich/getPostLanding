import Image from "next/image";
import getPostIcon from "../public/getPostIcon.jpg";

const infoSections = [
  {
    id: "please",
    title: "Please",
    description:
      "Please take a moment to explore how Get Post AI can elevate your creative process. From polishing captions to generating fresh ideas, the app adapts to your workflow in seconds.",
  },
  {
    id: "next",
    title: "Next",
    description:
      "Next on our roadmap are collaboration tools and smarter scheduling suggestions, so you can plan campaigns with teammates and publish at the perfect moment every time.",
  },
  {
    id: "news",
    title: "News",
    description:
      "News and feature drops land here first. Keep an eye on this space for updates about releases, community spotlights, and new AI capabilities rolling out soon.",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 flex flex-col items-center">
      <section className="w-full max-w-3xl flex flex-col items-center text-center mb-16">
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
          className="bg-white text-black px-6 lg:px-8 py-3 lg:py-4 rounded-full text-base lg:text-lg hover:bg-gray-200 transition"
        >
          Download Now
        </a>
      </section>
      <div className="w-full max-w-4xl space-y-8">
        {infoSections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="border border-white/10 rounded-2xl p-6 bg-white/5 backdrop-blur-sm"
          >
            <h2 className="text-2xl font-semibold mb-3">{section.title}</h2>
            <p className="text-base text-white/80">{section.description}</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Home;