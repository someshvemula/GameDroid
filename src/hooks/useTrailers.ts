import { useQuery } from "@tanstack/react-query";
import { Game } from "../entities/Game";
import { Trailer } from "../entities/Trailer";
import APIClient, { FetchResponse } from "../services/api-client";

const useTrailers = (gameId: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ["trailer", gameId],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default useTrailers;
