import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SvgIcon from "../Components/Authentication/SvgIcon";
import Signup from "../Components/Authentication/Signup";
import Login from "../Components/Authentication/Login";
import { useNavigate } from "react-router-dom";

const MainBox = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='250' preserveAspectRatio='none' viewBox='0 0 1440 250'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1000%26quot%3b)' fill='none'%3e%3crect width='1440' height='250' x='0' y='0' fill='rgba(49%2c 131%2c 207%2c 1)'%3e%3c/rect%3e%3cpath d='M44 250L294 0L367.5 0L117.5 250z' fill='url(%23SvgjsLinearGradient1001)'%3e%3c/path%3e%3cpath d='M263.6 250L513.6 0L678.6 0L428.6 250z' fill='url(%23SvgjsLinearGradient1001)'%3e%3c/path%3e%3cpath d='M491.20000000000005 250L741.2 0L1090.7 0L840.7 250z' fill='url(%23SvgjsLinearGradient1001)'%3e%3c/path%3e%3cpath d='M716.8000000000001 250L966.8000000000001 0L1146.8000000000002 0L896.8000000000001 250z' fill='url(%23SvgjsLinearGradient1001)'%3e%3c/path%3e%3cpath d='M1414 250L1164 0L1000.5 0L1250.5 250z' fill='url(%23SvgjsLinearGradient1002)'%3e%3c/path%3e%3cpath d='M1200.4 250L950.4000000000001 0L626.4000000000001 0L876.4000000000001 250z' fill='url(%23SvgjsLinearGradient1002)'%3e%3c/path%3e%3cpath d='M947.8 250L697.8 0L478.79999999999995 0L728.8 250z' fill='url(%23SvgjsLinearGradient1002)'%3e%3c/path%3e%3cpath d='M704.1999999999999 250L454.19999999999993 0L292.19999999999993 0L542.1999999999999 250z' fill='url(%23SvgjsLinearGradient1002)'%3e%3c/path%3e%3cpath d='M1217.1458056655697 250L1440 27.14580566556978L1440 250z' fill='url(%23SvgjsLinearGradient1001)'%3e%3c/path%3e%3cpath d='M0 250L222.85419433443022 250L 0 27.14580566556978z' fill='url(%23SvgjsLinearGradient1002)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1000'%3e%3crect width='1440' height='250' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='0%25' y1='100%25' x2='100%25' y2='0%25' id='SvgjsLinearGradient1001'%3e%3cstop stop-color='rgba(8%2c 62%2c 133%2c 0.52)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(8%2c 62%2c 133%2c 0.52)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='100%25' y1='100%25' x2='0%25' y2='0%25' id='SvgjsLinearGradient1002'%3e%3cstop stop-color='rgba(8%2c 62%2c 133%2c 0.52)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(8%2c 62%2c 133%2c 0.52)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
  background-position: center;
  background-size: cover;
  position: relative;
`;
const InnerBox = styled.div`
  width: 92%;
  height: 92%;
  display: flex;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1043%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(238%2c 248%2c 253%2c 1)'%3e%3c/rect%3e%3cpath d='M340.08 143.87 a105.97 105.97 0 1 0 211.94 0 a105.97 105.97 0 1 0 -211.94 0z' fill='rgba(141%2c 185%2c 219%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M476.5462726373269 245.4554634850812L495.30399094189573 112.90408341377696 386.05154651282743 154.84216756980163z' fill='rgba(141%2c 185%2c 219%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1312.892931370392 287.6492100433136L1219.2069782065917 272.81081278519434 1204.3685809484723 366.4967659489947 1298.0545341122727 381.33516320711396z' fill='rgba(141%2c 185%2c 219%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M781.412508702849 504.14302853679754L842.7841647710331 579.9307121072452 918.5718483414809 518.559056039061 857.2001922732967 442.7713724686134z' fill='rgba(141%2c 185%2c 219%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M377.2323600016608 289.3349132755725L435.24845413886635 432.92978516113203 520.8272318872204 231.31881913836696z' fill='rgba(141%2c 185%2c 219%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M656.0706795423056 311.84134921833294L682.6481276295291 462.56954736723645 806.7988776912091 285.2639011311094z' fill='rgba(141%2c 185%2c 219%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M318.3076137911529 323.7964605485227L285.1008761842567 447.7256924510674 409.0301080868014 480.93243005796353 442.2368456936976 357.0031981554189z' fill='rgba(141%2c 185%2c 219%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M342.02391030100307 458.8502673281395L307.84259578407205 331.28386488146134 180.27619333739383 365.46517939839237 214.4575078543249 493.0315818450706z' fill='rgba(141%2c 185%2c 219%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M374.385561718137 347.7613315758271L344.5672334466108 488.045536576362 514.6697667186719 377.5796598473533z' fill='rgba(141%2c 185%2c 219%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M-58.47 305 a96.33 96.33 0 1 0 192.66 0 a96.33 96.33 0 1 0 -192.66 0z' fill='rgba(141%2c 185%2c 219%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1043'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
  }
`;
const RightBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
  }
`;

const Auth = () => {
  const [isSignup, setIsSignup] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) {
      navigate("/chats");
    }
  }, [navigate]);
  const handleSignup = () => {
    setIsSignup(!isSignup);
  };
  return (
    <MainBox>
      <InnerBox>
        <LeftBox>
          {/* <Icon>
            {isSignup ? <TextBox>Signup</TextBox> : <TextBox>Login</TextBox>}
          </Icon> */}
          <SvgIcon />
        </LeftBox>
        <RightBox>
          {isSignup ? (
            <Signup handleSignup={handleSignup} />
          ) : (
            <Login handleSignup={handleSignup} />
          )}
        </RightBox>
      </InnerBox>
    </MainBox>
  );
};

export default Auth;
