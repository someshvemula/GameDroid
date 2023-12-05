import { Game } from "../entities/Game";
import { Text, SimpleGrid, Button, HStack } from "@chakra-ui/react";
import CriticScore from "../components/CriticScore";
import DefinitionItem from "../components/DefinitionItem";
import { Store } from "../entities/Store";

interface Props {
  game: Game;
  stores: Store[] | undefined;
}

const GameAttribute = ({ game, stores }: Props) => {
  return (
    <>
      <SimpleGrid columns={2} as="dl">
        <DefinitionItem heading="Platforms">
          {game.parent_platforms.map(({ platform }) => (
            <Text key={platform.id}>{platform.name}</Text>
          ))}
        </DefinitionItem>
        <DefinitionItem heading="Metascore">
          <CriticScore score={game.metacritic}></CriticScore>
        </DefinitionItem>
        <DefinitionItem heading="Genres">
          {game.genres.map((genre) => (
            <Text key={genre.id}>{genre.name}</Text>
          ))}
        </DefinitionItem>
        <DefinitionItem heading="Publishers">
          {game.publishers?.map((publisher) => (
            <Text key={publisher.id}>{publisher.name}</Text>
          ))}
        </DefinitionItem>
        <DefinitionItem heading="Original release date">
          {game.released}
        </DefinitionItem>
      </SimpleGrid>
      <DefinitionItem heading="Stores">
        {stores?.map((store) => (
          <Button key={store.id} marginRight={1} marginY={1}>
            {store.name}
          </Button>
        ))}
      </DefinitionItem>
    </>
  );
};

export default GameAttribute;
