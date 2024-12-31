import Image from "next/image";
import { ICoin } from "../../../models/index";
import Link from "next/link";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";

interface iCoinProps {
  coin: ICoin;
}

export default function Coin({ ...props }: iCoinProps) {
  const { coin } = props;

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-black text-center">
      <div className="h-16 w-16 relative m-auto">
        <Image
          src={coin.image}
          alt={coin.name}
          fill
          className="rounded-full mx-auto object-contain"
        />
      </div>
      <h2 className="text-xl font-bold mt-4 text-center text-white">
        {coin.name}
      </h2>
      <div className="flex justify-center gap-3 items-center">
        <span className="text-lg font-bold text-gray-100">
          {coin.current_price.toFixed(2)} USD
        </span>
        <span
          className={`text-sm font-medium flex items-center ${
            coin.price_change_percentage_24h > 0
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {coin.price_change_percentage_24h > 0 ? (
            <FaLongArrowAltUp />
          ) : (
            <FaLongArrowAltDown />
          )}
          {coin.price_change_percentage_24h.toFixed(2)}%
        </span>
      </div>
      <div className="text-gray-300">
        <div>
          <span className="font-medium">Market Cap:</span>
          <span>{coin.market_cap.toLocaleString()} USD</span>
        </div>
      </div>

      <div className="text-gray-300 mt-2">
        <span className="font-medium">All-Time High:</span>
        <span>{coin.ath.toFixed(2)} USD</span>
      </div>

      <div className="text-center">
        <Link href={"coins/" + coin.name}>
          <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition duration-300 my-5">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
}
