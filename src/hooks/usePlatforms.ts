import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient, { FetchResponse } from "../services/api-client";
import { Result } from "../entities/Result";

const apiClient = new APIClient<Result>("/platforms/lists/parents");
const usePlatforms = () =>
  useQuery<FetchResponse<Result>, Error>({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms, next: null },
  });

export default usePlatforms;
