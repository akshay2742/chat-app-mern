import { Avatar, Box, Button, Divider, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ChatState } from "../Context/ChatProvider";
import Toast from "./Toast";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import ChatLoading from "./ChatLoading";
import { getSender } from "../config/ChatLogics";
import styled from "styled-components";
import GroupChatModal from "./miscellaneous/GroupChatModal";

const MyBox = styled(Box)`
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='400' height='800' preserveAspectRatio='none' viewBox='0 0 400 800'%3e%3cg mask='url(%26quot%3b%23SvgjsMask2153%26quot%3b)' fill='none'%3e%3crect width='400' height='800' x='0' y='0' fill='rgba(238%2c 248%2c 253%2c 1)'%3e%3c/rect%3e%3cpath d='M302.95 137.54000000000002 L381.34000000000003 133.26L387.3945333733909 180.64953337339094z' stroke='rgba(178%2c 227%2c 253%2c 1)' stroke-width='1' stroke-dasharray='3%2c 2'%3e%3c/path%3e%3crect width='168' height='168' clip-path='url(%26quot%3b%23SvgjsClipPath2154%26quot%3b)' x='-2.95' y='423.37' fill='url(%23SvgjsPattern2155)' transform='rotate(250.08%2c 81.05%2c 507.37)'%3e%3c/rect%3e%3cpath d='M325.47 283.3 L288.27 391.85L247.08229578497549 277.7872957849755z' stroke='rgba(178%2c 227%2c 253%2c 1)' stroke-width='1' stroke-dasharray='3%2c 2'%3e%3c/path%3e%3crect width='60' height='60' clip-path='url(%26quot%3b%23SvgjsClipPath2156%26quot%3b)' x='155.19' y='624.26' fill='url(%23SvgjsPattern2157)' transform='rotate(358.67%2c 185.19%2c 654.26)'%3e%3c/rect%3e%3crect width='228' height='228' clip-path='url(%26quot%3b%23SvgjsClipPath2158%26quot%3b)' x='25.09' y='364.05' fill='url(%23SvgjsPattern2159)' transform='rotate(123.94%2c 139.09%2c 478.05)'%3e%3c/rect%3e%3cpath d='M341.76 457.1a5.6 5.6 0 1 0 2.44-10.93 5.6 5.6 0 1 0-2.44 10.93zM345.25 441.49a5.6 5.6 0 1 0 2.44-10.93 5.6 5.6 0 1 0-2.44 10.93zM348.74 425.87a5.6 5.6 0 1 0 2.44-10.93 5.6 5.6 0 1 0-2.44 10.93zM352.23 410.26a5.6 5.6 0 1 0 2.44-10.93 5.6 5.6 0 1 0-2.44 10.93zM350.39 491.82a5.6 5.6 0 1 0 2.45-10.93 5.6 5.6 0 1 0-2.45 10.93zM353.88 476.21a5.6 5.6 0 1 0 2.45-10.93 5.6 5.6 0 1 0-2.45 10.93zM357.37 460.59a5.6 5.6 0 1 0 2.45-10.93 5.6 5.6 0 1 0-2.45 10.93zM360.86 444.98a5.6 5.6 0 1 0 2.45-10.93 5.6 5.6 0 1 0-2.45 10.93zM359.03 526.54a5.6 5.6 0 1 0 2.44-10.93 5.6 5.6 0 1 0-2.44 10.93zM362.52 510.93a5.6 5.6 0 1 0 2.44-10.93 5.6 5.6 0 1 0-2.44 10.93zM366.01 495.31a5.6 5.6 0 1 0 2.44-10.93 5.6 5.6 0 1 0-2.44 10.93zM369.5 479.7a5.6 5.6 0 1 0 2.44-10.93 5.6 5.6 0 1 0-2.44 10.93z' stroke='rgba(178%2c 227%2c 253%2c 1)' stroke-width='2.6' stroke-dasharray='3%2c 2'%3e%3c/path%3e%3cpath d='M14.69 325.64L14.21 312.85 26.59 309.57 26.11 296.77 38.49 293.49 38.01 280.7 50.39 277.42M21.12 330.4L20.64 317.61 33.02 314.33 32.54 301.53 44.92 298.25 44.44 285.46 56.82 282.18M27.55 335.16L27.07 322.36 39.45 319.09 38.97 306.29 51.35 303.01 50.87 290.21 63.25 286.94' stroke='rgba(149%2c 211%2c 244%2c 1)' stroke-width='1.45' stroke-dasharray='3%2c 2'%3e%3c/path%3e%3crect width='72' height='72' clip-path='url(%26quot%3b%23SvgjsClipPath2160%26quot%3b)' x='10.22' y='78.22' fill='url(%23SvgjsPattern2161)' transform='rotate(350.92%2c 46.22%2c 114.22)'%3e%3c/rect%3e%3crect width='60' height='60' clip-path='url(%26quot%3b%23SvgjsClipPath2162%26quot%3b)' x='278.86' y='57.51' fill='url(%23SvgjsPattern2163)' transform='rotate(102.24%2c 308.86%2c 87.51)'%3e%3c/rect%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask2153'%3e%3crect width='400' height='800' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern2155'%3e%3cpath d='M3 1L3 5M1 3L5 3' stroke='rgba(178%2c 227%2c 253%2c 1)' fill='none' stroke-width='1.22'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath2154'%3e%3ccircle r='42' cx='81.05' cy='507.37'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='60' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern2157'%3e%3crect width='60' height='3' x='0' y='0' fill='rgba(178%2c 227%2c 253%2c 1)'%3e%3c/rect%3e%3crect width='60' height='3' x='0' y='3' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath2156'%3e%3ccircle r='15' cx='185.19' cy='654.26'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern2159'%3e%3cpath d='M0 6L3 0L6 6' stroke='rgba(178%2c 227%2c 253%2c 1)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath2158'%3e%3ccircle r='57' cx='139.09' cy='478.05'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern2161'%3e%3cpath d='M0 6L3 0L6 6' stroke='rgba(178%2c 227%2c 253%2c 1)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath2160'%3e%3ccircle r='18' cx='46.22' cy='114.22'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern2163'%3e%3cpath d='M0 6L3 0L6 6' stroke='rgba(178%2c 227%2c 253%2c 1)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath2162'%3e%3ccircle r='15' cx='308.86' cy='87.51'%3e%3c/circle%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  background-position: center;
  background-size: cover;
`;
const StackBox = styled(Stack)`
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const MyChats = ({ fetchAgain }) => {
  const [toastShow, setToastShow] = useState(false);
  const [toastText, setToastText] = useState("");
  const [toastIcon, setToastIcon] = useState("");
  const [chatLoader, setChatLoader] = useState(true);
  const [loggedUser, setLoggedUser] = useState();
  const { selectedChat, setSelectedChat, chats, setChats, user } = ChatState();

  const fetchChats = async () => {
    setChatLoader(true);
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.get("/api/chat", config);

      setChats(data);
      setChatLoader(false);
    } catch (error) {
      setToastShow(true);
      setToastText("Failed to fetch chats");
      setToastIcon("failed");
      setTimeout(() => {
        setToastShow(false);
        setToastText("");
        setToastIcon("");
      }, 1500);
    }
  };

  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
    fetchChats();
  }, [fetchAgain]);
  return (
    <>
      <MyBox
        display={{ base: selectedChat ? "none" : "flex", md: "flex" }}
        flexDirection="column"
        width={{ base: "100%", md: "30%" }}
        height="100%"
        p={3}
        alignItems="center"
        borderRadius="lg"
        boxShadow="lg"
        borderWidth="1px"
      >
        <Box
          pb={3}
          px={3}
          display="flex"
          w="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text fontSize={{ base: "20px", md: "17px", lg: "20px" }}>
            My Chats
          </Text>
          <GroupChatModal>
            <Button
              display="flex"
              fontSize={{ base: "17px", md: "8px", lg: "17px" }}
              rightIcon={<AiOutlineUsergroupAdd />}
              bg="#CAEDFF"
              _hover={{ background: "#B2E3FD" }}
            >
              New Group Chat
            </Button>
          </GroupChatModal>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          p={3}
          w="100%"
          overflowY="hidden"
          bg="transparent"
          borderRadius="lg"
        >
          {!chatLoader ? (
            <StackBox>
              {chats.map((chat) => (
                <Box key={chat._id}>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    p={3}
                    bg={selectedChat === chat ? "#B2E3FD" : "gray.200"}
                    borderRadius="lg"
                    color={selectedChat === chat ? "white" : "black"}
                    borderWidth="1px"
                    cursor="pointer"
                    onClick={() => setSelectedChat(chat)}
                    mb={3}
                  >
                    {!chat.isGroupChat ? (
                      <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Avatar
                          size="sm"
                          cursor="pointer"
                          name={getSender(loggedUser, chat.users)}
                          bg="#4FB2E5"
                          src={
                            chat.users[0]._id === loggedUser._id
                              ? chat.users[1].pic
                              : chat.users[0].pic
                          }
                        />
                        <Text fontSize="lg" fontWeight="bold" pl={3}>
                          {getSender(loggedUser, chat.users)}
                        </Text>
                      </Box>
                    ) : (
                      <>
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Avatar
                            size="sm"
                            cursor="pointer"
                            name={chat.chatName}
                            bg="#4FB2E5"
                          />
                          <Text fontSize="lg" fontWeight="bold" pl={3}>
                            {chat.chatName}
                          </Text>
                        </Box>
                        <Text fontSize="sm" fontWeight="bold">
                          {chat.users.length}
                        </Text>
                      </>
                    )}
                  </Box>
                  <Divider mb={1} colorScheme="" />
                </Box>
              ))}
            </StackBox>
          ) : (
            <ChatLoading />
          )}
        </Box>
      </MyBox>
      <Toast toast={toastShow} toastText={toastText} icon={toastIcon} />
    </>
  );
};

export default MyChats;
