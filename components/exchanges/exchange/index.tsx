import { IExchange } from "@/models";
import Image from "next/image";
import Link from "next/link";

interface IExchangeProps {
  exchange: IExchange;
}

export default function Exchange({ exchange }: IExchangeProps) {
  return (
    <div
      key={exchange.id}
      className="bg-gray-800 p-4 rounded-lg shadow-lg text-black"
      role="article"
      aria-labelledby={`exchange-${exchange.id}`}
    >
      <div className="h-16 w-16 relative m-auto">
        <Image
          src={exchange.image}
          alt={`Logo of ${exchange.name}`}
          fill
          className="rounded-full mx-auto object-contain"
        />
      </div>
      <h2
        id={`exchange-${exchange.id}`}
        className="text-lg font-bold mt-4 text-center text-white"
      >
        {exchange.name}
      </h2>
      <p className="text-sm text-gray-300 text-center">
        {exchange.country || "Unknown Country"}
      </p>
      <p className="text-sm text-gray-300 text-center">
        Trust Score: {exchange.trust_score}
      </p>
      <p className="text-sm text-gray-300 text-center">
        Trade Volume (24h BTC): {exchange.trade_volume_24h_btc.toFixed(2)}
      </p>
      <div className="text-center">
        <Link
          href={exchange.url}
          target="_blank"
          aria-label={`See details of ${exchange.name}`}
        >
          <button
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition duration-300 my-5"
            aria-label={`See details of ${exchange.name}`}
          >
            See Details
          </button>
        </Link>
      </div>
    </div>
  );
}
