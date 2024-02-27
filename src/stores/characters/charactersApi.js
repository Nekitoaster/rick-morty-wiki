import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const charactersApi = createApi({
  reducerPath: "charactersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://rickandmortyapi.com/api`,
  }),
  endpoints: (build) => ({
    getCharacters: build.query({
      query: (arg) => {
        const { page, name, status, species, type, gender } = arg;
        console.log('arg: ', arg);
        return {
          url: 'character/',
          params: {page, name, status, species, type, gender},
        }
      },
    }),
  }),
});

export const { useGetCharactersQuery, useLazyGetFirstTenCharactersQuery } =
  charactersApi;
