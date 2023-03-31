import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { red } from "../../Colors/colors";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaGooglePlus, FaGithub } from "react-icons/fa";
import Toast from "../Toast";
import { ReactComponent as Loader } from "../../Images/buttonLoader.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  scroll-behavior: smooth;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 768px) {
    justify-content: unset;
  }
`;
const InputWithText = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 10px;
  font-size: 20px;
  font-weight: 700;
  &:focus {
    outline: none;
  }
`;
const InputBox = styled.div`
  width: 100%;
  height: 6%;
  margin: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ButtonBox = styled.div`
  width: 100%;
  height: 50px;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Ques = styled.div`
  width: 80%;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SubmitButton = styled.button`
  width: 25%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  line-height: 28pt;
  padding: 0 20px;
  background: #8db9dbb6;
  letter-spacing: 2px;
  transition: 0.2s all ease-in-out;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 1);
  box-shadow: 3px 3px 1px 1px #3183cf, 3px 3px 1px 2px rgba(0, 0, 0, 1);
  &:hover {
    background: rgba(0, 0, 0, 1);
    color: white;
    border: 1px solid rgba(0, 0, 0, 1);
  }
  &:disabled {
    background: #ccc;
    box-shadow: 3px 3px 1px 1px #000, 3px 3px 1px 2px rgba(0, 0, 0, 1);
    color: #fff;
    border: 1px solid #ccc;
    cursor: not-allowed;
  }
`;
const Right = styled.div`
  position: relative;
  right: 11px;
`;

const Show = styled.div`
  width: 80%;
  height: 20px;
  display: flex;
  justify-content: right;
  align-items: center;
`;
const CenterDiv = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.p`
  position: relative;
  left: 10px;
`;
const InputTextContainer = styled.div`
  width: 80%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SpanText = styled.span`
  width: 98%;
  color: red;
  font-size: 12px;
  display: flex;
  justify-content: left;
  align-items: center;
`;

const Anchor = styled.a`
  text-decoration: none;
  font-weight: 700;
  color: blue;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;
const HorizontalLine = styled.hr`
  width: 80%;
  height: 1px;
  margin: 12px;
  background-color: #ccc;
  border: none;
  @media (max-width: 768px) {
    border: 1px solid #ccc;
  }
`;
const GoogleButton = styled.button`
  width: 16rem;
  height: 50px;
  margin: 10px;
  padding: 10px;
  border-radius: 25px;
  border: 1px solid #ccc;
  font-size: 20px;
  font-weight: 700;
  background-color: ${red};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #C02534;
`;
const GithubButton = styled.button`
  width: 16rem;
  height: 50px;
  border-radius: 25px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  font-size: 20px;
  font-weight: 700;
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #000;
`;
const GoogleIcon = styled(FaGooglePlus)`
  position: relative;
  left: -10px;
`;
const GithubIcon = styled(FaGithub)`
  position: relative;
  left: -10px;
`;
const Spin = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const LoadIcon = styled(Loader)`
  animation-name: ${Spin};
  animation-duration: 500ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const Login = ({ handleSignup }) => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus(); //focus on first input field
  }, []);
  const [show, setShow] = useState(false);
  const [toastShow, setToastShow] = useState(false);
  const [toastText, setToastText] = useState("");
  const [toastIcon, setToastIcon] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const history = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };

  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "email":
          if (!value) {
            stateObj[name] = "Please enter email.";
          } else if (
            value &&
            !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
          ) {
            stateObj[name] = "Please enter valid email.";
          }
          break;

        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };

  const handleClick = () => {
    setShow(!show);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setShowLoader(true);
    const { email, password } = input;

    if (!email || !password) {
      setToastShow(true);
      setToastText("Please Fill All The Fields.");
      setToastIcon("failed");

      setTimeout(() => {
        setToastShow(false);
        setToastText("");
        setToastIcon("");
      }, 1500);
      setShowLoader(false);
    } else if (email && password) {
      if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
        setToastShow(true);
        setToastText("Invalid Email Address.");
        setToastIcon("failed");

        setTimeout(() => {
          setToastShow(false);
          setToastText("");
          setToastIcon("");
        }, 1500);
        setShowLoader(false);
      } else {
        try {
          const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };

          const { data } = await axios.post(
            "/api/user/login",
            {
              email,
              password,
            },
            config
          );
          localStorage.setItem("userInfo", JSON.stringify(data));

          setToastShow(true);
          setToastText("Login Successfull.");
          setToastIcon("success");

          setTimeout(() => {
            setToastShow(false);
            setToastText("");
            setToastIcon("");
          }, 1500);
          setTimeout(() => {
            history("/chats");
          }, 1500);

          setInput({
            email: "",
            password: "",
          });
          setShowLoader(false);
        } catch (error) {
          setToastShow(true);
          setToastText(error.response.data.message || "Login Failed.");
          setToastIcon("failed");

          setTimeout(() => {
            setToastShow(false);
            setToastText("");
            setToastIcon("");
          }, 1500);
          setShowLoader(false);
        }
      }
    } else {
      setToastShow(true);
      setToastText("Login Failed.");
      setToastIcon("failed");

      setTimeout(() => {
        setToastShow(false);
        setToastText("");
        setToastIcon("");
      }, 1500);
    }
    setShowLoader(true);
    setTimeout(() => setShowLoader(false), 1000);
  };

  return (
    <>
      <LoginForm>
        <InputBox>
          <Right>
            <MdAlternateEmail color="black" size="20px" />
          </Right>
          <InputTextContainer>
            <InputWithText
              onChange={onInputChange}
              value={input.email}
              name="email"
              type="text"
              onBlur={validateInput}
              placeholder="Email"
              ref={inputRef}
              pattern="^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$"
              required
            />

            {error.email && <SpanText>{error.email}</SpanText>}
          </InputTextContainer>
        </InputBox>
        <InputBox>
          <Right>
            <RiLockPasswordLine color="black" size="20px" />
          </Right>
          <InputTextContainer>
            <InputWithText
              onChange={onInputChange}
              value={input.password}
              type={show ? "text" : "password"}
              name="password"
              placeholder="Password"
              autoComplete="off"
              onBlur={validateInput}
              required
            />
            {error.password && <SpanText>{error.password}</SpanText>}
          </InputTextContainer>
        </InputBox>
        <CenterDiv>
          <Show>
            <input type="checkbox" checked={show} onChange={handleClick} />
            <Text>Show Password</Text>
          </Show>
        </CenterDiv>
        <br />
        <CenterDiv>
          <Ques>
            <Text>
              Don't have a account?
              <Anchor onClick={() => handleSignup()}>Signup</Anchor>
            </Text>
          </Ques>
        </CenterDiv>
        <ButtonBox>
          <SubmitButton
            type="submit"
            onClick={handleLogin}
            disabled={showLoader}
          >
            {!showLoader ? "Login" : <LoadIcon />}
          </SubmitButton>
        </ButtonBox>
        <HorizontalLine />
        <GoogleButton>
          <GoogleIcon />
          Sign in with Google
        </GoogleButton>
        <GithubButton>
          <GithubIcon />
          Sign in with Github
        </GithubButton>
      </LoginForm>
      <Toast toast={toastShow} toastText={toastText} icon={toastIcon} />
    </>
  );
};

export default Login;
