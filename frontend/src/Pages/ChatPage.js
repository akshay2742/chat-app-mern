import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import styled from "styled-components";
import ChatBox from "../Components/ChatBox";
import SideDrawer from "../Components/miscellaneous/SideDrawer";
import MyChats from "../Components/MyChats";
import { ChatState } from "../Context/ChatProvider";

const MainBox = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='250' preserveAspectRatio='none' viewBox='0 0 1440 250'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1000%26quot%3b)' fill='none'%3e%3crect width='1440' height='250' x='0' y='0' fill='rgba(49%2c 131%2c 207%2c 1)'%3e%3c/rect%3e%3cpath d='M44 250L294 0L367.5 0L117.5 250z' fill='url(%23SvgjsLinearGradient1001)'%3e%3c/path%3e%3cpath d='M263.6 250L513.6 0L678.6 0L428.6 250z' fill='url(%23SvgjsLinearGradient1001)'%3e%3c/path%3e%3cpath d='M491.20000000000005 250L741.2 0L1090.7 0L840.7 250z' fill='url(%23SvgjsLinearGradient1001)'%3e%3c/path%3e%3cpath d='M716.8000000000001 250L966.8000000000001 0L1146.8000000000002 0L896.8000000000001 250z' fill='url(%23SvgjsLinearGradient1001)'%3e%3c/path%3e%3cpath d='M1414 250L1164 0L1000.5 0L1250.5 250z' fill='url(%23SvgjsLinearGradient1002)'%3e%3c/path%3e%3cpath d='M1200.4 250L950.4000000000001 0L626.4000000000001 0L876.4000000000001 250z' fill='url(%23SvgjsLinearGradient1002)'%3e%3c/path%3e%3cpath d='M947.8 250L697.8 0L478.79999999999995 0L728.8 250z' fill='url(%23SvgjsLinearGradient1002)'%3e%3c/path%3e%3cpath d='M704.1999999999999 250L454.19999999999993 0L292.19999999999993 0L542.1999999999999 250z' fill='url(%23SvgjsLinearGradient1002)'%3e%3c/path%3e%3cpath d='M1217.1458056655697 250L1440 27.14580566556978L1440 250z' fill='url(%23SvgjsLinearGradient1001)'%3e%3c/path%3e%3cpath d='M0 250L222.85419433443022 250L 0 27.14580566556978z' fill='url(%23SvgjsLinearGradient1002)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1000'%3e%3crect width='1440' height='250' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='0%25' y1='100%25' x2='100%25' y2='0%25' id='SvgjsLinearGradient1001'%3e%3cstop stop-color='rgba(8%2c 62%2c 133%2c 0.52)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(8%2c 62%2c 133%2c 0.52)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='100%25' y1='100%25' x2='0%25' y2='0%25' id='SvgjsLinearGradient1002'%3e%3cstop stop-color='rgba(8%2c 62%2c 133%2c 0.52)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(8%2c 62%2c 133%2c 0.52)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
  background-position: center;
  background-size: cover;
  overflow: hidden;
`;

const ChatPage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();
  return (
    <MainBox>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="93%"
        p="10px"
      >
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </MainBox>
  );
};

export default ChatPage;
