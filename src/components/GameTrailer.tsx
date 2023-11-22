import useTrailers from "../hooks/useTrailers";
import ReactPlayer from "react-player";
import AdComponent from "./AdComponent";

interface Props {
  gameId: number;
}
const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);
  if (isLoading) return null;
  if (error) throw error;
  if (data?.count === 0) return null;
  return (
    <>
      <video
        key={data?.results[0].id}
        src={data?.results[0].data.max}
        poster={data?.results[0].preview}
        controls
        playsInline
      ></video>
      {/* <ReactPlayer url={data?.results[0].data.max} controls /> */}
    </>
  );
};

export default GameTrailer;
