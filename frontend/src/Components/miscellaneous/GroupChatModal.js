import {
  Button,
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { ChatState } from "../../Context/ChatProvider";
import Toast from "../Toast";

const GroupChatModal = ({ children }) => {
  const [toastShow, setToastShow] = useState(false);
  const [toastText, setToastText] = useState("");
  const [toastIcon, setToastIcon] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [groupChatName, setGroupChatName] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const { user, chats, setChats } = ChatState();
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
      const { data } = await axios.get(`/api/user?search=${search}`, config);
      setLoading(false);
      console.log(data);
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
  const handleSubmit = async (e) => {};

  return (
    <>
      <span onClick={onOpen}>{children}</span>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader display="flex" fontSize="38px" justifyContent="center">
            Create Group Chat{" "}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" flexDir="column" alignItems="center">
            <FormControl>
              <Input
                placeholder="Group Chat Name"
                mb={3}
                onChange={(e) => setGroupChatName(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <Input
                placeholder="Add Users eg: Akshay, Yash, Vaniya"
                mb={1}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={handleSubmit}>
              Create Chat
            </Button>
          </ModalFooter>
        </ModalContent>
        <Toast toast={toastShow} toastText={toastText} icon={toastIcon} />
      </Modal>
    </>
  );
};

export default GroupChatModal;
