import { useQuery } from "@tanstack/react-query";
import { Image } from "../entities/Image";
import APIClient, { FetchResponse } from "../services/api-client";

const useImages = (gameId: number) => {
  const apiClient = new APIClient<Image>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["images", gameId],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default useImages;
