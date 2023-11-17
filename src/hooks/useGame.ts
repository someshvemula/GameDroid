import { useQuery } from "@tanstack/react-query";
import React from "react";
import APIClient, { FetchResponse } from "../services/api-client";
import { Game } from "../entities/Game";

const useGame = (slug: string) => {
  const apiClient = new APIClient<Game>("/games");
  return useQuery<Game, Error>({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get(slug),
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default useGame;
