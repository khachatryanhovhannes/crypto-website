import { getCoinDetails } from "@/services";
import { ISingleCoin } from "@/models";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";
import Image from "next/image";

interface ICoinPageProps {
  params: { name: string };
}

export default async function CoinPage({ params }: ICoinPageProps) {
  const { name } = await params;

  // Fetching coin details using your existing API function
  const coinDetails: ISingleCoin = await getCoinDetails(name);

  return (
    <main
      className="lg:px-12 md:px-6 px-3 bg-black bg-opacity-70 min-h-screen"
      aria-labelledby="coin-page-heading"
    >
      <div className="flex items-center justify-center">
        <h1
          id="coin-page-heading"
          className="text-3xl font-bold p-3 text-white"
        >
          {coinDetails.name}
        </h1>
        <span
          className={`text-sm font-medium flex items-center ${
            coinDetails.market_data.price_change_percentage_24h > 0
              ? "text-green-500"
              : "text-red-500"
          }`}
          aria-live="polite"
        >
          {coinDetails.market_data.price_change_percentage_24h > 0 ? (
            <FaLongArrowAltUp />
          ) : (
            <FaLongArrowAltDown />
          )}
          {coinDetails.market_data.price_change_percentage_24h.toFixed(2)}%
        </span>
      </div>

      <div className="flex justify-between mt-6">
        {/* Left Section - Coin Details Table */}
        <div className="text-gray-200">
          <table className="min-w-full table-auto" role="table">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="text-left p-2 font-medium" scope="col">
                  Attribute
                </th>
                <th className="text-left p-2 font-medium" scope="col">
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-600">
                <td className="p-2" scope="row">
                  Market Cap Rank:
                </td>
                <td className="p-2">{coinDetails.market_cap_rank}</td>
              </tr>
              <tr className="border-b border-gray-600">
                <td className="p-2" scope="row">
                  Genesis Date:
                </td>
                <td className="p-2">{coinDetails.genesis_date}</td>
              </tr>
              <tr className="border-b border-gray-600">
                <td className="p-2" scope="row">
                  Block Time:
                </td>
                <td className="p-2">
                  {coinDetails.block_time_in_minutes} minutes
                </td>
              </tr>
              <tr className="border-b border-gray-600">
                <td className="p-2" scope="row">
                  Hashing Algorithm:
                </td>
                <td className="p-2">{coinDetails.hashing_algorithm}</td>
              </tr>
              <tr className="border-b border-gray-600">
                <td className="p-2" scope="row">
                  Watchlist Users:
                </td>
                <td className="p-2">
                  {coinDetails.watchlist_portfolio_users.toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Right Section - Coin Image */}
        <div
          className="relative m-auto aspect-square min-w-36"
          aria-live="polite"
        >
          <Image
            src={coinDetails.image.large}
            alt={`Image of ${coinDetails.name}`}
            fill
            className="rounded-full mx-auto object-contain"
          />
        </div>

        <div className="mt-6 text-center">
          <h3 className="text-xl font-bold text-white">Price Changes</h3>
          <ul className="text-gray-300">
            <li>
              <span className="font-medium">24h:</span>
              {coinDetails.market_data.price_change_percentage_24h.toFixed(2)}%
            </li>
            <li>
              <span className="font-medium">7d:</span>
              {coinDetails.market_data.price_change_percentage_7d.toFixed(2)}%
            </li>
            <li>
              <span className="font-medium">30d:</span>
              {coinDetails.market_data.price_change_percentage_30d.toFixed(2)}%
            </li>
            <li>
              <span className="font-medium">1y:</span>
              {coinDetails.market_data.price_change_percentage_1y.toFixed(2)}%
            </li>
          </ul>
        </div>
      </div>

      {/* Coin Description Section */}
      <section className="mt-6">
        {coinDetails.description?.en && (
          <div className="mt-4">
            <span className="font-medium text-white">Description:</span>
            <p
              className="text-gray-200"
              dangerouslySetInnerHTML={{
                __html: coinDetails.description?.en || "",
              }}
            />
          </div>
        )}
      </section>
    </main>
  );
}
