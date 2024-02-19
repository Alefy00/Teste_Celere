import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, CheckBox, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";

const DesktopAvalTwoPage = () => {
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
            className="leading-[44.00px] mt-[70px] sm:p-2.5 md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 w-[49%] sm:w-full"
            size="txtRubikRomanSemiBold32"
          >
            Insira seu número de telefone para se autenticar via WhatsApp
          </Text>
          <div className="flex flex-col md:gap-10 gap-[90px] items-start justify-start mt-[83px] md:px-5 w-[35%] md:w-full">
            <div className="flex flex-col gap-[18px] items-start justify-start w-full">
              <Text
                className="md:ml-[0] ml-[3px] text-lg text-white-A700"
                size="txtRubikRegular18WhiteA700"
              >
                Telefone
              </Text>
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="md:ml-[0] ml-[3px] text-gray-700 text-lg"
                  size="txtRubikRegular18Gray700"
                >
                  DDD + Número
                </Text>
                <Line className="bg-gray-700 h-px w-full" />
              </div>
            </div>
            <CheckBox
              className="text-left text-sm"
              inputClassName="h-[22px] mr-[5px] w-[22px]"
              name="lieaceitoosterm_One"
              id="lieaceitoosterm_One"
              label="Li e aceito os Termos de Uso"
            ></CheckBox>
          </div>
          <Footer className="flex items-center justify-center md:justify-end mt-[41px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default DesktopAvalTwoPage;
