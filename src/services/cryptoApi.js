import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "f4e3410a1cmsh7f4625a976971f1p161eacjsncb342f56e0ab",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),

    getCryptoDetails: builder.query({
      query: (coinId) => {
        return {
          url: `/coin/${coinId}`,
          headers: cryptoApiHeaders,
        };
      },
    }),

    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) => {
        return {
          url: `/coin/${coinId}/history`,
          headers: cryptoApiHeaders,
          params: { timeperiod },
        };
      },
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
