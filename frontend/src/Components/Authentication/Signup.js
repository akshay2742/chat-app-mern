import React, { useState } from "react";
import {
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";

import { FiChevronRight } from "react-icons/fi";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const changeEmailHandler = (e) => setEmail(e.target.value);
  const changeNameHandler = (e) => setName(e.target.value);
  const isError = email === "";

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <FormControl>
        <VStack spacing="3" align="start">
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={changeNameHandler}
            placeholder="Enter your name"
          />
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={changeEmailHandler}
            placeholder="Enter email address"
          />
          {!isError ? (
            <FormHelperText>We'll never share your email.</FormHelperText>
          ) : (
            <FormErrorMessage color="red.300">
              Email is required!.
            </FormErrorMessage>
          )}
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
          <FormLabel>Confirm Password</FormLabel>
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
              Signup
            </Button>
          </Center>
        </VStack>
      </FormControl>
    </>
  );
};

export default Signup;
