export interface IExchange {
  id: string;
  name: string;
  image: string;
  country: string | null;
  trust_score: number;
  trust_score_rank: number;
  trade_volume_24h_btc: number;
  url: string;
  year_established?: number;
  description?: string;
  centralized?: boolean;
  market_count?: number;
}

export interface ICoin {
  id: string;
  name: string;
  year_established?: number;
  country: string;
  description: string;
  url: string;
  image: string;
  has_trading_incentive: boolean;
  trust_score: number;
  trust_score_rank: number;
  trade_volume_24h_btc: number;
  trade_volume_24h_btc_normalized: number;
}
