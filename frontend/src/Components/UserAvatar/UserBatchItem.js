import { Box } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import { IoCloseSharp } from "react-icons/io5";

const CrossIcon = styled(IoCloseSharp)`
  padding-left: 5px;
`;
const UserBatchItem = ({ user, handleFunction }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={2}
      py={1}
      borderRadius="lg"
      m={1}
      mb={2}
      variant="solid"
      fontSize={12}
      backgroundColor="#4FB2E5"
      color="black"
      cursor="pointer"
      _hover={{
        background: "#298bbd",
        color: "white",
      }}
      onClick={handleFunction}
    >
      {user.firstname + " " + user.lastname}
      <CrossIcon size="17px" />
    </Box>
  );
};

export default UserBatchItem;
