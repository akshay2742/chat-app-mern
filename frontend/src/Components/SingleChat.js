import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { ChatState } from "../Context/ChatProvider";
import Icon from "../Images/Chatpage.svg";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { getSender, getSenderFull } from "../config/ChatLogics";
import ProfileModal from "./miscellaneous/ProfileModal";
import UpdateGroupChat from "./miscellaneous/UpdateGroupChat";

const SingleChat = ({ fetchAgain, setFetchAgain }) => {
  const { user, selectedChat, setSelectedChat } = ChatState();
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
          ></Box>
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
