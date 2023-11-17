import { Box, HStack } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import Lottie from "lottie-react";
import AnimatedLogo from "../assets/AnimatedLogo.json";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Box boxSize={"50px"}>
        <Link to={"/"}>
          <Lottie animationData={AnimatedLogo} loop={0}></Lottie>
        </Link>
      </Box>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
