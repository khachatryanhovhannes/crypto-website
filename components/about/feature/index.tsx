import { FEATURES } from "@/constants";

export default function Features() {
  return (
    <section>
      <h2 className="text-3xl font-bold p-3 text-white text-center">
        Our Features
      </h2>
      <p className="w-full lg:w-2/3 mx-auto text-center text-gray-200">
        Discover a robust suite of features meticulously designed to meet all
        your cryptocurrency needs and help you stay ahead in the ever-changing
        market.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 py-8 gap-5">
        {FEATURES.map((feature) => (
          <div key={feature.title} className="text-center">
            <h4 className="text-xl text-white">{feature.title}</h4>
            <p className="text-gray-200 mt-5">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
