import { PageHeading } from "@/components/global";
import Image from "next/image";
import image from "../../public/images/og_og_164170274424574395.jpg";
import image2 from "../../public/images/71a53a2f2c8bc26fa1d582c17a80d021.jpg";

export default function About() {
  return (
    <main className="lg:px-12 md:px-6 px-3 bg-black bg-opacity-70 min-h-screen">
      <PageHeading
        title="About Our Crypto Tracking Platform"
        subtitle="We provide real-time cryptocurrency data and insights to help you track market trends, trading volumes, and price fluctuations."
      />
      <div className="flex flex-col lg:flex-row items-center gap-16 py-12">
        <p className="lg:w-2/3 w-full text-gray-200">
          Our platform is your ultimate destination for real-time, reliable
          cryptocurrency data and insights. Designed for both seasoned investors
          and those new to the world of digital currencies, we empower you to
          navigate the dynamic and often complex cryptocurrency market with ease
          and confidence.
          <br />
          <br />
          With our cutting-edge tools, comprehensive analytics, and
          up-to-the-minute market updates, you&apos;ll always stay ahead of the
          curve. Whether you&apos;re tracking trends, managing your portfolio,
          or exploring investment opportunities, our platform provides the
          clarity and precision you need to make informed decisions.
          <br />
          <br />
          Join us and unlock the potential of cryptocurrency investing with a
          trusted partner by your side.
        </p>
        <div className="lg:w-1/3 w-full relative aspect-video">
          <Image
            src={image}
            fill
            alt="Cryptocurrency data illustration"
            className="object-cover rounded-md"
          />
        </div>
      </div>

    
    </main>
  );
}
