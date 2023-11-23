import {
  Divider,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useStore } from "zustand";
import AdComponent from "../components/AdComponent";
import ContentDivider from "../components/ContentDivider";
import ExpandableText from "../components/ExpandableText";
import GameAttribute from "../components/GameAttribute";
import GameGrid from "../components/GameGrid";
import GameImages from "../components/GameImages";
import GameTrailer from "../components/GameTrailer";
import YllixAd from "../components/YllixAd";
import useGame from "../hooks/useGame";
import useGames from "../hooks/useGames";
import useTrailers from "../hooks/useTrailers";
import useGameStore from "../stores/store";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner></Spinner>;

  if (error) throw error;
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        <GridItem>
          <GameTrailer gameId={game.id}></GameTrailer>
          <Heading marginBottom={4}>{game.name}</Heading>
          <ExpandableText game={game}></ExpandableText>
          <GameAttribute game={game}></GameAttribute>
          <YllixAd />
        </GridItem>

        <GridItem>
          {/* <AdComponent clientId="2965238715262493" dataAdSlot="2000829454" /> */}
          <YllixAd />
          <GameImages gameId={game.id}></GameImages>
          <YllixAd />
        </GridItem>
      </SimpleGrid>

      <Divider marginY={8}></Divider>
      <Heading marginBottom={4} textAlign={"center"}>
        More Games
      </Heading>
      <GameGrid></GameGrid>
    </>
  );
};

export default GameDetailsPage;
