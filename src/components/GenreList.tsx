import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { Genre } from "../entities/Genre";
import getCroppedImageUrl from "../services/image-url";
import useGameStore from "../stores/store";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameStore((s) => s.gameQuery.genre);
  const setGenreId = useGameStore((s) => s.setGenreId);

  if (error) return null;

  if (isLoading) return <Spinner></Spinner>;

  return (
    <>
      <Heading fontSize="2xl" marginTop={9} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="1px">
            <HStack>
              <Button
                leftIcon={
                  <Image
                    boxSize="32px"
                    borderRadius={8}
                    objectFit="cover"
                    src={getCroppedImageUrl(genre.image_background)}
                  />
                }
                whiteSpace="normal"
                justifyContent={"left"}
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                onClick={() => setGenreId(genre.id)}
                fontSize="lg"
                variant={genre.id === selectedGenreId ? "solid" : "ghost"}
                width={"100%"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
