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

export interface ISingleCoin {
  id: string;
  symbol: string;
  name: string;
  web_slug: string;
  block_time_in_minutes: number;
  hashing_algorithm: string;

  preview_listing: boolean;
  description?: {
    en?: string;
  };
  links?: {
    homepage?: string[];
  };
  image: {
    large: string;
    small: string;
  };
  watchlist_portfolio_users: number;
  genesis_date: string;
  market_cap_rank: number;
  market_data: {
    price_change_24h: number;
    price_change_percentage_24h: number;
    price_change_percentage_7d: number;
    price_change_percentage_14d: number;
    price_change_percentage_30d: number;
    price_change_percentage_60d: number;
    price_change_percentage_200d: number;
    price_change_percentage_1y: number;
  };
  last_updated?: string;
}
