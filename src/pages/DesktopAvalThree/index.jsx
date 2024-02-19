import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const DesktopAvalThreePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-rubik items-center justify-end mx-auto p-[30px] sm:px-5 w-full">
        <div className="flex flex-col justify-start max-w-[1222px] mt-[13px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-[27px] items-center justify-between w-full">
            <Img
              className="common-pointer h-[34px]"
              src="images/img_logo_yellow_a700_34x194.svg"
              alt="logo"
              onClick={() => navigate("/")}
            />
            <div className="h-2 md:mt-0 my-[13px] overflow-hidden relative">
              <div className="w-full h-full absolute bg-gray_800_01 rounded-[4px]"></div>
              <div
                className="h-full absolute bg-yellow_A700  rounded-[4px]"
                style={{ width: "59%" }}
              ></div>
            </div>
          </div>
          <Text
            className="leading-[44.00px] md:left-[9rem] md:ml-[0] ml-[345px] mt-[89px] md:relative md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 w-[43%] md:w-[70%] sm:w-full"
            size="txtRubikRomanSemiBold32"
          >
            Seu CPF ou CNPJ está negativado no SERASA ou SPC?
          </Text>
          <div className="flex flex-row md:gap-0.5 gap-[54px] items-center justify-center md:left-[9rem] md:ml-[0] ml-[441px] mt-[66px] md:relative w-[28%] md:w-[70%] sm:w-full">
            <div className="flex flex-col items-center justify-start w-[43%]">
              <Button
                className="common-pointer cursor-pointer min-w-[143px] text-2xl md:text-[22px] text-center sm:text-xl"
                onClick={() => navigate("/")}
                shape="round"
                color="gray_700"
                size="lg"
                variant="outline"
              >
                Sim
              </Button>
            </div>
            <div className="flex flex-col items-center justify-start w-[43%]">
              <Button
                className="common-pointer cursor-pointer min-w-[143px] text-2xl md:text-[22px] text-center sm:text-xl"
                onClick={() => navigate(-1)}
                shape="round"
                color="gray_700"
                size="lg"
                variant="outline"
              >
                Não
              </Button>
            </div>
          </div>
          <div className="flex flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[556px] mt-[261px] w-[54%] md:w-full">
            <div
              className="common-pointer flex flex-row gap-[17px] items-center justify-start mt-[26px] py-2.5 w-[15%]"
              onClick={() => navigate("/desktopavaltwo")}
            >
              <Img
                className="h-[22px] w-[22px]"
                src="images/img_arrowdown.svg"
                alt="arrowdown"
              />
              <Text
                className="text-center text-white-A700 text-xl"
                size="txtRubikRegular20"
              >
                Voltar
              </Text>
            </div>
            <div className="flex flex-col gap-[9px] items-center justify-start w-[10%]">
              <Text
                className="text-sm text-white-A700"
                size="txtRubikMedium14WhiteA700"
              >
                Dúvidas?
              </Text>
              <Input
                name="groupTwentyOne"
                placeholder=""
                className="p-0 w-full"
                wrapClassName="flex h-[52px] w-[52px]"
                suffix={
                  <Img
                    className="h-[27px] ml-3 my-auto"
                    src="images/img_icbaselinewhatsapp_yellow_a700.svg"
                    alt="ic:baseline-whatsapp"
                  />
                }
                shape="circle"
                color="gray_700_87"
                size="xs"
                variant="outline"
              ></Input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopAvalThreePage;
