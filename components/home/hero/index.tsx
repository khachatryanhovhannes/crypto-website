import { getTopCoins } from "@/services";
import Image from "next/image";
import Link from "next/link";

export default async function Hero() {
  const topCurrencies = await getTopCoins();

  return (
    <section
      className="lg:px-12 md:px-6 px-3 py-5 md:py-8 lg:py-12"
      aria-labelledby="hero-heading"
    >
      <div className="rounded-xl p-5 text-white bg-black bg-opacity-70 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 items-center">
        {/* Hero Title */}
        <div className="col-span-1 lg:col-span-1">
          <h1 id="hero-heading" className="text-4xl font-bold mb-4">
            Track Top <span className="text-red-600">Cryptocurrencies</span> in
            Real-Time
          </h1>
          <h2 className="text-lg text-gray-300" id="hero-description">
            Get the latest data on cryptocurrencies, including prices, market
            trends, and changes in the last 24 hours.
          </h2>
          <Link href="/coins">
            <button
              className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition duration-300 my-5"
              aria-label="See all cryptocurrencies"
            >
              See All
            </button>
          </Link>
        </div>

        {/* Top Cryptocurrencies */}
        <div
          className="grid lg:grid-cols-2 md:grid-cols-1 gap-6 mt-6 lg:col-span-2"
          aria-labelledby="top-cryptos-heading"
        >
          <h3 id="top-cryptos-heading" className="sr-only">
            Top Cryptocurrencies
          </h3>
          {topCurrencies?.length > 0 ? (
            topCurrencies.map(
              ({
                id,
                name,
                current_price,
                price_change_percentage_24h,
                image,
              }) => (
                <Link
                  key={id}
                  href={`/coins/${id}`}
                  aria-label={`View details of ${name}`}
                >
                  <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg shadow-md">
                    <div className="relative w-10 h-10">
                      <Image
                        src={image}
                        alt={`Logo of ${name}`}
                        fill
                        className="w-10 h-10 rounded-full"
                      />
                    </div>
                    <div className="flex-1">
                      <span className="text-lg font-semibold">{name}</span>
                    </div>
                    <span className="text-xl font-bold text-gray-100">
                      {current_price.toFixed(2)} USD
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        price_change_percentage_24h > 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {price_change_percentage_24h.toFixed(2)}%
                    </span>
                  </div>
                </Link>
              )
            )
          ) : (
            <p className="text-gray-400">No data available at the moment.</p>
          )}
        </div>
      </div>
    </section>
  );
}
