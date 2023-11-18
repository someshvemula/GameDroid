import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttribute from "../components/GameAttribute";
import GameTrailer from "../components/GameTrailer";
import useGame from "../hooks/useGame";
import useTrailers from "../hooks/useTrailers";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner></Spinner>;

  if (error) throw error;
  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText game={game}></ExpandableText>
      <GameAttribute game={game}></GameAttribute>
      <GameTrailer gameId={game.id}></GameTrailer>
    </>
  );
};

export default GameDetailsPage;
