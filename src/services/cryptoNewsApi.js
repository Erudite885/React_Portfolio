import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const cryptoNewsHeaders = {
  "X-BingApis-SDK": import.meta.env.VITE_CRYPTONEWSAPI_RAPIDAPI_SDK,
  "X-RapidAPI-Key": import.meta.env.VITE_CRYPTONEWSAPI_RAPIDAPI_KEY,
  "X-RapidAPI-Host": import.meta.env.VITE_CRYPTONEWSAPI_RAPIDAPI_HOST,
};

const baseUrl = import.meta.env.VITE_CRYPTONEWSAPI_RAPIDAPI_BASEURL;

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
