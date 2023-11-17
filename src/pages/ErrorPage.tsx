import { Heading, Text, Box } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar></NavBar>
      <Box padding={5}>
        <Heading>Oops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This route doesnt exist"
            : "An unexpected error occured"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
