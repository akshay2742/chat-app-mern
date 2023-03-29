import { Avatar, Box, Divider, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import ScrollableFeed from "react-scrollable-feed";
import {
  isLastMessage,
  isSameSender,
  isSameSenderMargin,
  isSameUser,
} from "../config/ChatLogics";
import { ChatState } from "../Context/ChatProvider";
import styled from "styled-components";

const ScrollFeed = styled(ScrollableFeed)`
  &::-webkit-scrollbar {
    display: none;
  }
`;
const ScrollableChat = ({ messages }) => {
  const { user, selectedChat } = ChatState();
  return (
    <ScrollFeed>
      {messages &&
        messages.map((m, i) => (
          <Box display="flex" key={m._id}>
            {(isSameSender(messages, m, i, user._id) ||
              isLastMessage(messages, i, user._id)) && (
              <Tooltip
                label={m.sender.firstname + " " + m.sender.lastname}
                placement="bottom-start"
                hasArrow
              >
                <Avatar
                  mt={
                    selectedChat.isGroupChat
                      ? isSameUser(messages, m, i)
                        ? 3
                        : 42
                      : isSameUser(messages, m, i)
                      ? 3
                      : 43
                  }
                  mr={1}
                  size="sm"
                  cursor="pointer"
                  name={m.sender.firstname + " " + m.sender.lastname}
                  src={m.sender.pic}
                  bg="#4FB2E5"
                />
              </Tooltip>
            )}
            <Box
              bg={m.sender._id === user._id ? "#b3d1f8" : "#7eaff0"}
              borderRadius="10px"
              p="5px 15px"
              maxWidth={{ base: "80%", md: "60%" }}
              wordBreak="break-word"
              marginLeft={isSameSenderMargin(messages, m, i, user._id)}
              marginTop={
                selectedChat.isGroupChat
                  ? isSameUser(messages, m, i)
                    ? 3
                    : 8
                  : isSameUser(messages, m, i)
                  ? 3
                  : 10
              }
            >
              {m.sender._id !== user._id && selectedChat.isGroupChat && (
                <Text
                  fontSize={{ base: "10px", md: "12px" }}
                  textAlign="start"
                  mb={1}
                  color="white"
                  fontWeight={600}
                >
                  {m.sender.firstname + " " + m.sender.lastname}
                </Text>
              )}

              {m.content}
            </Box>
          </Box>
        ))}
    </ScrollFeed>
  );
};

export default ScrollableChat;
