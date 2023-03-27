import { Box } from "@chakra-ui/react";
import React from "react";
import { ChatState } from "../Context/ChatProvider";
import SingleChat from "./SingleChat";
import styled from "styled-components";

const MainBox = styled(Box)`
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='800' height='500' preserveAspectRatio='none' viewBox='0 0 800 500'%3e%3cg mask='url(%26quot%3b%23SvgjsMask2494%26quot%3b)' fill='none'%3e%3crect width='800' height='500' x='0' y='0' fill='rgba(238%2c 248%2c 253%2c 1)'%3e%3c/rect%3e%3crect width='180' height='180' clip-path='url(%26quot%3b%23SvgjsClipPath2495%26quot%3b)' x='-37.45' y='280.97' fill='url(%23SvgjsPattern2496)' transform='rotate(157.08%2c 52.55%2c 370.97)'%3e%3c/rect%3e%3crect width='135.36' height='135.36' clip-path='url(%26quot%3b%23SvgjsClipPath2497%26quot%3b)' x='88.56' y='-2.72' fill='url(%23SvgjsPattern2498)' transform='rotate(107.22%2c 156.24%2c 64.96)'%3e%3c/rect%3e%3cpath d='M552.86 504.91 L571.05 592.99L621.3230928105045 489.5819071894955z' stroke='rgba(149%2c 211%2c 244%2c 1)' stroke-width='1' stroke-dasharray='3%2c 3'%3e%3c/path%3e%3crect width='111' height='111' clip-path='url(%26quot%3b%23SvgjsClipPath2499%26quot%3b)' x='95.7' y='-35.24' fill='url(%23SvgjsPattern2500)' transform='rotate(347.05%2c 151.2%2c 20.26)'%3e%3c/rect%3e%3cpath d='M260.75 496.34a5.6 5.6 0 1 0-11.04-1.89 5.6 5.6 0 1 0 11.04 1.89zM244.98 493.64a5.6 5.6 0 1 0-11.04-1.9 5.6 5.6 0 1 0 11.04 1.9zM229.21 490.93a5.6 5.6 0 1 0-11.04-1.89 5.6 5.6 0 1 0 11.04 1.89zM213.44 488.23a5.6 5.6 0 1 0-11.04-1.9 5.6 5.6 0 1 0 11.04 1.9z' fill='rgba(178%2c 227%2c 253%2c 1)'%3e%3c/path%3e%3ccircle r='60.062118305442944' cx='675.34' cy='330.5' stroke='rgba(149%2c 211%2c 244%2c 1)' stroke-width='2.95' stroke-dasharray='2%2c 2'%3e%3c/circle%3e%3crect width='60' height='60' clip-path='url(%26quot%3b%23SvgjsClipPath2501%26quot%3b)' x='247.3' y='297.21' fill='url(%23SvgjsPattern2502)' transform='rotate(197.12%2c 277.3%2c 327.21)'%3e%3c/rect%3e%3cpath d='M48.22 263.7L50.76 251.15 63.56 250.87 66.1 238.32 78.91 238.04 81.44 225.48 94.25 225.2M53.36 269.84L55.89 257.28 68.7 257 71.23 244.45 84.04 244.17 86.58 231.62 99.38 231.34M58.49 275.97L61.03 263.42 73.83 263.14 76.37 250.59 89.17 250.31 91.71 237.76 104.51 237.48' stroke='rgba(149%2c 211%2c 244%2c 1)' stroke-width='2.94' stroke-dasharray='2%2c 2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask2494'%3e%3crect width='800' height='500' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern2496'%3e%3cpath d='M3 1L3 5M1 3L5 3' stroke='rgba(178%2c 227%2c 253%2c 1)' fill='none' stroke-width='1'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath2495'%3e%3ccircle r='45' cx='52.55' cy='370.97'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='135.36' height='8.46' patternUnits='userSpaceOnUse' id='SvgjsPattern2498'%3e%3crect width='135.36' height='4.23' x='0' y='0' fill='rgba(178%2c 227%2c 253%2c 1)'%3e%3c/rect%3e%3crect width='135.36' height='4.23' x='0' y='4.23' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath2497'%3e%3ccircle r='33.84' cx='156.24' cy='64.96'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='111' height='11.1' patternUnits='userSpaceOnUse' id='SvgjsPattern2500'%3e%3crect width='111' height='5.55' x='0' y='0' fill='rgba(178%2c 227%2c 253%2c 1)'%3e%3c/rect%3e%3crect width='111' height='5.55' x='0' y='5.55' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath2499'%3e%3ccircle r='27.75' cx='151.2' cy='20.26'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='60' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern2502'%3e%3crect width='60' height='3' x='0' y='0' fill='rgba(149%2c 211%2c 244%2c 1)'%3e%3c/rect%3e%3crect width='60' height='3' x='0' y='3' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath2501'%3e%3ccircle r='15' cx='277.3' cy='327.21'%3e%3c/circle%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  background-position: center;
  background-size: cover;
`;
const ChatBox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();
  return (
    <MainBox
      display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDirection="column"
      p={3}
      w={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </MainBox>
  );
};

export default ChatBox;
