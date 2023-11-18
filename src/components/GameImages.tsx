import { Image, SimpleGrid } from "@chakra-ui/react";
import useImages from "../hooks/useImages";

interface Props {
  gameId: number;
}
const GameImages = ({ gameId }: Props) => {
  const { data: images, error, isLoading } = useImages(gameId);
  if (isLoading) return null;
  if (error) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {images?.results.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameImages;
