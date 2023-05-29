import React from "react";
import { Flex, Box, Heading, Text, Button } from "@chakra-ui/react";
const Refer_And_Earn = () => {
  return (
    <Box w={"75%"} color={"#800080"} margin={"auto"}>
      <Flex justifyContent={"space-between"} flexWrap={"wrap"}>
        <Flex
          borderRadius={"5%"}
          boxShadow={"xl"}
          h={"188px"}
          alignItems={"center"}
          width={"486px"}
          flexWrap={"wrap"}
          justifyContent={"space-around"}>
          <Box>
            <Text>Referral Earning</Text>
            <Heading
              color="#000"
              fontSize={"32px"}
              lineHeight={"48px"}
              fontWeight={500}>
              ₹ 2500
            </Heading>
          </Box>
          <Box>
            <Text>Tota Referrals</Text>
            <Heading
              color="#000"
              fontSize={"32px"}
              lineHeight={"48px"}
              fontWeight={500}>
              7
            </Heading>
          </Box>
          <Box>
            <Text>Wallet Balance</Text>
            <Heading
              color="#000"
              fontSize={"32px"}
              lineHeight={"48px"}
              fontWeight={500}>
              {" "}
              ₹ 500
            </Heading>
          </Box>
          <Box>
            <Button
              size={["sm", "sm", "md", "lg"]}
              _hover={{
                bgColor: "#800080",
              }}
              boxShadow={"none"}
              borderRadius={"100px"}
              color={"#ffff"}
              bg="#800080"
              fontWeight={500}
              fontSize={"16px"}
              lineHeight={"24px"}>
              WithDraw Balance
            </Button>
          </Box>
        </Flex>
        <Box mt={[5, 5, 5, 0]} p={[5, 5, 0, 0]} borderRadius={"5%"}>
          <Heading
            fontWeight={"semibold"}
            fontSize={"24px"}
            lineHeight={"36px"}>
            Your Referral Code
          </Heading>
          <Box
            border={"2px solid"}
            borderimage={"linear-gradient(to right, red, green)"}
            borderRadius="md"
            p={4}>
            <Text
              fontWeight={"500"}
              fontSize={"20px"}
              lineHeight={"30px"}
              letterSpacing={"1.5em"}
              textAlign={"center"}>
              EDCH54
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Refer_And_Earn;
