import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../hooks/usePlatforms";
import usePlatforms from "../hooks/usePlatforms";
import useGameStore from "../stores/store";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const setPlatformId = useGameStore((s) => s.setPlatformId);
  const selectedPlatformId = useGameStore((s) => s.gameQuery.platform);

  if (error) return null;
  const selectedPlatformObject = data.results.find(
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
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
