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
      {/* The ad will load inside this container */}
      <div id="yllix-ad-container">
        <script type="text/javascript" src={YllixData.adScriptSrc}></script>
        <noscript>
          <a href="https://yllix.com/publishers/437177" target="_blank">
            <img
              src={YllixData.adImageUrl}
              style={{
                border: "none",
                margin: 0,
                padding: 0,
                verticalAlign: "baseline",
              }}
              alt="ylliX - Online Advertising Network"
            />
          </a>
        </noscript>
      </div>
    </div>
  );
};

export default YllixAd;
