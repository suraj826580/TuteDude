import {
  Box,
  Flex,
  HStack,
  Image,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  MenuGroup,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { CgProfile } from "react-icons/cg";
import Logo from "../images/Tutedude_Logo.png";

export default function Navbar({ add }) {
  return (
    <Box px={2}>
      <Box px={[0, 5, 10, 10]} mx={2}>
        <Flex
          width={"100%"}
          h={["73.03px"]}
          alignItems={"center"}
          justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Box w={"160px"}>
              <Image src={Logo} width={"100%"} />
            </Box>
          </HStack>
          <Flex alignItems={"center"} gap={[0, 0, 10, 10]}>
            {/* <Text
              // visibility={["hidden", "hidden", "visible", "visible"]}
              color="#80008040"
              fontWeight="500"
              lineHeight="22.23px"
              cursor={"pointer"}>
              My Assignment
            </Text>
            <Text
              // visibility={["hidden", "hidden", "visible", "visible"]}
              color="#80008040"
              fontWeight="500"
              lineHeight="22.23px"
              cursor={"pointer"}>
              Chat with Mentor
            </Text> */}
            <Menu>
              <MenuButton
                bg={["#800080", "#800080", "transparent", "transparent"]}
                leftIcon={<CgProfile />}
                as={Button}
                color={["#fff", "#fff", "#800080", "#800080"]}
                fontWeight="500"
                lineHeight="22.23px"
                fontSize={["16px", "16px", "18px", "18px"]}
                colorScheme={"transparent"}
                rightIcon={<ChevronDownIcon />}>
                ProfileName
              </MenuButton>

              <MenuList>
                <MenuGroup>
                  <MenuItem>My Account</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuGroup>
                <MenuDivider />
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>

      <Box w={"100%"} h={"76px"} position={"relative"}>
        <Text
          color={"#000"}
          position={"absolute"}
          top={"30px"}
          bottom={"25px"}
          left={"10%"}
          fontWeight={400}
          fontSize={"14px"}
          lineHeight={"21px"}>
          UI/UX &gt; Refer & Earn {add}
        </Text>
      </Box>
    </Box>
  );
}
