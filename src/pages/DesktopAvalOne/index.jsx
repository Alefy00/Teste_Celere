import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";

const DesktopAvalOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-rubik items-center justify-end mx-auto pt-[43px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex md:flex-col flex-row gap-[27px] items-center justify-start max-w-[1222px] mx-auto md:px-5 w-full">
            <Img
              className="common-pointer h-[34px]"
              src="images/img_logo_yellow_a700_34x194.svg"
              alt="logo"
              onClick={() => navigate("/")}
            />
            <div className="h-2 md:mt-0 my-[13px] overflow-hidden relative w-[82%]">
              <div className="w-full h-full absolute bg-gray_800_01 rounded-[4px]"></div>
              <div
                className="h-full absolute bg-yellow_A700  rounded-[4px]"
                style={{ width: "22%" }}
              ></div>
            </div>
          </div>
          <Text
            className="leading-[44.00px] mt-[70px] md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 w-[45%] sm:w-full"
            size="txtRubikRomanSemiBold32"
          >
            Digite o código enviado para WhatsApp de n° ***6663
          </Text>
          <div className="flex flex-col md:gap-10 gap-[85px] items-center justify-start mt-[61px] md:px-5 w-[15%] md:w-full">
            <div className="flex flex-row md:gap-[15px] gap-[18px] items-center justify-center md:w-[70%] w-[97%]">
              <div className="border border-solid border-yellow-A700 h-[84px] rounded-[5px] w-[84px]"></div>
              <div className="border border-gray-600 border-solid h-[84px] rounded-[5px] w-[84px]"></div>
            </div>
            <Text
              className="text-gray-300 text-lg"
              size="txtRubikRegular18Gray300"
            >
              <span className="text-gray-300 font-rubik text-left font-normal">
                Não recebeu?{" "}
              </span>
              <span className="text-yellow-A700 font-rubik text-left font-normal">
                Reenviar
              </span>
            </Text>
          </div>
          <Footer
            className="flex items-center justify-center mt-[63px] md:px-5 w-full"
            onClick={() => navigate("/desktopaval")}
            onClick1={() => navigate(-1)}
          />
        </div>
      </div>
    </>
  );
};

export default DesktopAvalOnePage;
