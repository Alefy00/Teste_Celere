import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center w-full">
          <Line className="bg-blue_gray-900 h-px w-full" />
          <div className="bg-gray-900 flex sm:flex-col flex-row md:gap-0.5 sm:gap-5 items-start sm:items-stretch justify-center md:left-[5rem] p-2.5 md:relative md:right-[] w-full">
            <div
              className="common-pointer flex sm:flex-1 flex-row gap-[17px] items-center justify-center sm:mt-0 mt-[23px] py-2.5 w-[7%] sm:w-full"
              onClick={props?.onClick1}
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
            <Button
              className="common-pointer cursor-pointer md:flex md:flex-1 md:flex-row font-bold font-rubik md:items-center md:justify-center md:left-[58px] left-[7rem] sm:left-px md:m-[] min-w-[360px] md:min-w-[] sm:ml-[0] md:ml-[60px] ml-[66px] sm:mt-0 mt-[19px] relative sm:right-[] md:right-[] rounded-[29px] text-center text-lg md:w-full"
              onClick={props?.onClick}
              color="yellow_A700"
              size="md"
              variant="fill"
            >
              Continuar
            </Button>
            <div className="flex sm:flex-1 flex-col gap-[9px] sm:gap-[9px] items-center justify-start sm:m-[] sm:ml-[0] ml-[284px] mr-[73px] sm:mr-[7px] w-[5%] sm:w-full">
              <Text
                className="text-sm text-white-A700"
                size="txtRubikMedium14WhiteA700"
              >
                Dúvidas?
              </Text>
              <Input
                name="groupThirtyThree"
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
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
