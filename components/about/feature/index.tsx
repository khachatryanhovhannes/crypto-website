import { FEATURES } from "@/constants";

export default function Features() {
  return (
    <section aria-labelledby="features-heading">
      <h2 id="features-heading" className="sr-only">
        Features Section
      </h2>
      <h2 className="text-3xl font-bold p-3 text-white text-center">
        Our Features
      </h2>
      <p className="w-full lg:w-2/3 mx-auto text-center text-gray-200">
        Discover a robust suite of features meticulously designed to meet all
        your cryptocurrency needs and help you stay ahead in the ever-changing
        market.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 py-12 gap-5">
        {FEATURES.map((feature) => (
          <div
            key={feature.title}
            className="text-center"
            aria-labelledby={`${feature.title}-heading`}
            role="group"
          >
            <h4
              id={`${feature.title}-heading`}
              className="text-xl text-white"
              role="heading"
              aria-level={4}
            >
              {feature.title}
            </h4>
            <p className="text-gray-200 mt-5">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
