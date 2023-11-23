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
  var qs = Math.round(Math.random() * 10000000);
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
      {/* <iframe
        title="Yllix Ad"
        src={
          "https://udbaa.com/bnr.php?section=General&pub=437177&format=728x90&ga=g"
        }
        width="728"
        height="90"
        style={{ border: "none", margin: 0, padding: 0 }}
      ></iframe> */}
      <iframe
        src={
          "https://udbaa.com/bnr_xload.php?section=General&pub=437177&format=728x90&ga=g&xt=170070029721063&xtt=" +
          qs
        }
        width="728"
        height="90"
        scrolling="no"
        sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts"
        style={{ width: "728px", height: "90px" }}
      ></iframe>
    </div>
  );
};

export default YllixAd;
