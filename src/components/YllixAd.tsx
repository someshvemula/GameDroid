import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import YllixData from "../data/YllixAdData";

const YllixAd = () => {
  if (process.env.NODE_ENV === "development") {
    return (
      <Box>
        <h1>No ad</h1>
      </Box>
    );
  }
  const { pathname } = useLocation();
  const searchParams = useParams();
  useEffect(() => {
    const loadYllixScript = () => {
      const script = document.createElement("script");
      script.src = YllixData.adScriptSrc;
      script.async = true;
      document.head.appendChild(script);
    };

    loadYllixScript();
  }, [pathname, searchParams]);

  return (
    <div>
      {/* The ad will load inside this iframe */}
      <iframe
        title="Yllix Ad"
        src={
          "https://udbaa.com/bnr.php?section=General&pub=437177&format=728x90&ga=g"
        }
        width="728"
        height="90"
        frameBorder="0"
        scrolling="no"
        style={{ border: "none", margin: 0, padding: 0 }}
      ></iframe>
    </div>
  );
};

export default YllixAd;
