import React, { useState } from "react";
import styled from "styled-components";
import { Box } from "@chakra-ui/layout";
import {
  Button,
  Tooltip,
  Text,
  Menu,
  MenuButton,
  MenuList,
  Avatar,
  MenuItem,
  MenuDivider,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Input,
  useDisclosure,
  Spinner,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { AiFillBell } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { ChatState } from "../../Context/ChatProvider";
import ProfileModal from "./ProfileModal";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ChatLoading from "../ChatLoading";
import Toast from "../Toast";
import UserListItem from "../UserAvatar/UserListItem";

const RightDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BellIcon = styled(AiFillBell)`
  margin: 10px;
`;
const SideDrawer = () => {
  const [toastShow, setToastShow] = useState(false);
  const [toastText, setToastText] = useState("");
  const [toastIcon, setToastIcon] = useState("");
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, setSelectedChat, chats, setChats } = ChatState();

  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    setSelectedChat();
    navigate("/auth");
  };

  const searchHandler = async (e) => {
    e.preventDefault();
    if (!search) {
      setToastShow(true);
      setToastText("Search Field is Empty");
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
      const { data } = await axios.get(`/api/user?search=${search}`, config);
      setLoading(false);
      setSearchResults(data);
    } catch (error) {
      setToastShow(true);
      setToastText(error.response.data.message);
      setToastIcon("failed");

      setTimeout(() => {
        setToastShow(false);
        setToastText("");
        setToastIcon("");
      }, 1500);
      setLoading(false);
    }
  };

  const accessChats = async (userId) => {
    try {
      setLoadingChat(true);
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.post(`/api/chat`, { userId }, config);

      if (!chats.find((c) => c._id === data._id)) {
        setChats([data, ...chats]);
      }
      setSelectedChat(data);
      setLoadingChat(false);
      onClose();
    } catch (error) {
      setToastShow(true);
      setToastText("Error! Accessing Chats");
      setToastIcon("failed");

      setTimeout(() => {
        setToastShow(false);
        setToastText("");
        setToastIcon("");
      }, 1500);
      setLoadingChat(false);
    }
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="#EEF8FD"
        w="100%"
        p="5px 10px 5px 10px"
        borderBottomLeftRadius={10}
        borderBottomRightRadius={10}
      >
        <Tooltip label="Search Users for Chat" hasArrow placement="bottom-end">
          <Button
            variant="ghost"
            colorScheme="teal"
            size="sm"
            _hover={{ background: "#C1EAFF" }}
            bg="#EEF8FD"
            onClick={onOpen}
          >
            <FaSearch color="black" />
            <Text display={{ base: "none", md: "flex" }} px="4" color="black">
              Search
            </Text>
          </Button>
        </Tooltip>
        <Text
          fontSize="2xl"
          fontWeight="bold"
          color="black"
          ml={{ base: "80px", md: "unset" }}
        >
          LetsChat
        </Text>
        <RightDiv>
          <Menu>
            <MenuButton p={1}>
              <BellIcon color="black" size="20px" />
            </MenuButton>
            {/* <MenuList></MenuList> */}
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<FiChevronDown />}
              _hover={{ background: "#C1EAFF" }}
              bg="#EEF8FD"
              _active={{
                background: "#EEF8FD",
                _hover: { background: "#C1EAFF" },
              }}
            >
              <Avatar
                size="sm"
                cursor="pointer"
                name={user.firstname + " " + user.lastname}
                bg="teal.500"
                src={user.pic}
              />
            </MenuButton>
            <MenuList>
              <ProfileModal user={user}>
                <MenuItem>Profile</MenuItem>
              </ProfileModal>

              <MenuDivider />
              <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </RightDiv>
      </Box>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Search Users</DrawerHeader>
          <DrawerBody>
            <Box display="flex" pb={2}>
              <Input
                placeholder="Search By Name or Email"
                mr={2}
                fontSize="sm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button
                colorScheme="blue"
                onClick={searchHandler}
                isLoading={loading}
              >
                Go
              </Button>
            </Box>
            {loading ? (
              <ChatLoading />
            ) : searchResults.length === 0 ? (
              <Text textAlign="center" fontSize="sm">
                No Users Found
              </Text>
            ) : (
              searchResults.map((user) => (
                <UserListItem
                  key={user._id}
                  user={user}
                  handleFunction={() => accessChats(user._id)}
                ></UserListItem>
              ))
            )}
            {loadingChat && <Spinner ml="auto" display="flex" />}
          </DrawerBody>
          <Toast toast={toastShow} toastText={toastText} icon={toastIcon} />
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideDrawer;
