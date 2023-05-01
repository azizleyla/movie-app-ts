import { baseApi } from "./baseApi"

export const MovieApi = {
  async getAllMovies(){
    const response = await baseApi.get(`discover/movie?api_key=4faf715e4beccd69d65cf8aa0f91cc5a`);
    return response.data;
  }
}