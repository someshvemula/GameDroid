import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();
  const selectedGenreObject = genres.results.find(
    (genre) => genre.id === gameQuery.genre
  );
  const selectedPlatformObject = platforms.results.find(
    (platform) => platform.id === gameQuery.platform
  );
  const heading = `${selectedPlatformObject?.name || ""} ${
    selectedGenreObject?.name || ""
  } Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
