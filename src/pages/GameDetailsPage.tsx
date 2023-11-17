import { Heading, Spinner, Button, Collapse } from "@chakra-ui/react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);
  const [expanded, setExpanded] = useState(false);

  if (isLoading) return <Spinner></Spinner>;

  if (error) throw error;
  return (
    <>
      <Heading>{game.name}</Heading>
      <Collapse startingHeight={24} animateOpacity={true} in={expanded}>
        {game.description_raw}
      </Collapse>
      <Button
        colorScheme={expanded ? "red" : "green"}
        size="sm"
        onClick={() => setExpanded(!expanded)}
        mt="1rem"
      >
        Show {expanded ? "Less" : "More"}
      </Button>
    </>
  );
};

export default GameDetailsPage;
