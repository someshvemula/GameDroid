import { Heading, Collapse, Button } from "@chakra-ui/react";
import { useState } from "react";
import { Game } from "../entities/Game";

interface Props {
  game: Game;
}
const ExpandableText = ({ game }: Props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
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

export default ExpandableText;
