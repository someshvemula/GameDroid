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
    <video
      key={data?.results[0].id}
      src={data?.results[0].data.max}
      poster={data?.results[0].preview}
      controls
    ></video>
  );
};

export default GameTrailer;
