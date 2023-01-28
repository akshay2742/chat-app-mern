import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import { FiChevronRight } from "react-icons/fi";

const HomePage = () => {
  const [email, setEmail] = useState("");

  const changeEmailHandler = (e) => setEmail(e.target.value);

  const isError = email === "";

  //password
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

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
            <VStack spacing='4'>
              <Heading size="xl" fontFamily="Marck Script">
                LetsChat
              </Heading>
              <Tabs w="100%" p="4" variant="soft-rounded">
                <TabList>
                  <Tab w="50%">Login</Tab>
                  <Tab w="50%">Signup</Tab>
                </TabList>

                <TabPanels top="3" position="relative">
                  <TabPanel>
                    <FormControl>
                      <VStack spacing="4" align="start">
                        <FormLabel>Email address</FormLabel>
                        <Input
                          type="email"
                          value={email}
                          onChange={changeEmailHandler}
                          placeholder="Enter email address"
                        />
                        {/* {!isError ? (
                        <FormHelperText>
                          We'll never share your email.
                        </FormHelperText>
                      ) : (
                        <FormHelperText color="red.300">
                          Email is required!.
                        </FormHelperText>
                      )} */}
                        <FormLabel>Password</FormLabel>
                        <InputGroup size="md">
                          <Input
                            pr="4.5rem"
                            type={show ? "text" : "password"}
                            placeholder="Enter password"
                          />
                          <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={handleClick}>
                              {show ? "Hide" : "Show"}
                            </Button>
                          </InputRightElement>
                        </InputGroup>
                        <Center w="100%" top="20px" position="relative">
                          <Button
                            rightIcon={<FiChevronRight />}
                            colorScheme="blue"
                            variant="solid"
                            marginLeft="auto"
                            marginRight="auto"
                          >
                            Login
                          </Button>
                        </Center>
                      </VStack>
                    </FormControl>
                  </TabPanel>
                  <TabPanel>
                    <p>Signup</p>
                  </TabPanel>
                  <TabPanel>
                    <p>three!</p>
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
            <h1>ChatPage</h1>
          </Center>
        </HStack>
      </Box>
    </Center>
  );
};

export default HomePage;
