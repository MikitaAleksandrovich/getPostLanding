import Link from "next/link";

const updates = [
  {
    version: "1.3.0",
    date: "January 15, 2024",
    highlights: [
      "AI-powered rewrite suggestions now adapt tone automatically to match your brand voice.",
      "Bulk scheduling lets you queue content for multiple platforms with a single tap.",
      "Improved accessibility with larger tap targets and VoiceOver enhancements.",
    ],
  },
  {
    version: "1.2.1",
    date: "December 30, 2023",
    highlights: [
      "Performance improvements make generation 35% faster on older devices.",
      "New holiday-ready caption ideas with seasonal emoji recommendations.",
      "Fixed an issue where drafts were not syncing across iCloud devices.",
    ],
  },
  {
    version: "1.2.0",
    date: "December 12, 2023",
    highlights: [
      "Introduced multilingual translation support for 15 additional languages.",
      "Added customizable brand kits for consistent colors and typography.",
      "Refreshed interface with smoother transitions and simplified navigation.",
    ],
  },
];

const WhatsNew = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <header className="text-center">
          <p className="uppercase tracking-widest text-xs text-gray-400 mb-3">
            Release Notes
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">What&apos;s New</h1>
          <p className="text-base lg:text-lg text-gray-300">
            Follow the latest improvements and features rolling out to Get Post AI.
          </p>
        </header>

        <main className="mt-10 space-y-8">
          {updates.map(({ version, date, highlights }) => (
            <section
              key={version}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 lg:p-8 shadow-xl shadow-black/30"
            >
              <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between mb-6">
                <h2 className="text-2xl font-semibold">Version {version}</h2>
                <span className="text-sm tracking-wide text-gray-400 uppercase">
                  {date}
                </span>
              </div>
              <ul className="whats-new-list list-disc pl-5 space-y-2 text-gray-200">
                {highlights.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </main>

        <footer className="mt-12 flex flex-col items-center gap-4">
          <a
            href="https://apps.apple.com/us/app/get-post-ai/id6474195231"
            className="bg-white text-black px-6 lg:px-8 py-3 lg:py-4 rounded-full text-base lg:text-lg hover:bg-gray-200"
          >
            Download on the App Store
          </a>
          <Link
            href="/"
            className="text-sm text-gray-300 hover:text-white underline underline-offset-4"
          >
            Back to home
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default WhatsNew;