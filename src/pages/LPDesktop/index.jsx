import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, SeekBar, Text } from "components";

const LPDesktopPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col font-rubik items-center justify-end mx-auto w-full">
        <div className="bg-gray-900 flex flex-col items-center justify-start pb-[51px] w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col sm:p-[] md:p-[] sm:pl-[] md:pl-[] sm:pr-[] md:pr-[] relative w-full">
              <div className="bg-yellow-A700 flex md:flex-col flex-row gap-[26px] sm:items-center items-end justify-start sm:justify-start mx-auto p-[58px] md:px-10 sm:px-5 w-full">
                <div className="sm:block sm:flex-row h-[454px] md:h-[485px] sm:h-[827px] mb-[38px] relative w-[59%] md:w-full">
                  <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[0] w-[55%]">
                    <div className="flex sm:flex-col flex-row gap-[18px] items-start justify-between w-full">
                      <div className="flex flex-col gap-5 sm:h-[] items-start justify-start sm:max-h-[] mb-[30px] sm:min-h-[] sm:relative sm:right-[185px] sm:top-[200px] w-[48%] sm:w-[70%]">
                        <div className="bg-yellow-300 flex flex-col sm:h-[15rem] h-full items-end justify-start sm:p-[] sm:pl-[] sm:pr-[] pt-[5px] sm:pt-[] px-[5px] sm:relative sm:right-[] rounded-[20px] sm:top-[] w-full">
                          <div className="flex flex-col items-center justify-start mt-[73px] w-[89%] md:w-full">
                            <Img
                              className="sm:bottom-[4rem] md:h-auto h-full object-cover sm:relative rounded-bl-[20px] rounded-br-[20px] w-full"
                              src="images/img_gladyounggood.png"
                              alt="gladyounggood"
                            />
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[180px] rounded-br-[55px] rounded-tl-[55px]"
                          leftIcon={
                            <div className="h-9 mr-2 pt-[5px] pb-[7px] w-9 bg-blue_gray-900 rounded-[50%] px-1.5 flex justify-center items-center">
                              <Img
                                className="h-[23px]"
                                src="images/img_arrowup.svg"
                                alt="arrow_up"
                              />
                            </div>
                          }
                          color="yellow_300"
                          size="xl"
                          variant="fill"
                        >
                          <div className="text-base text-center">
                            Até R$3.000
                          </div>
                        </Button>
                      </div>
                      <div className="sm:bottom-[9rem] flex flex-col gap-14 sm:gap-[5px] items-center justify-start sm:left-[1rem] sm:mt-0 mt-[67px] sm:relative sm:top-[] sm:w-4/5 w-[48%]">
                        <div className="flex flex-row gap-[15px] items-start justify-center w-[44%] md:w-full">
                          <Text
                            className="text-[13.06px] text-gray-900"
                            size="txtRubikRomanSemiBold1306"
                          >
                            Avalie já
                          </Text>
                          <Img
                            className="h-[15px] w-[15px]"
                            src="images/img_contrast.svg"
                            alt="contrast"
                          />
                        </div>
                        <div className="bg-yellow-200 flex flex-col sm:h-[14rem] items-center justify-end pt-[76px] sm:relative rounded-[20px] sm:top-[3rem] w-full">
                          <div className="flex flex-col items-center justify-start rounded-bl-[20px] rounded-br-[20px] shadow-bs w-full">
                            <Img
                              className="md:h-auto h-full object-cover rounded-bl-[20px] rounded-br-[20px] w-full"
                              src="images/img_subtract.png"
                              alt="subtract"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="leading-[49.00px] sm:left-0.5 left-[0] relative sm:text-[34px] md:text-[40px] text-[44px] text-gray-900 top-[10rem] w-2/5 sm:w-full"
                    size="txtRubikRegular44"
                  >
                    <span className="text-gray-900 font-rubik text-left font-normal">
                      Empréstimo para MEI{" "}
                    </span>
                    <span className="text-gray-900 font-rubik text-left font-bold">
                      aprovado em 9 segundos
                    </span>
                  </Text>
                  <div className="absolute flex flex-col font-inter md:gap-10 gap-[69px] items-start justify-start left-[0] sm:left-[70px] top-[0] w-[39%] sm:w-[70%]">
                    <Img
                      className="h-[37px]"
                      src="images/img_logo.svg"
                      alt="logo"
                    />
                    <div className="flex flex-row gap-3 items-center justify-between w-full">
                      <Button
                        className="cursor-pointer font-extrabold leading-[normal] rounded-[17px] text-center text-xs w-[124px]"
                        color="black_900"
                        size="xs"
                        variant="outline"
                      >
                        100% ONLINE
                      </Button>
                      <Button
                        className="cursor-pointer font-extrabold leading-[normal] rounded-[17px] text-center text-xs w-[143px]"
                        color="black_900"
                        size="xs"
                        variant="outline"
                      >
                        SEM BAIXAR APP
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex md:flex-1 flex-col items-start justify-end sm:m-[] mb-[39px] sm:mb-[] md:mt-0 sm:mt-[-12.5rem] mt-[34px] p-[19px] sm:relative rounded-[20px] sm:top-[] w-[37%] md:w-full">
                  <Text
                    className="md:ml-[0] ml-[13px] mt-[23px] text-base text-gray-900"
                    size="txtRubikBold16"
                  >
                    Quanto você precisa?
                  </Text>
                  <div className="h-[75px] md:h-[93px] md:ml-[0] ml-[13px] mt-[18px] relative w-[93%] sm:w-full">
                    <div className="absolute bg-white-A700 h-[75px] inset-[0] justify-center m-auto w-full"></div>
                    <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                      <div className="flex flex-col gap-[7px] items-center justify-start w-full">
                        <SeekBar
                          inputValue={[26.75]}
                          trackColors={["#1c1b1b", "#6f6f6f99"]}
                          thumbClassName="h-6 border-white-A700 border-2 border-solid bg-gray-900 shadow-bs1 w-6 flex justify-center items-center rounded-[50%]"
                          className="flex h-6 w-full"
                          trackClassName="h-1.5 flex w-full"
                        />{" "}
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="text-gray-600 text-sm"
                            size="txtRubikRegular14"
                          >
                            R$400
                          </Text>
                          <Text
                            className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                            size="txtRubikRomanBold32"
                          >
                            R$800
                          </Text>
                          <Text
                            className="text-gray-600 text-sm"
                            size="txtRubikRegular14"
                          >
                            R$3.000
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[17px] items-start justify-start md:ml-[0] ml-[11px] mt-[22px] w-[91%] md:w-full">
                    <Text
                      className="text-base text-gray-900"
                      size="txtRubikBold16"
                    >
                      Informe seu CNPJ
                    </Text>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="text-base text-gray-600"
                        size="txtRubikLight16"
                      >
                        Somente números
                      </Text>
                      <Line className="bg-gray-300 h-px w-full" />
                    </div>
                  </div>
                  <div className="md:h-[150px] h-[85px] md:ml-[0] ml-[11px] mt-[65px] relative w-[94%] sm:w-full">
                    <div className="bg-gray-900_6c h-[72px] m-auto rounded-[36px] w-[97%]"></div>
                    <div className="bg-gray-900_6c bottom-[5rem] md:bottom-[73.5px] sm:bottom-[74.5px] flex flex-col md:h-1/2 h-full inset-x-[0] items-center justify-center md:left-[] m-auto p-[13px] relative md:right-[] rounded-[42px] w-full">
                      <Button
                        className="common-pointer cursor-pointer font-bold min-w-[360px] rounded-[29px] text-center text-lg md:w-[99%] w-full"
                        onClick={() => navigate("/desktopavaltwo")}
                        color="gray_900"
                        size="md"
                        variant="fill"
                      >
                        Avaliar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                className="h-[66px] mt-[-24px] mx-auto z-[1]"
                src="images/img_divider.svg"
                alt="divider"
              />
            </div>
            <div className="flex md:flex-col flex-row font-mulish md:gap-5 items-start justify-start max-w-7xl mt-[29px] mx-auto md:px-5 w-full">
              <div className="h-[89px] md:mt-0 mt-[15px] relative w-[34%] md:w-full">
                <Text
                  className="leading-[40.00px] m-auto sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-full"
                  size="txtMuliBold40"
                >
                  <span className="text-white-A700 font-rubik text-left font-bold">
                    É muito fácil obter o seu{" "}
                  </span>
                  <span className="text-yellow-A700 font-rubik text-left font-bold">
                    empréstimo
                  </span>
                </Text>
                <Img
                  className="absolute bottom-[20%] h-[17px] right-[17%] w-[17px]"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft"
                />
              </div>
              <div className="flex md:flex-1 flex-col font-rubik items-center justify-start md:ml-[0] ml-[170px] md:mt-0 mt-[15px] w-[27%] md:w-full">
                <div className="flex flex-col gap-[17px] items-start justify-start w-full">
                  <div className="flex flex-row gap-[19px] items-center justify-start w-[55%] md:w-full">
                    <Button
                      className="flex h-[54px] items-center justify-center w-[54px]"
                      shape="circle"
                      color="yellow_A700"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        className="h-[26px]"
                        src="images/img_frame.svg"
                        alt="frame"
                      />
                    </Button>
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtRubikBold24"
                    >
                      Cadastro
                    </Text>
                  </div>
                  <Text
                    className="text-gray-500 text-lg"
                    size="txtRubikRegular18"
                  >
                    Primeiro você insere o valor, CPF e CNPJ.
                  </Text>
                </div>
              </div>
              <Button
                className="border border-gray-600 border-solid flex h-[70px] items-center justify-center mb-[38px] md:ml-[0] ml-[268px] rounded-[50%] w-[70px]"
                shape="circle"
                color="gray_900"
                size="lg"
                variant="fill"
              >
                <Img
                  className="h-[27px]"
                  src="images/img_icbaselinewhatsapp.svg"
                  alt="icbaselinewhats"
                />
              </Button>
            </div>
            <div className="flex sm:flex-col flex-row font-rubik md:gap-10 items-center justify-between max-w-[1204px] mt-[30px] mx-auto md:px-5 w-full">
              <Text className="text-gray-500 text-lg" size="txtRubikRegular18">
                Você só precisa ter o nome limpo.{" "}
              </Text>
              <Line className="bg-blue_gray-900_01 h-px mb-3 sm:mt-0 mt-2 w-[51%]" />
            </div>
            <div className="flex flex-row font-rubik md:gap-10 items-start justify-between md:m-[5px] max-w-[1207px] mt-2 mx-auto md:px-5 w-full">
              <div className="flex flex-col items-center justify-start mt-[55px] w-[42%]">
                <div className="flex sm:flex-col flex-row gap-[22px] items-start justify-between w-full">
                  <div className="flex sm:flex-1 flex-col gap-[38px] items-center justify-start mb-[23px] w-3/5 sm:w-full">
                    <div className="bg-yellow-300 md:h-[344px] h-[424px] pt-[13px] px-[13px] relative rounded-[20px] w-full">
                      <Img
                        className="absolute h-[136px] right-[9%] top-1/4"
                        src="images/img_group16.svg"
                        alt="groupSixteen"
                      />
                      <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[3%] w-[79%]">
                        <Img
                          className="h-[344px] md:h-auto object-cover rounded-bl-[50px] rounded-br-[50px] w-full"
                          src="images/img_happinesspeopl.png"
                          alt="happinesspeopl"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row gap-3 items-end justify-center w-[58%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_frame_yellow_a700.svg"
                        alt="frame_One"
                      />
                      <Text
                        className="mt-1.5 text-gray-500_01 text-sm"
                        size="txtRubikRegular14Gray50001"
                      >
                        100% online e seguro
                      </Text>
                    </div>
                  </div>
                  <div className="flex sm:flex-1 flex-col gap-[27px] items-end justify-start sm:mt-0 mt-[103px] w-[36%] sm:w-full">
                    <div className="bg-gray-900_02 flex flex-col gap-3 items-center justify-start p-[23px] sm:px-5 rounded-br-[58px] rounded-tl-[60px] w-[96%] md:w-full">
                      <div className="bg-blue_gray-900 flex flex-col h-[39px] items-center justify-start p-1.5 rounded-[19px] w-[39px]">
                        <Img
                          className="h-[25px] mb-0.5 w-[25px]"
                          src="images/img_arrowup.svg"
                          alt="arrowup"
                        />
                      </div>
                      <Text
                        className="text-gray-400 text-sm"
                        size="txtRubikRegular14Gray400"
                      >
                        Até R$ 3.000,00
                      </Text>
                    </div>
                    <div className="h-[263px] relative w-full">
                      <div className="absolute bg-gray-800 h-[263px] inset-[0] justify-center m-auto rounded-[20px] w-full"></div>
                      <Img
                        className="absolute bottom-[0] h-[183px] inset-x-[0] mx-auto object-cover w-[90%]"
                        src="images/img_subtract_183x162.png"
                        alt="subtract_One"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mb-4 w-[51%]">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-row gap-[19px] items-center justify-start w-[53%] md:w-full">
                      <Button
                        className="flex h-[54px] items-center justify-center w-[54px]"
                        shape="circle"
                        color="yellow_A700"
                        size="sm"
                        variant="fill"
                      >
                        <Img
                          className="h-6"
                          src="images/img_frame_gray_900.svg"
                          alt="frame_Two"
                        />
                      </Button>
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtRubikBold24"
                      >
                        Prazo de pagamento
                      </Text>
                    </div>
                    <Text
                      className="leading-[130.00%] text-gray-500 text-lg w-full"
                      size="txtRubikRegular18"
                    >
                      Agora você escolhe a quantidade de parcelas. Na sequência,
                      em apenas 9 segundos, consultamos mais de 400 bancos de
                      dados.
                    </Text>
                  </div>
                </div>
                <Line className="bg-blue_gray-900_01 h-px mt-11 w-full" />
                <div className="flex flex-col items-center justify-start mt-[29px] w-[98%] md:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-row gap-[19px] items-center justify-start w-[30%] md:w-full">
                      <Button
                        className="flex h-[54px] items-center justify-center w-[54px]"
                        shape="circle"
                        color="yellow_A700"
                        size="sm"
                        variant="fill"
                      >
                        <Img
                          className="h-6"
                          src="images/img_frame_gray_900_54x54.svg"
                          alt="frame_Three"
                        />
                      </Button>
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtRubikBold24"
                      >
                        Quase lá
                      </Text>
                    </div>
                    <Text
                      className="leading-[130.00%] text-gray-500 text-lg w-full"
                      size="txtRubikRegular18"
                    >
                      Vamos agora para a foto do seu documento e uma selfie.
                      Nossa tecnologia Liveness, OCR e Face Match impede
                      qualquer tipo de fraude.
                    </Text>
                  </div>
                </div>
                <Line className="bg-blue_gray-900_01 h-px mt-[29px] w-full" />
                <div className="flex flex-col items-center justify-start mt-[25px] w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-row gap-[19px] items-center justify-start w-[47%] md:w-full">
                      <Button
                        className="flex h-[54px] items-center justify-center w-[54px]"
                        shape="circle"
                        color="yellow_A700"
                        size="sm"
                        variant="fill"
                      >
                        <Img
                          className="h-6"
                          src="images/img_frame_54x54.svg"
                          alt="frame_Four"
                        />
                      </Button>
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtRubikBold24"
                      >
                        Dinheiro na conta
                      </Text>
                    </div>
                    <Text
                      className="leading-[130.00%] text-gray-500 text-lg w-full"
                      size="txtRubikRegular18"
                    >
                      Agora você informa alguns dados e finaliza. Seu contrato
                      chegará no seu WhatsApp e E-Mail. Após a assinatura
                      eletrônica, em até 1 (uma) hora, o dinheiro estará em sua
                      conta.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-yellow-A700 flex flex-col font-rubik items-center justify-start mt-16 p-[47px] md:px-10 sm:px-5 w-full">
              <div className="flex md:flex-col flex-row gap-[25px] items-center justify-center max-w-[850px] mb-2 mx-auto w-full">
                <div className="bg-amber-500 flex flex-col h-[77px] items-center justify-end p-[18px] rounded-[38px] w-[77px]">
                  <Img
                    className="h-10 w-10"
                    src="images/img_frame_gray_900.svg"
                    alt="frame_Five"
                  />
                </div>
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900"
                  size="txtRubikBold40"
                >
                  90 dias para pagar a primeira parcela.
                </Text>
              </div>
            </div>
            <div className="bg-gray-900_02 flex flex-col font-rubik items-center justify-start p-[63px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col gap-[54px] items-center justify-start max-w-[1220px] mb-[26px] mx-auto w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                  size="txtRubikBold40WhiteA700"
                >
                  As últimas do blog
                </Text>
                <div className="flex md:flex-col flex-row gap-[22px] items-start justify-between w-full">
                  <div className="flex sm:flex-1 flex-col gap-[21px] items-start justify-start w-auto sm:w-full">
                    <Img
                      className="h-[341px] sm:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-[392px] md:w-full"
                      src="images/img_rectangle312.png"
                      alt="rectangle312"
                    />
                    <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                      <Text
                        className="text-gray-600 text-sm w-auto"
                        size="txtRubikRegular14"
                      >
                        11/12/2023
                      </Text>
                      <Text
                        className="leading-[120.00%] max-w-[392px] md:max-w-full text-white-A700 text-xl"
                        size="txtRubikBold20"
                      >
                        Crédito consciente: não pegue empréstimos sem ler isso
                        antes
                      </Text>
                    </div>
                  </div>
                  <div className="flex sm:flex-1 flex-col gap-[21px] items-start justify-start w-auto sm:w-full">
                    <Img
                      className="h-[341px] sm:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-[392px] md:w-full"
                      src="images/img_rectangle312_341x392.png"
                      alt="rectangle312_One"
                    />
                    <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                      <Text
                        className="text-gray-600 text-sm w-auto"
                        size="txtRubikRegular14"
                      >
                        11/12/2023
                      </Text>
                      <Text
                        className="text-white-A700 text-xl w-auto"
                        size="txtRubikBold20"
                      >
                        5 maiores erros em gestão financeira
                      </Text>
                    </div>
                  </div>
                  <div className="flex sm:flex-1 flex-col gap-[21px] items-start justify-start w-auto sm:w-full">
                    <Img
                      className="h-[344px] sm:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-[392px] md:w-full"
                      src="images/img_image4.png"
                      alt="imageFour"
                    />
                    <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                      <Text
                        className="text-gray-600 text-sm w-auto"
                        size="txtRubikRegular14"
                      >
                        11/12/2023
                      </Text>
                      <Text
                        className="leading-[120.00%] max-w-[392px] md:max-w-full text-white-A700 text-xl"
                        size="txtRubikBold20"
                      >
                        Entenda a importância da gestão do fluxo de caixa
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-yellow-A700 flex flex-col font-rubik items-center justify-start p-[47px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col items-center justify-start max-w-[960px] mb-2 mx-auto w-full">
                <div className="flex md:flex-col flex-row gap-[23px] items-start justify-between w-full">
                  <div className="bg-amber-500 flex flex-col h-[77px] items-center justify-end p-4 rounded-[38px] w-[77px]">
                    <Img
                      className="h-[43px] mt-0.5 w-[43px]"
                      src="images/img_tree2svgrepocom.svg"
                      alt="tree2svgrepocom"
                    />
                  </div>
                  <div className="flex flex-col gap-[9px] items-start justify-start">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                      size="txtRubikBold32"
                    >
                      Uma árvore plantada para cada empréstimo realizado.
                    </Text>
                    <Text
                      className="text-gray-900 text-lg"
                      size="txtRubikRegular18Gray900"
                    >
                      Empreendedorismo e meio ambiente devem caminhar juntos.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start max-w-[883px] mt-11 mx-auto md:px-5 w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-row font-inter gap-3 items-center justify-center w-[32%] md:w-full">
                  <Button
                    className="cursor-pointer font-extrabold leading-[normal] rounded-[17px] text-center text-xs w-[124px]"
                    color="yellow_A700"
                    size="xs"
                    variant="outline"
                  >
                    100% ONLINE
                  </Button>
                  <Button
                    className="cursor-pointer font-extrabold leading-[normal] rounded-[17px] text-center text-xs w-[143px]"
                    color="yellow_A700"
                    size="xs"
                    variant="outline"
                  >
                    SEM BAIXAR APP
                  </Button>
                </div>
                <Text
                  className="mt-[18px] sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                  size="txtRubikBold40WhiteA700"
                >
                  É fácil, rápido e seguro.
                </Text>
                <div className="flex md:flex-col flex-row font-rubik md:gap-[46px] items-start justify-between mt-12 w-full">
                  <div className="h-[536px] relative w-[44%] md:w-full">
                    <div className="absolute h-[536px] inset-y-[0] my-auto right-[0] w-[94%]">
                      <div className="h-[536px] m-auto w-full">
                        <Img
                          className="absolute bottom-[20%] h-[135px] left-[0] rounded-br-[58px] rounded-tl-[60px]"
                          src="images/img_rectangle9.svg"
                          alt="rectangleNine"
                        />
                        <div className="bg-gray-900_03 h-[197px] ml-auto mr-[19px] mt-[94px] rounded-[98px] w-[197px]"></div>
                        <div className="absolute h-[536px] inset-[0] justify-center m-auto w-[98%]">
                          <Img
                            className="absolute md:block sm:bottom-[] md:bottom-[] md:flex-row h-[536px] md:h-[65rem] md:items-center md:m-[] m-auto md:mb-[] md:ml-[] md:mr-[] md:mt-[] object-cover md:p-[26%] md:relative top-2.5 md:top-[-16rem] sm:top-[2.9rem] w-full"
                            src="images/img_subtract_536x348.png"
                            alt="subtract_Two"
                          />
                          <div className="absolute h-[251px] right-[2%] top-[22%] w-[36%]">
                            <div className="backdrop-opacity-[0.5] bg-gray-900 blur-[150.00px] h-[251px] left-5 m-auto relative rotate-[12deg] rounded-[125px] w-full"></div>
                            <Img
                              className="absolute bottom-[18%] h-[51px] right-[19%]"
                              src="images/img_group35.svg"
                              alt="groupThirtyFive"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute h-[177px] left-[0] top-[6%] w-[37%]">
                        <div className="backdrop-opacity-[0.5] bg-gray-900 blur-[150.00px] h-[177px] m-auto relative right-10 rotate-[-25deg] rounded-[88px] w-full"></div>
                        <Text
                          className="absolute bottom-[16%] left-[0] text-orange-300 text-sm"
                          size="txtRubikMedium14"
                        >
                          Até R$3.000,00
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="absolute flex h-[67px] items-center justify-center left-[0] rounded-[33px] top-[15%] w-[67px]"
                      color="blue_gray_900"
                      size="xs"
                      variant="fill"
                    >
                      <Img
                        className="h-[42px]"
                        src="images/img_frame_yellow_a700_67x67.svg"
                        alt="frame_Six"
                      />
                    </Button>
                  </div>
                  <div className="bg-gray-900_05 flex md:flex-1 flex-col items-start justify-end mb-[57px] md:mt-0 mt-[82px] p-3.5 rounded-[20px] w-[52%] md:w-full">
                    <Text
                      className="md:ml-[0] ml-[18px] mt-[23px] text-base text-white-A700"
                      size="txtRubikBold16WhiteA700"
                    >
                      Quanto você precisa?
                    </Text>
                    <div className="flex flex-col items-center justify-start ml-6 md:ml-[0] mt-3.5 pb-[5px] w-[91%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col gap-[7px] items-center justify-start w-full">
                          <SeekBar
                            inputValue={[26.75]}
                            trackColors={["#fadc00", "#6f6f6f99"]}
                            thumbClassName="h-6 border-gray-900 border-2 border-solid bg-yellow-A700 shadow-bs1 w-6 flex justify-center items-center rounded-[50%]"
                            className="flex h-6 w-full"
                            trackClassName="h-1.5 flex w-full"
                          />{" "}
                          <div className="flex flex-row items-start justify-between w-full">
                            <Text
                              className="text-gray-600 text-sm"
                              size="txtRubikRegular14"
                            >
                              R$400
                            </Text>
                            <Text
                              className="md:text-3xl sm:text-[28px] text-[32px] text-yellow-A700"
                              size="txtRubikBold32YellowA700"
                            >
                              R$800
                            </Text>
                            <Text
                              className="text-gray-600 text-sm"
                              size="txtRubikRegular14"
                            >
                              R$3.000
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[17px] items-start justify-start md:ml-[0] ml-[18px] mt-5 w-[89%] md:w-full">
                      <Text
                        className="text-base text-white-A700"
                        size="txtRubikBold16WhiteA700"
                      >
                        Informe seu CNPJ
                      </Text>
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <Text
                          className="text-base text-gray-600"
                          size="txtRubikLight16"
                        >
                          Somente números
                        </Text>
                        <Line className="bg-gray-600_99 h-px w-full" />
                      </div>
                    </div>
                    <div className="md:h-[142px] h-[85px] ml-4 md:ml-[0] mt-[57px] relative w-[92%] sm:w-full">
                      <div className="bg-yellow-A700_6c h-[72px] m-auto rounded-[36px] w-[97%]"></div>
                      <div className="bg-yellow-A700_6c md:bottom-[71.5px] sm:bottom-[73.5px] bottom-[78px] flex flex-col md:h-1/2 h-full inset-x-[0] items-center justify-center m-auto p-[13px] relative rounded-[42px] w-full">
                        <Button
                          className="common-pointer cursor-pointer font-bold md:min-w-[350px] min-w-[360px] rounded-[29px] text-center text-lg md:w-[99%] w-full"
                          onClick={() => navigate("/desktopavaltwo")}
                          color="yellow_A700"
                          size="md"
                          variant="fill"
                        >
                          Avaliar
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900_05 flex flex-col font-rubik items-center justify-start p-9 sm:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1206px] mb-[13px] mx-auto md:px-5 w-full">
                <div className="flex md:flex-1 flex-col gap-[19px] justify-start md:mt-0 mt-[7px] w-[16%] md:w-full">
                  <Img
                    className="h-[33px]"
                    src="images/img_logo_yellow_a700.svg"
                    alt="logo_One"
                  />
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[7px]">
                    <Text
                      className="text-gray-300 text-sm"
                      size="txtRubikRegular14Gray300"
                    >
                      CNPJ 000.000.000/0000-0
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[111px] md:mt-0 mt-[3px]">
                  <Text
                    className="text-base text-yellow-A700"
                    size="txtRubikMedium16"
                  >
                    Mapa do site
                  </Text>
                  <Text
                    className="mt-[23px] text-gray-300 text-sm"
                    size="txtRubikRegular14Gray300"
                  >
                    Avalie seu empréstimo
                  </Text>
                  <Text
                    className="mt-[11px] text-gray-300 text-sm"
                    size="txtRubikRegular14Gray300"
                  >
                    Políticas de privacidade
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[85px] w-[17%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-base text-yellow-A700"
                      size="txtRubikMedium16"
                    >
                      Fale conosco
                    </Text>
                    <div className="flex flex-row gap-3 items-center justify-start mt-[18px] w-[63%] md:w-full">
                      <Img
                        className="h-[17px] w-[17px]"
                        src="images/img_icbaselinewhatsapp.svg"
                        alt="icbaselinewhats_One"
                      />
                      <Text
                        className="text-gray-300 text-sm"
                        size="txtRubikRegular14Gray300"
                      >
                        11 99999-9999
                      </Text>
                    </div>
                    <div className="flex flex-row gap-3 items-start justify-start mt-[11px] w-full">
                      <Img
                        className="h-4 w-4"
                        src="images/img_lock.svg"
                        alt="lock"
                      />
                      <Text
                        className="text-gray-300 text-sm"
                        size="txtRubikRegular14Gray300"
                      >
                        contato@celerered.com.br
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start ml-20 md:ml-[0] md:mt-0 mt-1 w-[10%] md:w-full">
                  <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                    <Text
                      className="text-base text-yellow-A700"
                      size="txtRubikMedium16"
                    >
                      Siga nas redes
                    </Text>
                    <div className="flex flex-row gap-[11px] items-center justify-start w-[46%] md:w-full">
                      <div className="bg-gray-600_01 h-5 rounded-[50%] w-5"></div>
                      <div className="bg-gray-600_01 h-5 rounded-[50%] w-5"></div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[104px] w-[14%] md:w-full">
                  <Text
                    className="md:ml-[0] ml-[5px] text-base text-yellow-A700"
                    size="txtRubikMedium16"
                  >
                    Qualidade
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[5px] mt-[18px] text-gray-300 text-sm"
                    size="txtRubikRegular14Gray300"
                  >
                    Políticas de qualidade
                  </Text>
                  <div className="flex flex-row gap-[23px] items-start justify-between mt-4 w-full">
                    <Img
                      className="h-[77px] md:h-auto object-cover w-[77px]"
                      src="images/img_image3.png"
                      alt="imageThree"
                    />
                    <Img
                      className="h-[68px] md:h-auto mt-0.5 object-cover w-[68px]"
                      src="images/img_image2.png"
                      alt="imageTwo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LPDesktopPage;
