import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { white, black } from "../Colors/colors";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Box, Image } from "@chakra-ui/react";
import SVG from "../Images/MainBg.svg";

const MainBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1011%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(49%2c 131%2c 207%2c 1)'%3e%3c/rect%3e%3cpath d='M1488 560L0 560 L0 286.85Q55.94 270.79%2c 72 326.72Q126.89 261.62%2c 192 316.51Q239.35 291.86%2c 264 339.2Q334.53 289.73%2c 384 360.26Q413.22 269.48%2c 504 298.7Q586.98 261.68%2c 624 344.66Q670.48 319.14%2c 696 365.62Q736.11 285.73%2c 816 325.84Q853.4 243.24%2c 936 280.64Q981.49 254.13%2c 1008 299.61Q1075.47 247.08%2c 1128 314.55Q1149.08 263.63%2c 1200 284.71Q1244.78 257.49%2c 1272 302.26Q1337.46 295.72%2c 1344 361.18Q1345.33 290.51%2c 1416 291.84Q1446.59 250.42%2c 1488 281.01z' fill='rgba(44%2c 98%2c 174%2c 1)'%3e%3c/path%3e%3cpath d='M1512 560L0 560 L0 364.73Q44.39 337.12%2c 72 381.51Q160.6 350.11%2c 192 438.71Q213.39 340.1%2c 312 361.48Q384.81 314.29%2c 432 387.1Q491.44 374.54%2c 504 433.97Q557.99 367.96%2c 624 421.94Q674.58 352.52%2c 744 403.1Q793.33 332.43%2c 864 381.76Q917.27 363.03%2c 936 416.31Q1009.35 369.65%2c 1056 443Q1066.88 381.88%2c 1128 392.77Q1194.02 338.79%2c 1248 404.81Q1292.91 329.72%2c 1368 374.63Q1396.17 330.8%2c 1440 358.97Q1500.56 347.53%2c 1512 408.09z' fill='rgba(30%2c 115%2c 172%2c 1)'%3e%3c/path%3e%3cpath d='M1488 560L0 560 L0 442.85Q27.9 398.75%2c 72 426.65Q127.41 410.06%2c 144 465.47Q209.23 410.7%2c 264 475.93Q333.73 425.66%2c 384 495.39Q394.84 434.23%2c 456 445.06Q484.8 401.86%2c 528 430.65Q579.56 410.21%2c 600 461.78Q670.01 411.79%2c 720 481.8Q761.07 450.87%2c 792 491.93Q864.48 444.41%2c 912 516.89Q928.61 413.5%2c 1032 430.11Q1074.65 400.76%2c 1104 443.42Q1148.78 416.2%2c 1176 460.97Q1244.51 409.49%2c 1296 478Q1310.52 420.52%2c 1368 435.04Q1443.15 390.19%2c 1488 465.34z' fill='rgba(75%2c 156%2c 210%2c 1)'%3e%3c/path%3e%3cpath d='M1488 560L0 560 L0 500.54Q71.45 500%2c 72 571.45Q83.26 510.71%2c 144 521.97Q188.98 494.95%2c 216 539.93Q285.71 489.64%2c 336 559.35Q370.73 474.08%2c 456 508.8Q508.31 441.11%2c 576 493.42Q675.15 472.58%2c 696 571.73Q762.63 518.37%2c 816 585Q817.34 514.34%2c 888 515.68Q914.12 469.8%2c 960 495.92Q1019.75 483.67%2c 1032 543.42Q1078.16 469.59%2c 1152 515.75Q1194.31 486.06%2c 1224 528.37Q1300.17 484.55%2c 1344 560.72Q1356.77 501.49%2c 1416 514.25Q1459.29 485.54%2c 1488 528.83z' fill='rgba(151%2c 210%2c 229%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1011'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  background-position: center;
  background-size: cover;
  position: relative;
`;
const MainBox1 = styled(Box)`
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1002%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(201%2c 233%2c 251%2c 1)'%3e%3c/rect%3e%3cpath d='M427.59 517.68 a115.44 115.44 0 1 0 230.88 0 a115.44 115.44 0 1 0 -230.88 0z' fill='rgba(141%2c 185%2c 219%2c 0.7137254901960784)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1259.73 110.87 a149.33 149.33 0 1 0 298.66 0 a149.33 149.33 0 1 0 -298.66 0z' fill='rgba(141%2c 185%2c 219%2c 0.7137254901960784)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M775.1523061594149 410.1241115903216L770.3192552084752 271.72364042997214 631.9187840481256 276.55669138091196 636.7518349990655 414.9571625412614z' fill='rgba(141%2c 185%2c 219%2c 0.7137254901960784)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M113.51237947186071 203.43459997017186L6.470399256991129 110.38442617979875-86.57977453338198 217.42640639466833 20.462205681487603 310.4765801850414z' fill='rgba(141%2c 185%2c 219%2c 0.7137254901960784)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1104.8769697431758 332.1591685392082L1118.6981767859415 490.1362879253147 1276.675296172048 476.3150808825489 1262.8540891292823 318.3379614964424z' fill='rgba(141%2c 185%2c 219%2c 0.7137254901960784)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1072.7716486757388 239.12440877717796L1130.8322281318287 332.04075885688997 1241.176463523352 198.49171463289906z' fill='rgba(141%2c 185%2c 219%2c 0.7137254901960784)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1511.6213456627265 255.67332064580336L1487.5227487374611 142.2983359550151 1398.2463609719382 279.7719175710687z' fill='rgba(141%2c 185%2c 219%2c 0.7137254901960784)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M824.3544467167675 110.05966803533511L845.8061257033137 17.14223804222192 752.8886957102005-4.309440944324265 731.4370167236543 88.60798904878892z' fill='rgba(141%2c 185%2c 219%2c 0.7137254901960784)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M55.44 374.17 a128.82 128.82 0 1 0 257.64 0 a128.82 128.82 0 1 0 -257.64 0z' fill='rgba(141%2c 185%2c 219%2c 0.7137254901960784)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M594.3205825418308 401.80920820311695L514.6430515084678 453.55240186341325 566.386245168764 533.2299328967763 646.0637762021271 481.48673923648005z' fill='rgba(141%2c 185%2c 219%2c 0.7137254901960784)' class='triangle-float2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1002'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
  background-position: center;
  background-size: cover;
`;
const MainHeading = styled.h1`
  display: flex;
  font-weight: 700;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 130px;
  font-family: "Marck Script", cursive;
  letter-spacing: 2px;
  color: ${white};
  text-align: center;

  @media (max-width: 768px) {
    font-size: 80px;
  }
`;
const Icon = styled.span`
  left: -10px;
  position: relative;
`;
const MainButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 60px;
  background-color: ${white};
  color: ${black};
  font-size: 30px;
  font-weight: 700;
  border: none;
  border-radius: 20px;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${white};
    background-color: ${black};
    cursor: pointer;
  }
`;
const move = keyframes`
    0% {
        transform: translateX(0px);
    }
    50% {
        transform: translateX(10px);
    }
    100% {
        transform: translateX(0px);
    }
    `;
const Animation = styled.span`
  animation: ${move} 1.5s ease-in-out infinite;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const HomePage = () => {
  const navigate = useNavigate();
  const handleBegin = () => {
    navigate("/auth");
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) {
      navigate("/chats");
    }
  }, [navigate]);

  return (
    <Box display="flex" flexDirection="row" w="100vw" h="100vh">
      <MainBox1
        display="flex"
        justifyContent="center"
        alignItems="center"
        w="50%"
      >
        <Image src={SVG} />
      </MainBox1>
      <MainBox>
        <MainHeading>
          <Icon>
            <BsFillChatQuoteFill
              size="90px"
              color="white"
            ></BsFillChatQuoteFill>
          </Icon>
          LetsChat
        </MainHeading>
        <MainButton onClick={handleBegin}>
          Begin
          <Animation>
            <FiChevronRight />
          </Animation>
        </MainButton>
      </MainBox>
    </Box>
  );
};

export default HomePage;
