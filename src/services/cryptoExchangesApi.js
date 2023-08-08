import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

// const geckoCryptoApiHeaders = {
//   "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
//   "X-RapidAPI-Key": "f4e3410a1cmsh7f4625a976971f1p161eacjsncb342f56e0ab",
// };

// const createRequest = (url) => ({ url, headers: geckoCryptoApiHeaders });

// const geckoBaseUrl = "https://coingecko.p.rapidapi.com";

// export const cryptoApi = createApi({
//   reducerPath: "cryptoApi",
//   baseQuery: fetchBaseQuery({ geckoBaseUrl }),
//   endpoints: (builder) => ({
//     getCryptoExchange: builder.query({
//       query: () => createRequest('/exchanges')
//     }),
//   }),
// });

const cryptoExchangeHeaders = {
  "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
  "X-RapidAPI-Key": "f4e3410a1cmsh7f4625a976971f1p161eacjsncb342f56e0ab",
};

const createRequest = (url) => ({ url, headers: cryptoExchangeHeaders });

const geckoBaseUrl = "https://coingecko.p.rapidapi.com";

export const cryptoExchangeApi = createApi({
  reducerPath: "cryptoExchangeApi",
  baseQuery: fetchBaseQuery({ geckoBaseUrl }),
  endpoints: (builder) => ({
    getCryptoExchange: builder.query({
      query: () => createRequest("/exchanges"),
    }),
  }),
});
