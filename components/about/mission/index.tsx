import Image from "next/image";
import image from "../../../public/images/71a53a2f2c8bc26fa1d582c17a80d021.jpg";

export default function Mission() {
  return (
    <section aria-labelledby="mission-heading">
      <h2 id="mission-heading" className="sr-only">
        Our Mission Statement
      </h2>

      <h2 className="text-3xl font-bold p-3 text-white text-center">
        Our Mission
      </h2>
      <div className="flex flex-col lg:flex-row items-center gap-16 py-12">
        <div
          className="lg:w-1/3 w-full relative aspect-video"
          aria-labelledby="mission-image-label"
        >
          <Image
            src={image}
            fill
            alt="Illustration representing cryptocurrency data and trends"
            className="object-cover rounded-md"
          />
          <span id="mission-image-label" className="sr-only">
            Cryptocurrency data and trends illustration.
          </span>
        </div>

        <p className="lg:w-2/3 w-full text-gray-200">
          At our core, we are dedicated to empowering individuals and businesses
          to thrive in the ever-evolving world of cryptocurrency. Our mission is
          to deliver accurate, comprehensive, and timely data, enabling you to
          make confident, informed decisions in this dynamic landscape.
          <br />
          <br />
          We believe in fostering transparency and accessibility, breaking down
          barriers to ensure that cryptocurrency markets are navigable for
          everyone—from seasoned investors to curious newcomers. By providing
          the tools and insights you need, we aim to create a fair, informed,
          and thriving ecosystem that drives innovation and opportunity for all.
        </p>
      </div>
    </section>
  );
}
