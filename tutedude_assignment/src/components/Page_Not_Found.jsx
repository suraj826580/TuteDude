import { Box, Image } from "@chakra-ui/react";
import React from "react";

const Page_Not_Found = () => {
  return (
    <Box w={"100%"}>
      <Image
        w={"100%"}
        src={
          "https://freefrontend.com/assets/img/html-funny-404-pages/Pure-CSS-404-Error-Page.png"
        }
      />
    </Box>
  );
};

export default Page_Not_Found;
