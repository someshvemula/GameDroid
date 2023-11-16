import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  HStack,
  Box,
  Image,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import useGameStore from "../stores/store";
import getCroppedImageUrl from "../services/image-url";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const setPlatformId = useGameStore((s) => s.setPlatformId);
  const selectedPlatformId = useGameStore((s) => s.gameQuery.platform);

  if (error) return null;
  const selectedPlatformObject = data?.results.find(
    (platform) => platform.id === selectedPlatformId
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatformObject?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => setPlatformId(platform.id)}
            key={platform.id}
          >
            <HStack>
              <Image
                src={getCroppedImageUrl(platform.platforms[0].image_background)}
                boxSize={"30px"}
              />
              <h1>{platform.name}</h1>
            </HStack>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
