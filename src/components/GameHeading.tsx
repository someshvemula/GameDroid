import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import useGameStore from "../stores/store";

const GameHeading = () => {
  const selectedPlatformId = useGameStore((s) => s.gameQuery.platform);
  const selectedGenreId = useGameStore((s) => s.gameQuery.genre);
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  const selectedGenreObject = genres.results.find(
    (genre) => genre.id === selectedGenreId
  );
  const selectedPlatformObject = platforms?.results.find(
    (platform) => platform.id === selectedPlatformId
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
