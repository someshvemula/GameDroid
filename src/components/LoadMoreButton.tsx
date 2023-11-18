import { Button } from "@chakra-ui/react";

interface Props {
  buttonLabel: string;
  onLoadMore: () => void;
}
const LoadMoreButton = ({ onLoadMore, buttonLabel }: Props) => {
  return (
    <Button marginY={5} onClick={onLoadMore}>
      {buttonLabel}
    </Button>
  );
};

export default LoadMoreButton;
