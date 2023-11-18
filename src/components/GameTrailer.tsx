import { SimpleGrid } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";
interface Props {
  gameId: number;
}
const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);
  if (isLoading) return null;
  if (error) throw error;
  if (data?.count === 0) return null;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      {data?.results.map((trailer) => (
        <video src={trailer.data.max} poster={trailer.preview} controls></video>
      ))}
    </SimpleGrid>
  );
};

export default GameTrailer;
