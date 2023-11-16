import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient, { FetchResponse } from "../services/api-client";
interface Result {
  id: number;
  name: string;
  slug: string;
  platforms: Platform[];
}
export interface Platform {
  id: number;
  name: string;
  slug: string;
  image_background: string;
  image: string | null;
}
const apiClient = new APIClient<Result>("/platforms/lists/parents");
const usePlatforms = () =>
  useQuery<FetchResponse<Result>, Error>({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms, next: null },
  });

export default usePlatforms;
