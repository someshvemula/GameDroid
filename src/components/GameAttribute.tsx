import { Game } from "../entities/Game";
import { Text, SimpleGrid } from "@chakra-ui/react";
import CriticScore from "../components/CriticScore";
import DefinitionItem from "../components/DefinitionItem";

interface Props {
  game: Game;
}

const GameAttribute = ({ game }: Props) => {
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
      </SimpleGrid>
    </>
  );
};

export default GameAttribute;
