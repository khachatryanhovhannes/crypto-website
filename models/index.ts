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
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: null | string;
  last_updated: string;
}
