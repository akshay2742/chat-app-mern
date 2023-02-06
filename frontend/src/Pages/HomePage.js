import React, { useState } from "react";
import {
  Box,
  Center,
  Heading,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import { BsFillChatQuoteFill } from "react-icons/bs";
import styled from "styled-components";
import SvgIcon from "./SvgIcon";
import Login from "../Components/Authentication/Login";
import Signup from "../Components/Authentication/Signup";

const HomePage = () => {
  // const chatIcon = styled.BsFillChatQuoteFill`
  //   width: 60px;
  //   height: 60px;
  // `;

  return (
    <Center w="100%" h="100vh" bg="aquamarine">
      <Box w="70%" h="80%">
        <HStack w="100%" h="100%" spacing="0px">
          <Center
            bg="aliceblue"
            w="50%"
            h="100%"
            borderTopLeftRadius="20px"
            borderBottomLeftRadius="20px"
          >
            <VStack spacing="25px" w="90%">
              <HStack spacing="3">
                <Center>
                  <BsFillChatQuoteFill size="40px"></BsFillChatQuoteFill>
                </Center>
                <Center>
                  <Heading size="2xl" fontFamily="Marck Script">
                    LetsChat
                  </Heading>
                </Center>
              </HStack>
              <Tabs w="100%" p="4">
                <TabList>
                  <Tab w="50%">Login</Tab>
                  <Tab w="50%">Signup</Tab>
                </TabList>

                <TabPanels top="3" position="relative">
                  <TabPanel>
                    <Login />
                  </TabPanel>
                  <TabPanel>
                    <Signup />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </VStack>
          </Center>
          <Center
            bg="antiquewhite"
            w="50%"
            h="100%"
            borderTopRightRadius="20px"
            borderBottomRightRadius="20px"
          >
            <SvgIcon />
          </Center>
        </HStack>
      </Box>
    </Center>
  );
};

export default HomePage;
