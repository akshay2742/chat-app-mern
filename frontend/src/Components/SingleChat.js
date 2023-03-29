import {
  Avatar,
  Box,
  Button,
  Divider,
  FormControl,
  IconButton,
  Image,
  Input,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ChatState } from "../Context/ChatProvider";
import Icon from "../Images/Chatpage.svg";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { getSender, getSenderFull } from "../config/ChatLogics";
import ProfileModal from "./miscellaneous/ProfileModal";
import UpdateGroupChat from "./miscellaneous/UpdateGroupChat";
import axios from "axios";
import Toast from "./Toast";
import styled from "styled-components";
import ScrollableChat from "./ScrollableChat";
const MessaeBox = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const SingleChat = ({ fetchAgain, setFetchAgain }) => {
  const [toastShow, setToastShow] = useState(false);
  const [toastText, setToastText] = useState("");
  const [toastIcon, setToastIcon] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState();

  const { user, selectedChat, setSelectedChat } = ChatState();

  const fetchMessages = async () => {
    if (!selectedChat) return;

    try {
      setLoading(true);
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.get(
        `/api/message/${selectedChat._id}`,
        config
      );
      console.log(data);
      setMessages(data);
      setLoading(false);
    } catch (error) {
      setToastShow(true);
      setToastText("Fail Fetching Messages");
      setToastIcon("failed");
      setTimeout(() => {
        setToastShow(false);
        setToastText("");
        setToastIcon("");
      }, 1500);
    }
  };
  const sendMessage = async (e) => {
    if (e.key === "Enter" && newMessage) {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        };
        setNewMessage("");
        const { data } = await axios.post(
          "/api/message",
          {
            content: newMessage,
            chatId: selectedChat._id,
          },
          config
        );

        setMessages([...messages, data]);
      } catch (error) {
        setToastShow(true);
        setToastText("Failed Sending message");
        setToastIcon("failed");
        setTimeout(() => {
          setToastShow(false);
          setToastText("");
          setToastIcon("");
        }, 1500);
      }
    }
  };

  const typingHandler = (e) => {
    setNewMessage(e.target.value);

    // typing logic
  };

  useEffect(() => {
    fetchMessages();
  }, [selectedChat]);

  return (
    <>
      {selectedChat ? (
        <>
          <Box
            fontSize={{ base: "28px", md: "30px" }}
            pb={3}
            px={2}
            w="100%"
            display="flex"
            justifyContent={{ base: "space-between" }}
            alignItems="center"
          >
            <IconButton
              bg="#b3d1f8"
              _hover={{ bg: "#7eaff0" }}
              display={{ base: "flex", md: "none" }}
              icon={<BsFillArrowLeftCircleFill />}
              onClick={() => setSelectedChat("")}
            ></IconButton>
            {!selectedChat.isGroupChat ? (
              <>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <ProfileModal user={getSenderFull(user, selectedChat.users)}>
                    <Avatar
                      size="sm"
                      cursor="pointer"
                      name={getSender(user, selectedChat.users)}
                      src={
                        selectedChat.users[0]._id === user._id
                          ? selectedChat.users[1].pic
                          : selectedChat.users[0].pic
                      }
                      bg="#4FB2E5"
                      mr={1}
                    />
                  </ProfileModal>
                  <Text fontSize={{ base: "20px", md: "25px" }}>
                    {getSender(user, selectedChat.users).toUpperCase()}
                  </Text>
                </Box>
                <ProfileModal user={getSenderFull(user, selectedChat.users)} />
              </>
            ) : (
              <>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <UpdateGroupChat>
                    <Avatar
                      size="sm"
                      cursor="pointer"
                      name={selectedChat.chatName}
                      bg="#4FB2E5"
                      mr={1}
                    />
                  </UpdateGroupChat>
                  <Text fontSize={{ base: "20px", md: "25px" }}>
                    {selectedChat.chatName.toUpperCase()}
                  </Text>
                </Box>
                <UpdateGroupChat
                  fetchAgain={fetchAgain}
                  setFetchAgain={setFetchAgain}
                  fetchMessages={fetchMessages}
                />
              </>
            )}
          </Box>
          <Divider />
          <Box
            display="flex"
            justifyContent="flex-end"
            flexDirection="column"
            bg="transparent"
            p={3}
            h="100%"
            w="100%"
            overflowY="hidden"
          >
            {loading ? (
              <Spinner
                size="xl"
                alignSelf="center"
                w={{ base: "150px", md: "200px" }}
                h={{ base: "150px", md: "200px" }}
                color="#4FB2E5"
                margin="auto"
              />
            ) : (
              <MessaeBox>
                <ScrollableChat messages={messages} />
              </MessaeBox>
            )}
            <FormControl
              onKeyDown={sendMessage}
              display="flex"
              justifyContent="center"
              alignItems="center"
              isRequired
              mt={3}
            >
              <Input
                variant="solid"
                bg="#fff"
                _hover={{ bg: "#F9F9F9" }}
                placeholder="Type a message..."
                h={{ base: "40px", md: "50px" }}
                onChange={typingHandler}
                value={newMessage}
              />
            </FormControl>
          </Box>
          <Toast toast={toastShow} toastText={toastText} icon={toastIcon} />
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
