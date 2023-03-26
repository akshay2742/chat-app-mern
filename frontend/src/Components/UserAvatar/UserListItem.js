import { Avatar, Box, Text } from "@chakra-ui/react";
import React from "react";

const UserListItem = ({ user, handleFunction }) => {
  return (
    <Box
      onClick={handleFunction}
      cursor="pointer"
      bg="#E8E8E8"
      _hover={{
        background: "#3fa1ca",
        color: "white",
      }}
      w="100%"
      display="flex"
      alignItems="center"
      color="black"
      px={3}
      py={2}
      mb={2}
      borderRadius="lg"
    >
      <Avatar
        mr={2}
        size="sm"
        cursor="pointer"
        name={user.firstname + " " + user.lastname}
        bg="#4FB2E5"
        src={user.pic}
      />
      <Box>
        <Text>{user.firstname + " " + user.lastname}</Text>
        <Text fontSize="12px">{user.email}</Text>
      </Box>
    </Box>
  );
};

export default UserListItem;
