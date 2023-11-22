import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

interface Props {
  clientId: string;
  dataAdSlot: string;
}
const AdComponent = ({ clientId, dataAdSlot }: Props) => {
  const { pathname } = useLocation();
  const searchParams = useParams();

  if (process.env.NODE_ENV === "development")
    return (
      <>
        <h1>No ad</h1>
      </>
    );

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    console.log("AdsenseComp -> router changed", url);

    const scriptElement = document.querySelector(
      'script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-' +
        clientId +
        "]"
    );

    const handleScriptLoad = () => {
      try {
        if (window.adsbygoogle) {
          console.log("pushing ad");
          adsbygoogle.push({});
        } else {
          scriptElement!.addEventListener("load", handleScriptLoad);
          console.log("waiting for the ad");
        }
      } catch (err) {
        console.log("error in adsense", err);
      }
    };

    handleScriptLoad();

    return () => {
      if (scriptElement) {
        scriptElement.removeEventListener("load", handleScriptLoad);
      }
    };
  }, [pathname, searchParams]);

  return (
    <Box overflow={"hidden"} margin={"5px"}>
      Google Ad block
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={"ca-pub-" + clientId}
        data-ad-slot={dataAdSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </Box>
  );
};

export default AdComponent;
