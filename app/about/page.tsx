import { PageHeading } from "@/components/global";
import { Features, Hero, Mission, Team, WhyChoose } from "@/components/about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Our Crypto Tracking Platform",
  description:
    "Learn about our crypto tracking platform that provides real-time data, insights, and tools for tracking cryptocurrency market trends, trading volumes, and price fluctuations.",
};

export default function About() {
  return (
    <main
      className="lg:px-12 md:px-6 px-3 bg-black bg-opacity-70 min-h-screen"
      aria-labelledby="about-page-heading"
    >
      <PageHeading
        id="about-page-heading"
        title="About Our Crypto Tracking Platform"
        subtitle="We provide real-time cryptocurrency data and insights to help you track market trends, trading volumes, and price fluctuations."
      />
      <Hero />
      <Mission />
      <WhyChoose />
      <Team />
      <Features />
    </main>
  );
}
