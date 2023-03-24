import React from "react";
import styled, { keyframes } from "styled-components";
import { AiFillCheckCircle, AiFillExclamationCircle } from "react-icons/ai";

const ToastButton = styled.div`
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  background-color: #8bd5f9;
  color: #000;
  text-align: center;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border-radius: 30px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  right: 50%;
  bottom: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FadeIn = keyframes`
    from {bottom: 0; opacity: 0;}
  to {bottom: 70px; opacity: 1;}
    `;
const FadeOut = keyframes`
    from {bottom: 70px; opacity: 1;}
    to {bottom: 0; opacity: 0;}
    `;
const CustomToast = styled(ToastButton)`
  visibility: visible;
  -webkit-animation: ${FadeIn} 0.5s, ${FadeOut} 0.5s 1s;
  animation: ${FadeIn} 0.5s, ${FadeOut} 0.5s 1s;
`;
const SuccessIcon = styled(AiFillCheckCircle)`
  position: relative;
  left: -8px;
`;
const ErrorIcon = styled(AiFillExclamationCircle)`
  position: relative;
  left: -8px;
`;
const Toast = ({ toast, toastText, icon }) => {
  return toast ? (
    <CustomToast>
      {icon === "success" ? (
        <SuccessIcon color="green" size="20px" />
      ) : (
        <ErrorIcon color="goldenrod" size="20px" />
      )}
      <p>{toastText}</p>
    </CustomToast>
  ) : (
    <ToastButton>
      {icon === "success" ? (
        <SuccessIcon color="green" size="20px" />
      ) : (
        <ErrorIcon color="goldenrod" size="20px" />
      )}
      <p>{toastText}</p>
    </ToastButton>
  );
};

export default Toast;
