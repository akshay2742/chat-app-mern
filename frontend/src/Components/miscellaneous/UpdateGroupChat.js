import {
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { ChatState } from "../../Context/ChatProvider";
import Toast from "../Toast";
import UserBatchItem from "../UserAvatar/UserBatchItem";
import UserListItem from "../UserAvatar/UserListItem";
import styled from "styled-components";

const Span = styled.span`
  display: flex;
`;
const UpdateGroupChat = ({
  fetchAgain,
  setFetchAgain,
  children,
  fetchMessages,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [groupChatName, setGroupChatName] = useState("");
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [renameLoading, setRenameLoading] = useState(false);
  const { selectedChat, setSelectedChat, user } = ChatState();
  const [toastShow, setToastShow] = useState(false);
  const [toastText, setToastText] = useState("");
  const [toastIcon, setToastIcon] = useState("");

  const handleRename = async () => {
    if (!groupChatName) {
      setToastShow(true);
      setToastText("Please enter a name");
      setToastIcon("failed");
      setTimeout(() => {
        setToastShow(false);
        setToastText("");
        setToastIcon("");
      }, 1500);
      return;
    }

    try {
      setRenameLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.put(
        "/api/chat/rename",
        { chatId: selectedChat._id, chatName: groupChatName },
        config
      );
      setToastShow(true);
      setToastText("Group Renamed!");
      setToastIcon("success");
      setTimeout(() => {
        setToastShow(false);
        setToastText("");
        setToastIcon("");
      }, 1500);
      setSelectedChat(data);
      setFetchAgain(!fetchAgain);
      setRenameLoading(false);
    } catch (error) {
      setToastShow(true);
      setToastText("Failed renaming group");
      setToastIcon("failed");
      setTimeout(() => {
        setToastShow(false);
        setToastText("");
        setToastIcon("");
      }, 1500);
      setRenameLoading(false);
    }
    setGroupChatName("");
  };
  const handleSearch = async (query) => {
    setSearch(query);
    if (!query) {
      setSearchResults([]);
      return;
    }
    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.get(`/api/user?search=${query}`, config);
      setLoading(false);
      setSearchResults(data);
    } catch (error) {
      setToastShow(true);
      setToastText("Failed Loading Users");
      setToastIcon("failed");

      setTimeout(() => {
        setToastShow(false);
        setToastText("");
        setToastIcon("");
      }, 1500);
      setLoading(false);
    }
  };
  const handleRemove = async (user1) => {
    if (selectedChat.groupAdmin._id !== user._id && user1._id !== user._id) {
      setToastShow(true);
      setToastText("Admin Only Remove!");
      setToastIcon("failed");
      setTimeout(() => {
        setToastShow(false);
        setToastText("");
        setToastIcon("");
      }, 1500);
      return;
    }
    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.put(
        "/api/chat/groupremove",
        { chatId: selectedChat._id, userId: user1._id },
        config
      );
      setToastShow(true);
      setToastText("User Removed!");
      setToastIcon("success");
      setTimeout(() => {
        setToastShow(false);
        setToastText("");
        setToastIcon("");
      }, 1500);
      user1._id === user._id ? setSelectedChat() : setSelectedChat(data);
      setFetchAgain(!fetchAgain);
      fetchMessages();
      setLoading(false);
    } catch (error) {
      setToastShow(true);
      setToastText("Failed Removing User");
      setToastIcon("failed");
      setTimeout(() => {
        setToastShow(false);
        setToastText("");
        setToastIcon("");
      }, 1500);
      setLoading(false);
    }
  };

  const handleAddUser = async (user1) => {
    if (selectedChat.groupAdmin._id !== user._id) {
      setToastShow(true);
      setToastText("Admin can add users");
      setToastIcon("failed");
      setTimeout(() => {
        setToastShow(false);
        setToastText("");
        setToastIcon("");
      }, 1500);
      return;
    }
    if (selectedChat.users.find((u) => u._id === user1._id)) {
      setToastShow(true);
      setToastText("User already in group");
      setToastIcon("failed");
      setTimeout(() => {
        setToastShow(false);
        setToastText("");
        setToastIcon("");
      }, 1500);
      return;
    }

    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.put(
        "/api/chat/groupadd",
        { chatId: selectedChat._id, userId: user1._id },
        config
      );
      setToastShow(true);
      setToastText("User Added!");
      setToastIcon("success");
      setTimeout(() => {
        setToastShow(false);
        setToastText("");
        setToastIcon("");
      }, 1500);
      setSelectedChat(data);
      setFetchAgain(!fetchAgain);
      setLoading(false);
    } catch (error) {
      setToastShow(true);
      setToastText("Failed Adding User");
      setToastIcon("failed");
      setTimeout(() => {
        setToastShow(false);
        setToastText("");
        setToastIcon("");
      }, 1500);
      setLoading(false);
    }
  };

  return (
    <>
      {children ? (
        <Span onClick={onOpen}>{children}</Span>
      ) : (
        <IconButton
          bg="#b3d1f8"
          _hover={{ bg: "#7eaff0" }}
          display={{ base: "flex" }}
          onClick={onOpen}
          icon={<AiFillEye />}
        />
      )}

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            fontSize={{ base: "28px", md: "30px" }}
            display="flex"
            justifyContent="center"
          >
            {selectedChat.chatName}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box display="flex" w="100%" flexWrap="wrap" mb={3}>
              {selectedChat.users.map((u) =>
                selectedChat.groupAdmin._id === u._id ? (
                  <UserBatchItem
                    key={u._id}
                    user={u}
                    color="#ed7cab"
                    hover="#e44f8d"
                    handleFunction={() => handleRemove(u)}
                  />
                ) : (
                  <UserBatchItem
                    key={u._id}
                    user={u}
                    handleFunction={() => handleRemove(u)}
                  />
                )
              )}
            </Box>
            <FormControl display="flex">
              <Input
                placeholder="Chat Name"
                mb={3}
                value={groupChatName}
                onChange={(e) => setGroupChatName(e.target.value)}
              />
              <Button
                variant="solid"
                colorScheme="blue"
                ml={1}
                isLoading={renameLoading}
                onClick={handleRename}
              >
                Rename
              </Button>
            </FormControl>
            <FormControl display="flex">
              <Input
                placeholder="Add Users to Group"
                mb={1}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </FormControl>
            {loading ? (
              <Spinner />
            ) : (
              searchResults
                ?.slice(0, 4)
                .map((user) => (
                  <UserListItem
                    key={user._id}
                    user={user}
                    handleFunction={() => handleAddUser(user)}
                  />
                ))
            )}
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => handleRemove(user)}
            >
              Leave Group
            </Button>
          </ModalFooter>
        </ModalContent>
        <Toast toast={toastShow} toastText={toastText} icon={toastIcon} />
      </Modal>
    </>
  );
};

export default UpdateGroupChat;
