import { useQuery } from "@tanstack/react-query";
import React from "react";
import APIClient, { FetchResponse } from "../services/api-client";

interface GameDetails {
  id: number;
  slug: string;
  name: string;
  name_original: string;
  description: string;
  description_raw: string;
  released: string;
  updated: string;
  website: string;
}

const useGame = (slug: string) => {
  const apiClient = new APIClient<GameDetails>("/games");
  return useQuery<GameDetails, Error>({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get(slug),
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default useGame;
