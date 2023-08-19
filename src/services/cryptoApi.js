import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import.meta.env.VITE_CRYPTO__RAPIDAPI_KEY;
const cryptoApiHeaders = {
  "X-RapidAPI-Key": import.meta.env.VITE_CRYPTOAPI_RAPIDAPI_KEY,
  "X-RapidAPI-Host": import.meta.env.VITE_CRYPTOAPI_RAPIDAPI_HOST,
};

const baseUrl = import.meta.env.VITE_CRYPTOAPI_RAPIDAPI_BASEURL;

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
      query: ({ id, timestamp }) => {
        return {
          url: `/coin/${id}/history`,
          headers: cryptoApiHeaders,
          params: { timestamp },
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
