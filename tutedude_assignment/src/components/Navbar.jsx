import React from "react";
import {
  Flex,
  Image,
  useDisclosure,
  Box,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuItem,
  Button,
  MenuDivider,
  MenuGroup,
} from "@chakra-ui/react";
import { CgProfile } from "@react-icons/all-files/fa/CgProfile";
import { ChevronDownIcon } from "@chakra-ui/icons";

import Logo from "../images/Tutedude_Logo.png";

const Navbar = () => {
  return (
    <>
      <Box border={"1px solid"} h={"73.03px"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box border={"1px solid"}>
            {" "}
            <Image
              src={Logo}
              alt={"Tutedude Logo"}
              w="180px"
              h={"63px"}
              pos={"relative"}
              top={"6px"}
              left={"74px"}
            />
          </Box>
          <Flex>
            <Menu>
              <MenuButton
                leftIcon={<CgProfile />}
                as={Button}
                colorScheme="pink"
                rightIcon={<ChevronDownIcon />}>
                Profile
              </MenuButton>

              <MenuList>
                <MenuGroup title="Profile">
                  <MenuItem>My Account</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuGroup>
                <MenuDivider />
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
