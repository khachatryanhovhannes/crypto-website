import { IExchange } from "@/models";
import Image from "next/image";

interface IExchangeProps {
  exchange: IExchange;
}

export default function Exchange({ exchange }: IExchangeProps) {
  return (
    <div
      key={exchange.id}
      className="bg-gray-800 p-4 rounded-lg shadow-lg text-black"
    >
      <div className="h-16 w-16 relative m-auto">
        <Image
          src={exchange.image}
          alt={exchange.name}
          fill
          className="rounded-full mx-auto object-contain"
        />
      </div>
      <h2 className="text-lg font-bold mt-4 text-center text-white">{exchange.name}</h2>
      <p className="text-sm text-gray-300 text-center">
        {exchange.country || "Unknown Country"}
      </p>
      <p className="text-sm text-gray-300 text-center">
        Trust Score: {exchange.trust_score}
      </p>
      <p className="text-sm text-gray-300 text-center">
        Trade Volume (24h BTC): {exchange.trade_volume_24h_btc.toFixed(2)}
      </p>
      <a
        href={exchange.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 text-blue-500 text-center"
      >
        Visit Exchange
      </a>
    </div>
  );
}
