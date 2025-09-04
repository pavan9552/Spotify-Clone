import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "x-rapidapi-key",
        "74bd353fd2msh9056fc1bdc04845p16618fjsn16c35d20413e"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => ({
        url: "/charts/world",
        params: { country_code: "US" },
      }),
    }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
