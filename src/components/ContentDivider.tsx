import { AbsoluteCenter, Box, Divider } from "@chakra-ui/react";

interface Props {
  headingText: string;
}
const ContentDivider = ({ headingText }: Props) => {
  return (
    <Box position="relative" padding="10">
      <Divider />
      <AbsoluteCenter bg="white" px="4">
        {headingText}
      </AbsoluteCenter>
    </Box>
  );
};

export default ContentDivider;
