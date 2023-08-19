import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const cryptoExchangeApi = createApi({
  reducerPath: "cryptoExchangeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.coingecko.com/api/v3" }),
  endpoints: (builder) => ({
    getCryptoMarket: builder.query({
      query: () => {
        return `https://api.coingecko.com/api/v3/exchanges`;
      },
    }),
    getCryptoExchange: builder.query({
      query: () => {
        return `coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
      },
    }),
  }),
});

export const { useGetCryptoExchangeQuery, useGetCryptoMarketQuery } = cryptoExchangeApi;

console.log();
