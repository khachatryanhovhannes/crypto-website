import instance from "./api.service";

export const getTopCoins = async () => {
  return [
    {
      id: "bitcoin",
      symbol: "btc",
      name: "Bitcoin",
      image:
        "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
      current_price: 95598,
      market_cap: 1895212928764,
      market_cap_rank: 1,
      fully_diluted_valuation: 2009941134408,
      total_volume: 38308739089,
      high_24h: 99887,
      low_24h: 95726,
      price_change_24h: -2540.5948671218794,
      price_change_percentage_24h: -2.58879,
      market_cap_change_24h: -48262928440.97656,
      market_cap_change_percentage_24h: -2.48333,
      circulating_supply: 19801312,
      total_supply: 21000000,
      max_supply: 21000000,
      ath: 108135,
      ath_change_percentage: -10.90951,
      ath_date: "2024-12-17T15:02:41.429Z",
      atl: 67.81,
      atl_change_percentage: 141972.19712,
      atl_date: "2013-07-06T00:00:00.000Z",
      roi: null,
      last_updated: "2024-12-26T08:38:07.574Z",
    },
    {
      id: "ethereum",
      symbol: "eth",
      name: "Ethereum",
      image:
        "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
      current_price: 3352.48,
      market_cap: 404381960306,
      market_cap_rank: 2,
      fully_diluted_valuation: 404381960306,
      total_volume: 18928696530,
      high_24h: 3538.01,
      low_24h: 3356.65,
      price_change_24h: -144.0871076232429,
      price_change_percentage_24h: -4.12081,
      market_cap_change_24h: -16956128948.440857,
      market_cap_change_percentage_24h: -4.02435,
      circulating_supply: 120462694.7059823,
      total_supply: 120462694.7059823,
      max_supply: null,
      ath: 4878.26,
      ath_change_percentage: -30.81503,
      ath_date: "2021-11-10T14:24:19.604Z",
      atl: 0.432979,
      atl_change_percentage: 779389.07254,
      atl_date: "2015-10-20T00:00:00.000Z",
      roi: {
        times: 45.84912805162566,
        currency: "btc",
        percentage: 4584.912805162567,
      },
      last_updated: "2024-12-26T08:38:11.091Z",
    },
    {
      id: "tether",
      symbol: "usdt",
      name: "Tether",
      image:
        "https://coin-images.coingecko.com/coins/images/325/large/Tether.png?1696501661",
      current_price: 0.997929,
      market_cap: 139282651829,
      market_cap_rank: 3,
      fully_diluted_valuation: 139282651829,
      total_volume: 25782034601,
      high_24h: 1.003,
      low_24h: 0.995964,
      price_change_24h: -0.001230429939812816,
      price_change_percentage_24h: -0.12315,
      market_cap_change_24h: -42399405.993621826,
      market_cap_change_percentage_24h: -0.03043,
      circulating_supply: 139427879732.0534,
      total_supply: 139427879732.0534,
      max_supply: null,
      ath: 1.32,
      ath_change_percentage: -24.54325,
      ath_date: "2018-07-24T00:00:00.000Z",
      atl: 0.572521,
      atl_change_percentage: 74.38046,
      atl_date: "2015-03-02T00:00:00.000Z",
      roi: null,
      last_updated: "2024-12-26T08:38:14.490Z",
    },
    {
      id: "ripple",
      symbol: "xrp",
      name: "XRP",
      image:
        "https://coin-images.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442",
      current_price: 2.17,
      market_cap: 124579400334,
      market_cap_rank: 4,
      fully_diluted_valuation: 217568184883,
      total_volume: 3915409483,
      high_24h: 2.33,
      low_24h: 2.18,
      price_change_24h: -0.1174848714314236,
      price_change_percentage_24h: -5.1267,
      market_cap_change_24h: -6665613736.632599,
      market_cap_change_percentage_24h: -5.07876,
      circulating_supply: 57252380420,
      total_supply: 99986807248,
      max_supply: 100000000000,
      ath: 3.4,
      ath_change_percentage: -35.08678,
      ath_date: "2018-01-07T00:00:00.000Z",
      atl: 0.00268621,
      atl_change_percentage: 82024.85566,
      atl_date: "2014-05-22T00:00:00.000Z",
      roi: null,
      last_updated: "2024-12-26T08:38:14.291Z",
    },
    {
      id: "binancecoin",
      symbol: "bnb",
      name: "BNB",
      image:
        "https://coin-images.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970",
      current_price: 689.67,
      market_cap: 100744347007,
      market_cap_rank: 5,
      fully_diluted_valuation: 100744347007,
      total_volume: 1023568847,
      high_24h: 716.37,
      low_24h: 690.92,
      price_change_24h: -14.380677509376596,
      price_change_percentage_24h: -2.04256,
      market_cap_change_24h: -1966385825.118576,
      market_cap_change_percentage_24h: -1.91449,
      circulating_supply: 145887575.79,
      total_supply: 145887575.79,
      max_supply: 200000000,
      ath: 788.84,
      ath_change_percentage: -11.76794,
      ath_date: "2024-12-04T10:35:25.220Z",
      atl: 0.0398177,
      atl_change_percentage: 1747898.98226,
      atl_date: "2017-10-19T00:00:00.000Z",
      roi: null,
      last_updated: "2024-12-26T08:38:05.344Z",
    },
    {
      id: "solana",
      symbol: "sol",
      name: "Solana",
      image:
        "https://coin-images.coingecko.com/coins/images/4128/large/solana.png?1718769756",
      current_price: 188.69,
      market_cap: 90710668113,
      market_cap_rank: 6,
      fully_diluted_valuation: 111780793735,
      total_volume: 3359535758,
      high_24h: 200.25,
      low_24h: 189.12,
      price_change_24h: -9.760089420695664,
      price_change_percentage_24h: -4.91818,
      market_cap_change_24h: -4458723026.978027,
      market_cap_change_percentage_24h: -4.68504,
      circulating_supply: 479545013.3721395,
      total_supply: 590932944.7287347,
      max_supply: null,
      ath: 263.21,
      ath_change_percentage: -27.58208,
      ath_date: "2024-11-23T15:05:59.896Z",
      atl: 0.500801,
      atl_change_percentage: 37960.85281,
      atl_date: "2020-05-11T19:35:23.449Z",
      roi: null,
      last_updated: "2024-12-26T08:38:15.292Z",
    },
    {
      id: "dogecoin",
      symbol: "doge",
      name: "Dogecoin",
      image:
        "https://coin-images.coingecko.com/coins/images/5/large/dogecoin.png?1696501409",
      current_price: 0.315744,
      market_cap: 46605827771,
      market_cap_rank: 7,
      fully_diluted_valuation: 46619757535,
      total_volume: 2961019915,
      high_24h: 0.340955,
      low_24h: 0.31604,
      price_change_24h: -0.016716405316761773,
      price_change_percentage_24h: -5.02809,
      market_cap_change_24h: -2398561630.657257,
      market_cap_change_percentage_24h: -4.89459,
      circulating_supply: 147314376383.7052,
      total_supply: 147358406383.7052,
      max_supply: null,
      ath: 0.731578,
      ath_change_percentage: -56.37544,
      ath_date: "2021-05-08T05:08:23.458Z",
      atl: 0.0000869,
      atl_change_percentage: 367142.7564,
      atl_date: "2015-05-06T00:00:00.000Z",
      roi: null,
      last_updated: "2024-12-26T08:38:08.295Z",
    },
    {
      id: "usd-coin",
      symbol: "usdc",
      name: "USDC",
      image:
        "https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694",
      current_price: 0.996771,
      market_cap: 42937987562,
      market_cap_rank: 8,
      fully_diluted_valuation: 42958888174,
      total_volume: 3739615246,
      high_24h: 1.003,
      low_24h: 0.996854,
      price_change_24h: -0.003067251549233374,
      price_change_percentage_24h: -0.30677,
      market_cap_change_24h: -298108933.35787964,
      market_cap_change_percentage_24h: -0.68949,
      circulating_supply: 43085405644.31157,
      total_supply: 43106378014.368,
      max_supply: null,
      ath: 1.17,
      ath_change_percentage: -14.88907,
      ath_date: "2019-05-08T00:40:28.300Z",
      atl: 0.877647,
      atl_change_percentage: 13.72471,
      atl_date: "2023-03-11T08:02:13.981Z",
      roi: null,
      last_updated: "2024-12-26T08:38:09.320Z",
    },
    {
      id: "staked-ether",
      symbol: "steth",
      name: "Lido Staked Ether",
      image:
        "https://coin-images.coingecko.com/coins/images/13442/large/steth_logo.png?1696513206",
      current_price: 3346.6,
      market_cap: 32420457919,
      market_cap_rank: 9,
      fully_diluted_valuation: 32420457919,
      total_volume: 154939200,
      high_24h: 3531.73,
      low_24h: 3348.24,
      price_change_24h: -143.97738731528443,
      price_change_percentage_24h: -4.12475,
      market_cap_change_24h: -1420250195.6520271,
      market_cap_change_percentage_24h: -4.19687,
      circulating_supply: 9670904.101191143,
      total_supply: 9670904.101191143,
      max_supply: null,
      ath: 4829.57,
      ath_change_percentage: -30.31436,
      ath_date: "2021-11-10T14:40:47.256Z",
      atl: 482.9,
      atl_change_percentage: 596.94425,
      atl_date: "2020-12-22T04:08:21.854Z",
      roi: null,
      last_updated: "2024-12-26T08:38:12.837Z",
    },
    {
      id: "cardano",
      symbol: "ada",
      name: "Cardano",
      image:
        "https://coin-images.coingecko.com/coins/images/975/large/cardano.png?1696502090",
      current_price: 0.864355,
      market_cap: 31009412206,
      market_cap_rank: 10,
      fully_diluted_valuation: 38936141540,
      total_volume: 790553639,
      high_24h: 0.937659,
      low_24h: 0.864561,
      price_change_24h: -0.056825816507023674,
      price_change_percentage_24h: -6.1688,
      market_cap_change_24h: -2000550545.3222885,
      market_cap_change_percentage_24h: -6.06044,
      circulating_supply: 35838773285.35924,
      total_supply: 45000000000,
      max_supply: 45000000000,
      ath: 3.09,
      ath_change_percentage: -71.77592,
      ath_date: "2021-09-02T06:00:10.474Z",
      atl: 0.01925275,
      atl_change_percentage: 4425.34015,
      atl_date: "2020-03-13T02:22:55.044Z",
      roi: null,
      last_updated: "2024-12-26T08:38:06.644Z",
    },
  ];
};

export const getExchanges = async (per_page = 12, page = 1) => {
  try {
    const data = await instance.get(
      `exchanges?per_page=${per_page}&page=${page}`
    );

    return data.data;
  } catch {
    return [];
  }
};

export const getExchangesTotal = async (): Promise<number> => {
  try {
    const data = await instance.get("exchanges/list");
    return data.data.length;
  } catch {
    return 0;
  }
};

export const getCoins = async (per_page = 15, page = 1) => {
  try {
    const data = await instance.get(
      `coins/markets?vs_currency=usd&per_page=${per_page}&page=${page}`
    );

    return data.data;
  } catch {
    return [];
  }
};

export const getCoinsTotal = async (): Promise<number> => {
  try {
    const data = await instance.get("coins/markets?vs_currency=usd");
    return data.data.length;
  } catch {
    return 0;
  }
};
