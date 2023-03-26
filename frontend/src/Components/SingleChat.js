import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { ChatState } from "../Context/ChatProvider";
import Icon from "../Images/Chatpage.svg";

const SingleChat = ({ fetchAgain, setFetchAgain }) => {
  const { user, selectedChat, setSelectedChat } = ChatState();
  return (
    <>
      {selectedChat ? (
        <>
          <Text></Text>
        </>
      ) : (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          h="100%"
        >
          <Image boxSize="70%" src={Icon} alt="icon" />
          <Text
            fontSize={{ base: "20px", md: "25px", lg: "30px" }}
            fontWeight="bold"
          >
            Select A Chat To Start Messaging...
          </Text>
        </Box>
      )}
    </>
  );
};

export default SingleChat;
