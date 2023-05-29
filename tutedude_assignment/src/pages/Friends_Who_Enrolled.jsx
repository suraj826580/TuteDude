import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Navbar from "../components/Navbar";
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Tag,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const object = [
  {
    name: "Dhiraj Saxsena",
    Date: "14 Sep, 2022",
    courseEnroll: "6",
    techStack: ["UI/UX", "Photoshop", "Illustrator", "Python", "MERN", "Java"],
    ReferalAmount: "185",
  },
  {
    name: "Subhash Mishra",
    Date: "15 Sep, 2022",
    courseEnroll: "23",
    techStack: [
      "UI/UX",
      "Photoshop",
      "Illustrator",
      "Python",
      "MERN",
      "Java",
      "C++",
    ],
    ReferalAmount: "485",
  },
  {
    name: "Prafull Kumar",
    Date: "16 Sep, 2022",
    courseEnroll: "23",
    techStack: ["UI/UX", "Photoshop", "Illustrator", "Python", "MERN", "Java"],
    ReferalAmount: "485",
  },
];

const GetBack = () => {
  return (
    <Box w={"80%"} margin={"auto"} mb={5}>
      <Link to="/">
        <Button
          _focus={{
            background: "transparent",
          }}
          _hover={{
            boxShadow: "none",
          }}
          color={"#800080"}
          p={0}
          leftIcon={<AiOutlineArrowLeft />}
          variant={"ghost"}>
          go back
        </Button>
      </Link>
    </Box>
  );
};
const Friends_Who_Enrolled = () => {
  const [width, setwidth] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setwidth(true);
    } else {
      setwidth(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [width]);

  return (
    <>
      <Navbar add={" > Friends Referred"} />
      {width ? <GetBack /> : ""}
      <Box w={"80%"} margin={"auto"}>
        <Flex justifyContent={"space-between"}>
          <Box borderRadius={"5%"}>
            <Heading
              color={"#800080"}
              fontWeight={"semibold"}
              fontSize={"16px"}
              lineHeight={"24px"}>
              Your Referral Code
            </Heading>
            <Box
              boxShadow={"xs"}
              mt={2}
              border={"1px solid #e5e5e5"}
              borderRadius="md"
              p={2}>
              <Text
                fontWeight={"semibold"}
                fontSize={"16px"}
                lineHeight={"24px"}
                letterSpacing={".5em"}
                textAlign={"center"}>
                EDCH54
              </Text>
            </Box>
          </Box>
          <Flex justifyContent={"center"} alignItems={"center"}>
            <Box
              boxShadow={"lg"}
              alignContent={"center"}
              px={"15px"}
              py={"8px"}
              borderRadius={"10px"}>
              <Heading
                color={"#800080"}
                fontWeight={"semibold"}
                fontSize={"16px"}
                lineHeight={"24px"}>
                Wallet Balance
              </Heading>
              <Text>₹ 500</Text>
            </Box>
          </Flex>
        </Flex>
        <Box mt={10} mb={5}>
          <Heading
            color={"#800080"}
            fontWeight={"semibold"}
            fontSize={"20px"}
            lineHeight={"30px"}>
            Friends who enrolled
            <Text color={"#626262"} fontSize={"20px"} display={"inline"}>
              (3)
            </Text>
          </Heading>
        </Box>
        <Flex
          gap={8}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          flexWrap={["wrap", "wrap", "nowrap", "nowrap"]}>
          {object.map((item) => {
            return (
              <Box
                key={Math.random()}
                p={5}
                borderRadius={"20px"}
                bgGradient={"linear(to-l, #800080, #FF864C)"}>
                <HStack justifyContent={"space-between"}>
                  <Text
                    fontWeight={700}
                    fontSize={"16px"}
                    lineHeight={"24px"}
                    color={"#fff"}>
                    {item.name}
                  </Text>
                  <Text
                    fontWeight={400}
                    fontSize={"14px"}
                    lineHeight={"21px"}
                    color={"#fff"}>
                    {item.Date}
                  </Text>
                </HStack>
                <Text
                  py={2}
                  color={"#fff"}
                  fontWeight={500}
                  fontSize={"14px"}
                  lineHeight={"21px"}>
                  Course Enrolled ({item.courseEnroll})
                </Text>
                <Flex flexWrap={"wrap"} rowGap={3} columnGap={5}>
                  {item.techStack.map((item) => (
                    <Tag
                      key={Math.random()}
                      variant="solid"
                      border={"1px solid"}
                      colorScheme="transparent"
                      borderRadius={"50px"}>
                      {item}
                    </Tag>
                  ))}
                </Flex>
                <Text
                  mt={2}
                  py={2}
                  color={"#fff"}
                  fontWeight={400}
                  fontSize={"16px"}
                  lineHeight={"24px"}>
                  Referral Amount ₹{item.ReferalAmount}
                </Text>
              </Box>
            );
          })}
        </Flex>
        <Link to="#">
          <Text
            my={10}
            color="#800080"
            fontWeight={"semibold"}
            fontSize={"16px"}
            py={2}>
            Terms & Conditions
          </Text>
        </Link>
      </Box>
    </>
  );
};

export default Friends_Who_Enrolled;
