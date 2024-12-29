import { IExchange } from "@/models";
import Exchange from "../exchange";

interface IExchangeProps {
  exchanges: IExchange[];
}

export default function Exchanges({ exchanges }: IExchangeProps) {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
      {exchanges.map((exchange) => (
        <Exchange exchange={exchange} key={exchange.id} />
      ))}
    </div>
  );
}
