import { Grid, GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttribute from "../components/GameAttribute";
import GameImages from "../components/GameImages";
import GameTrailer from "../components/GameTrailer";
import useGame from "../hooks/useGame";
import useTrailers from "../hooks/useTrailers";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner></Spinner>;

  if (error) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandableText game={game}></ExpandableText>
        <GameAttribute game={game}></GameAttribute>
      </GridItem>

      <GridItem>
        <GameTrailer gameId={game.id}></GameTrailer>
        <GameImages gameId={game.id}></GameImages>
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailsPage;
