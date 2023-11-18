import useTrailers from "../hooks/useTrailers";
interface Props {
  gameId: number;
}
const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);
  if (isLoading) return null;
  if (error) throw error;
  if (data?.count === 0) return null;
  return (
    <video
      src={data?.results[0].data.max}
      poster={data?.results[0].preview}
      controls
    />
  );
};

export default GameTrailer;
