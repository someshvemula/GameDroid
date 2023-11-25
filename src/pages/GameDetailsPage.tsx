import {
  Divider,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useStore } from "zustand";
import ExpandableText from "../components/ExpandableText";
import GameAttribute from "../components/GameAttribute";
import GameGrid from "../components/GameGrid";
import GameImages from "../components/GameImages";
import GameTrailer from "../components/GameTrailer";
import YllixAd from "../components/YllixAd";
import useGame from "../hooks/useGame";
import useGameStore from "../stores/store";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  const setSearchText = useGameStore((s) => s.setSearchText);
  setSearchText(slug!);

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
        </GridItem>
      </SimpleGrid>
      <Divider marginY={8}></Divider>
      <YllixAd />
      <Heading marginBottom={4} textAlign={"center"}>
        More Games
      </Heading>
      <GameGrid></GameGrid>
    </>
  );
};

export default GameDetailsPage;
