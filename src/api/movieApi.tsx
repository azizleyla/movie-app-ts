import { baseApi } from "./baseApi";

export const MovieApi = {
  async getAllMovies(page: number) {
    const response = await baseApi.get(
      `discover/movie?api_key=4faf715e4beccd69d65cf8aa0f91cc5a&page=${page}`,
    );
    return response.data;
  },
  async getMovieById(id: string) {
    const response = await baseApi.get(
      `movie/${id}?api_key=4faf715e4beccd69d65cf8aa0f91cc5a`,
    );
    return response.data;
  },
  async getDirectorsByMovieId(id: number) {
    const response = await baseApi.get(
      `movie/${id}/credits?api_key=4faf715e4beccd69d65cf8aa0f91cc5a`,
    );
    return response.data;
  },
};
