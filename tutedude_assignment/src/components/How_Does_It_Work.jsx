import React from "react";
import {
  Heading,
  Box,
  Grid,
  GridItem,
  Flex,
  Text,
  Icon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IoIosPeople } from "react-icons/io";
import { BiWalletAlt } from "react-icons/bi";
import { CiDiscount1 } from "react-icons/ci";
import { BsCurrencyRupee } from "react-icons/bs";
import { RiCoupon2Line } from "react-icons/ri";

const object = [
  {
    title: "Invite your Friends",
    icon: IoIosPeople,
    description: " Share the link tutedude.com with your friends",
  },
  {
    icon: RiCoupon2Line,
    title: "Friend purchases any course",
    description: "Using your REFERRAL CODE in the payments page",
  },
  {
    icon: BsCurrencyRupee,
    title: "You get ₹ 200 as referral money",
    description: "On total purchase the friend makes, into your wallet",
  },
  {
    icon: CiDiscount1,
    title: "Your Friend gets ₹ 200 Off ",
    description:
      "On his overall fee on successful purchase using your referral code ",
  },
  {
    icon: BiWalletAlt,
    title: "Transfer money from wallet",
    description:
      "When the wallet balance reaches ₹200 or more, you can withdraw it",
  },
];

const How_Does_It_Work = () => {
  return (
    <Box w={"75%"} margin={"auto"} mt={[3, 5, , 10, 10]}>
      <Heading
        color={"#800080"}
        fontWeight={600}
        fontSize={"24px"}
        lineHeight={"36px"}>
        How does it Works?
      </Heading>
      <Box>
        <Grid
          gridTemplateColumns={[
            "repeat(1,1fr)",
            "repeat(1,1fr)",
            "repeat(1,1fr)",
            "repeat(2,1fr)",
            "repeat(2,1fr)",
          ]}>
          {object.map((item, index) => {
            return (
              <GridItem px={3} key={index} py={3}>
                <Flex gap={7}>
                  <Flex
                    h={["80px", "", "", ""]}
                    bg={"rgba(217, 217, 217, 0.25)"}
                    borderRadius={"100%"}
                    p={5}
                    justifyContent={"center"}
                    alignItems={"center"}>
                    <Icon as={item.icon} boxSize={"32px"} color={"#800080"} />
                  </Flex>
                  <Box>
                    <Heading
                      color={"#000"}
                      fontWeight={500}
                      fontSize={"16px"}
                      lineHeight={"24px"}>
                      {item.title}
                    </Heading>
                    <Text
                      color={"#4D4D4D"}
                      fontWeight={400}
                      fontSize={"16px"}
                      lineHeight={"24px"}>
                      {item.description}
                    </Text>
                  </Box>
                </Flex>
              </GridItem>
            );
          })}
        </Grid>

        <Box mt={10}>
          <Link to="/enrolled">
            <Text
              color="#800080"
              fontWeight={"semibold"}
              fontSize={"16px"}
              py={2}>
              Friends Who Enrolled
            </Text>
          </Link>

          <Link to="#">
            <Text
              color="#800080"
              fontWeight={"semibold"}
              fontSize={"16px"}
              py={2}>
              Terms & Conditions
            </Text>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default How_Does_It_Work;
