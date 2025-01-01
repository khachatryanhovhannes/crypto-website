import { ICoin } from "@/models";
import Coin from "../coin";

interface ICoinsProps {
  coins: ICoin[];
}

export default function Coins({ coins }: ICoinsProps) {
  return (
    <div
      className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6"
      aria-live="polite" // Announcing changes when the list updates
    >
      {coins.map((coin) => (
        <Coin key={coin.id} coin={coin} />
      ))}
    </div>
  );
}
