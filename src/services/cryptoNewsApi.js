import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

const cryptoNewsHeaders = {};

const baseUrl = "";

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: () => createRequest(``),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoApi;
