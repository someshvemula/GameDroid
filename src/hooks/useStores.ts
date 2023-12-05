import { useQuery } from "@tanstack/react-query";
import { Store } from "../entities/Store";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Store>("/stores");
const useStores = () =>
  useQuery({
    queryKey: ["stores"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
  });

export default useStores;
