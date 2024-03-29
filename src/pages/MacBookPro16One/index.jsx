import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading, Button } from "../../components";
import MacBookPro16OneRowFive from "../../components/MacBookPro16OneRowFive";
import MacBookPro16OneRowFortynine from "../../components/MacBookPro16OneRowFortynine";
import MacBookPro16OneRowTwentyfive from "../../components/MacBookPro16OneRowTwentyfive";
import MacBookPro16OneRowTwentytwo from "../../components/MacBookPro16OneRowTwentytwo";
import MacBookPro16OneRowTwo from "../../components/MacBookPro16OneRowTwo";
import MacBookPro16OneRowvector507 from "../../components/MacBookPro16OneRowvector507";
import MacBookPro16OneRowvirtualtour from "../../components/MacBookPro16OneRowvirtualtour";
import MacBookPro16OneStackview from "../../components/MacBookPro16OneStackview";

export default function MacBookPro16OnePage() {
  return (
    <>
      <Helmet>
        <title>Tulas_demo</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-px py-3.5 bg-white-A700">
        <header className="flex flex-col items-center justify-center w-full gap-1">
          <Heading as="h5" className="!text-lime-900 text-center">
            ADMISSION HELPLINE NO. +91-6366937159
          </Heading>
          <div className="flex flex-row justify-between items-center w-full p-[26px] bg-cyan-900">
            <Img src="images/img_image_1.png" alt="imageone_one" className="w-[16%] mb-px ml-[30px] object-cover" />
            <div className="flex flex-row justify-start mr-[42px] gap-[41px]">
              <a href="#">
                <Text as="p">HOME</Text>
              </a>
              <a href="#">
                <Text as="p">ABOUT US</Text>
              </a>
              <a href="#">
                <Text as="p">PROGRAMS</Text>
              </a>
              <a href="#">
                <Text as="p">INFRASTRUCTURE</Text>
              </a>
              <a href="#">
                <Text as="p">R&D (CIRE)</Text>
              </a>
              <a href="#">
                <Text as="p">ADMISSIONS</Text>
              </a>
              <a href="#">
                <Text as="p">ALUMNI</Text>
              </a>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-start w-full mb-[5px]">
          <div className="flex flex-col items-center justify-start w-full overflow-auto">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-row justify-end w-full pb-[125px] pl-14 pr-[125px] bg-black-900 shadow-lg">
                <div className="flex flex-row justify-end w-full mx-auto max-w-[1253px]">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-[14%] ml-[1085px]">
                      <div className="flex flex-col items-start justify-start w-full p-[15px] bg-pink-A200_54">
                        <Text size="s" as="p" className="mt-[9px]">
                          ADMISSION ELIGIBILITY
                        </Text>
                        <Text size="s" as="p" className="mt-[5px]">
                          E- PROSPECTUS
                        </Text>
                        <Text size="s" as="p" className="mt-7">
                          BANK DETAILS
                        </Text>
                        <Text size="s" as="p" className="mt-7 mb-3.5">
                          PAY FEE ONLINE
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-[74px]">
                      <Heading size="3xl" as="h1" className="!text-red-100">
                        INNOVATE, ENGINEER, EXCEL
                      </Heading>
                      <Heading size="lg" as="h2" className="mt-[9px] !text-white-A700 text-center">
                        Tula’s Institute was established in 2006, under the aegis of Rishabh Educational Trust, Dehradun
                        with the vision of offering excellent academics along with fostering the professional and
                        personal personas of every student of the institute. Tula’s Institute is dedicated to serve the
                        communities by recognizing the diverse needs of individuals.{" "}
                      </Heading>
                      
                      
                    </div>
                    <div className="flex flex-row justify-between w-[80%] mt-[129px] ml-[52px]">
                      <div className="flex flex-row justify-between w-auto gap-[72px]">
                        <Button
                          color="pink_900"
                          className="font-ttchocolatestrl font-medium border-pink-900 border-2 border-solid min-w-[283px]"
                        >
                          PAY ONLINE
                        </Button>
                        <Button
                          color="pink_900"
                          className="font-ttchocolatestrl font-medium border-pink-900 border-2 border-solid min-w-[283px]"
                        >
                          APPLY NOW
                        </Button>
                        <Button
                          color="pink_900"
                          className="font-ttchocolatestrl font-medium border-pink-900 border-2 border-solid min-w-[283px]"
                        >
                          VIRTUAL TOUR
                        </Button>
                      </div>
                      {/* <MacBookPro16OneRowvirtualtour className="flex flex-row justify-center w-[29%]" /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[716px] w-[92%] relative">
                <div className="flex flex-row justify-center items-start w-full top-0 right-0 left-0 m-auto absolute">
                  <Heading
                    size="4xl"
                    as="h3"
                    className="w-[33%] mt-20 !text-gray-400 tracking-[-1.80px] z-[1] text-shadow-ts1"
                  >
                    <span className="text-gray-600 text-[35px]">WELCOME TO</span>
                    <span className="text-gray-600">
                      <br />
                    </span>
                    <span className="text-cyan-800">TULA’S INSTITUTE</span>
                  </Heading>
                  <div className="flex flex-row justify-center items-center w-full ml-[-499px]">
                    
                    <Img
                      src="images/img_mask_group_668x863.png"
                      alt="image_one"
                      className="w-[55%] ml-[-8S5px] object-cover"
                    />
                  </div>
                </div>
                <Text
                  size="2xl"
                  as="p"
                  className="w-[47%] bottom-[12%] left-[2%] m-auto !text-cyan-800 italic absolute"
                >
                  With this vision, Tula’s Institute has been ranked in Top 50 Private Engineering college of India for
                  the last 6 years consecutively (from 2016-2021) and also has been ranked in Top 20 Private Engineering
                  college of North India for the past 3 years by “The Times of India-Engineering Survey” ,ranked AA+ by
                  “Career 360”.{" "}
                </Text>
                <Img
                  src="images/img_image_244.png"
                  alt="image244_one"
                  className="h-[625px] w-[30%] bottom-0 right-[9%] m-auto object-cover absolute rounded-[47px]"
                />
              </div>
              <Img src="images/img_rectangle_4405.png" alt="image_two" className="w-full mt-[90px] object-cover" />
              <Img src="images/img_rectangle_4406.png" alt="image_three" className="w-full mt-[15px] object-cover" />
              <Heading size="4xl" as="h4" className="w-[17%] mt-[29px] !text-gray-400 tracking-[-1.80px] text-center">
                <span className="text-gray-600 text-3xl">
                  OUR
                  <br />
                </span>
                <span className="text-cyan-800 text-[50px]">PROGRAMS</span>
              </Heading>
              <div className="flex flex-row justify-center w-full mt-[89px] max-w-[1625px]">
                <div className="flex flex-row justify-start w-full gap-[15px]">
                  <MacBookPro16OneRowFive className="flex flex-row justify-start w-[46%]" />
                  <div className="w-[54%] gap-[15px] grid-cols-2 grid">
                    <div className="h-[337px] w-full relative">
                      <Img
                        src="images/img_rectangle_4411.png"
                        alt="image"
                        className="justify-center h-[336px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                      <div className="justify-center h-[336px] w-full left-0 bottom-0 right-0 top-0 m-auto bg-black-900_33 absolute" />
                    </div>
                    <MacBookPro16OneRowTwo className="flex flex-row justify-end w-full" />
                    <MacBookPro16OneStackview className="h-[337px] w-full relative" />
                    <div className="flex flex-row justify-end w-full">
                      <div className="flex flex-row justify-end w-full bg-black-900_33">
                        <Img src="images/img_rectangle_4414.png" alt="image" className="w-full object-cover" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center w-full mt-[107px]">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full max-w-[1653px]">
                    <Heading size="4xl" as="h5" className="w-[15%] !text-gray-400 tracking-[-1.80px] text-center">
                      <span className="text-gray-600 text-3xl">
                        WHY
                        <br />
                      </span>
                      <span className="text-cyan-800 text-[50px]">TULA’S?</span>
                    </Heading>
                    <div className="flex flex-row justify-center w-full mt-[-7px]">
                      <MacBookPro16OneRowvector507 className="flex flex-row justify-center w-full" />
                    </div>
                  </div>
                  <Img
                    src="images/img_rectangle_4407.png"
                    alt="image_twelve"
                    className="w-full mt-[-10px] z-[1] object-cover"
                  />
                </div>
              </div>
              <Img src="images/img_rectangle_4408.png" alt="image_thirteen" className="w-full mt-[15px] object-cover" />
              <div className="h-[1864px] w-full relative">
                <div className="flex flex-col items-start justify-start w-full top-0 right-0 left-0 m-auto absolute">
                  <div className="flex flex-row justify-center w-full px-14 py-[66px] bg-white-A700 shadow-xl">
                    <div className="flex flex-row justify-center w-full mt-[7px] mb-[126px] max-w-[1592px]">
                      <div className="flex flex-col items-center justify-start w-full gap-[107px]">
                        <Heading size="4xl" as="h6" className="w-[15%] !text-gray-400 tracking-[-1.80px] text-center">
                          <span className="text-gray-600 text-3xl">
                            STARS AT
                            <br />
                          </span>
                          <span className="text-cyan-800 text-[50px]">TULA’S</span>
                        </Heading>
                        <div className="h-[652px] w-full relative">
                          <div className="flex flex-row justify-start items-start w-[88%] h-full left-0 bottom-0 top-0 m-auto absolute">
                            <Img
                              src="images/img_rectangle_4415.png"
                              alt="image_fourteen"
                              className="w-[488px] z-[1] object-cover rounded-[10px]"
                            />
                            <div className="flex flex-col items-center justify-start w-[86%] ml-[-288px]">
                              <Img
                                src="images/img_rectangle_4416.png"
                                alt="image_fifteen"
                                className="w-[488px] object-cover rounded-[10px]"
                              />
                              <Img
                                src="images/img_rectangle_4418.png"
                                alt="image_sixteen"
                                className="w-full mt-[-26px] object-cover rounded-[25px]"
                              />
                            </div>
                          </div>
                          <Img
                            src="images/img_rectangle_4417.png"
                            alt="image_seventeen"
                            className="h-[488px] w-[488px] right-0 top-0 m-auto object-cover absolute rounded-[10px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_mask_group_668x840.png"
                    alt="image_eighteen"
                    className="w-[49%] mt-[-4px] z-[1] object-cover"
                  />
                </div>
                <Heading
                  size="4xl"
                  as="h1"
                  className="w-[19%] bottom-[26%] right-[32%] m-auto !text-gray-400 tracking-[-1.80px] absolute"
                >
                  <span className="text-black-900 text-3xl">
                    TULA’S
                    <br />
                  </span>
                  <span className="text-cyan-800 text-[50px]">PLACEMENTS</span>
                </Heading>
                <div className="flex flex-col items-center justify-start w-[43%] gap-[27px] bottom-[3%] right-[7%] m-auto absolute">
                  <Text size="lg" as="p" className="!text-black-900">
                    Tula&#39;s University collaborates with industry-leading placement partners to ensure students
                    secure rewarding career opportunities.
                  </Text>
                  <div className="flex flex-row justify-center w-full">
                    <div className="flex flex-col items-center justify-start w-full gap-[58px]">
                      <div className="flex flex-row justify-start w-full gap-[27px]">
                        <div className="flex flex-row justify-start w-[31%]">
                          <div className="flex flex-row justify-center w-full border-pink-900 border border-solid bg-gray-50 shadow-xs rounded-[5px]">
                            <Img
                              src="images/img_mask_group_74x132.png"
                              alt="image_nineteen"
                              className="w-[59%] object-cover"
                            />
                          </div>
                        </div>
                        <MacBookPro16OneRowTwentytwo className="flex flex-row justify-start w-[31%]" />
                        <MacBookPro16OneRowTwentyfive className="flex flex-row justify-start w-[31%]" />
                      </div>
                      <div className="flex flex-row justify-start w-full gap-[27px]">
                        <div className="flex flex-row justify-center w-[31%] p-[19px] border-pink-900 border border-solid bg-gray-50 shadow-xs rounded-[5px]">
                          <div className="flex flex-row justify-start w-[61%] gap-1">
                            <Img src="images/img_image_239.png" alt="image239_one" className="w-[26%] object-cover" />
                            <Img
                              src="images/img_mask_group_36x80.png"
                              alt="image_twentytwo"
                              className="w-[71%] object-cover"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row justify-center w-[31%] p-[17px] border-pink-900 border border-solid bg-gray-50 shadow-xs rounded-[5px]">
                          <Img src="images/img_mask_group_41x102.png" alt="image" className="w-[54%] object-cover" />
                        </div>
                        <div className="flex flex-row justify-center w-[31%] p-3.5 border-pink-900 border border-solid bg-gray-50 shadow-xs rounded-[5px]">
                          <div className="flex flex-row justify-center w-[91%]">
                            <Img
                              src="images/img_image_230_48x39.png"
                              alt="image230_three"
                              className="w-[22%] object-cover"
                            />
                            <Img src="images/img_mask_group_48x141.png" alt="image" className="w-[79%] object-cover" />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-start w-full gap-[27px]">
                        <div className="flex flex-row justify-start w-[31%]">
                          <div className="flex flex-row justify-center w-full p-[19px] border-pink-900 border border-solid bg-gray-50 shadow-xs rounded-[5px]">
                            <div className="flex flex-row justify-start w-[87%] gap-[3px]">
                              <Img src="images/img_mask_group_37x66.png" alt="image" className="w-[41%] object-cover" />
                              <Img
                                src="images/img_mask_group_37x93.png"
                                alt="image_twentysix"
                                className="w-[58%] object-cover"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row justify-end w-[31%] p-1 border-pink-900 border border-solid bg-gray-50 shadow-xs rounded-[5px]">
                          <Img
                            src="images/img_mask_group_68x167.png"
                            alt="image"
                            className="w-[77%] mr-[22px] object-cover"
                          />
                        </div>
                        <div className="flex flex-row justify-center w-[31%] border-pink-900 border border-solid bg-gray-50 shadow-xs rounded-[5px]">
                          <Img
                            src="images/img_mask_group_73x89.png"
                            alt="image"
                            className="w-[40%] mb-px object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-end w-[20%] bottom-[31%] right-[7%] m-auto absolute">
                  <div className="flex flex-row justify-center w-full p-10 bg-orange-600 shadow-2xl rounded-[38px]">
                    <div className="flex flex-col items-center justify-start w-full mt-[27px] mb-[5px] gap-2.5">
                      <Heading size="xl" as="h3" className="!text-white-A700 tracking-[-0.90px]">
                        HIGHEST PACKAGE
                      </Heading>
                      <Text size="6xl" as="p" className="!text-pink-900 tracking-[-2.40px] !font-bebasneue">
                        36.5 LPA
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-start w-[38%] bottom-0 left-[7%] m-auto absolute">
                  <div className="flex flex-row justify-start w-full">
                    <div className="h-[610px] w-full shadow-4xl relative">
                      <Img
                        src="images/img_rectangle_4369_610x649.png"
                        alt="image"
                        className="justify-center h-[610px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                      <Img
                        src="images/img_group_3_black_900.svg"
                        alt="image_thirty"
                        className="justify-center h-[607px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center w-[45%] mt-[58px]">
                <div className="flex flex-row justify-between items-center w-full bg-orange-600">
                  <div className="h-[2px] w-[10%] bg-white-A700" />
                  <Heading as="h5" className="mt-3.5 mb-[21px] !text-white-A700 tracking-[-0.60px] text-center">
                    <span className="text-white-A700">ASSOCIATIONS WITH </span>
                    <span className="text-black-900 text-3xl">750+ COMPANIES</span>
                  </Heading>
                  <div className="h-[2px] w-[10%] bg-white-A700" />
                </div>
              </div>
              <div className="flex flex-row w-full mt-[100px] gap-[194px] max-w-[1130px]">
                <Img src="images/img_mask_group_348x250.png" alt="image" className="w-[23%] object-cover" />
                <div className="h-[348px] w-[23%] relative">
                  <div className="flex flex-col items-center justify-center w-max h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <div className="flex flex-col items-center justify-start h-[150px] w-[150px] p-[18px] z-[1] border-orange-600 border-[29px] border-solid bg-white-A700 rounded-[50%]">
                      <Img src="images/img_mask_group_54x54.png" alt="image" className="w-[54px] object-cover" />
                    </div>
                    <div className="h-[213px] w-full mt-[-15px] bg-orange-600 shadow-3xl rounded-[32px]" />
                  </div>
                  <div className="flex flex-col items-center justify-end w-full gap-[13px] bottom-[7%] right-0 left-0 p-9 m-auto bg-gray-50 shadow-3xl absolute rounded-[32px]">
                    <Text size="4xl" as="p" className="mt-[62px] !text-orange-600 !font-bebasneue text-center">
                      5.6
                    </Text>
                    <Text as="p" className="mb-3 !text-black-900">
                      Average Package - INR
                    </Text>
                  </div>
                </div>
                <div className="h-[348px] w-[23%] relative">
                  <div className="flex flex-col items-center justify-center w-max h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <div className="flex flex-col items-center justify-center h-[150px] w-[150px] p-4 z-[1] border-cyan-900 border-[29px] border-solid bg-white-A700 rounded-[50%]">
                      <Img src="images/img_mask_group_59x59.png" alt="image" className="w-[59px] object-cover" />
                    </div>
                    <div className="h-[216px] w-[215px] mt-[-18px] bg-cyan-900 shadow-3xl rounded-[32px]" />
                  </div>
                  <div className="flex flex-col items-center justify-end w-full gap-1.5 bottom-[7%] right-0 left-0 p-3 m-auto bg-gray-50 shadow-3xl absolute rounded-[32px]">
                    <Text size="4xl" as="p" className="mt-[87px] !text-cyan-900 !font-bebasneue text-center">
                      750+
                    </Text>
                    <Text as="p" className="mb-5 !text-black-900 text-center">
                      Companies for Placements and Internships.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="h-[858px] w-full mt-[121px] relative">
                <Img
                  src="images/img_aerial_view_1.png"
                  alt="aerialviewone"
                  className="justify-center h-[858px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                />
                <div className="justify-center h-[820px] w-[99%] left-0 bottom-0 right-0 top-0 m-auto border-cyan-800 border-[3px] border-solid absolute" />
              </div>
              
              <div className="flex flex-col items-center justify-start w-full mt-[15px]">
                <Img src="images/img_rectangle_4445.png" alt="image" className="w-full object-cover" />
                <div className="h-[728px] w-full mt-[-1px] relative">
                  <Img
                    src="images/img_image_252.png"
                    alt="image252_one"
                    className="justify-center h-[727px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                  />
                  <div className="flex flex-row justify-center w-full h-full left-0 bottom-0 right-0 top-0 p-[50px] m-auto bg-gradient absolute">
                    <div className="flex flex-row justify-center w-full mt-2 max-w-[1257px]">
                      <div className="flex flex-col items-start justify-start w-full gap-[9px]">
                        <div className="flex flex-row justify-start items-start w-[92%] ml-[103px] gap-[37px]">
                          <div className="h-[313px] w-[63%] mt-[46px] relative">
                            <Heading
                              size="4xl"
                              as="h1"
                              className="w-[53%] bottom-0 right-0 m-auto !text-gray-400 tracking-[-1.80px] text-center absolute"
                            >
                              <span className="text-white-A700 text-3xl">
                                KNOWN AS
                                <br />
                              </span>
                              <span className="text-cyan_A100 text-[50px]">TULAITES</span>
                            </Heading>
                            <div className="h-[252px] w-[55%] left-0 top-0 m-auto absolute">
                              <div className="flex flex-col items-start justify-center w-full h-full gap-[45px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                                <Heading
                                  size="4xl"
                                  as="h1"
                                  className="ml-[178px] !text-pink-100_01 !font-montserrat text-center !font-bold"
                                >
                                  2,000+
                                </Heading>
                                <Text
                                  size="3xl"
                                  as="p"
                                  className="w-[79%] !font-justmeagaindownhere text-center rotate-[16deg]"
                                >
                                  Bright Students
                                </Text>
                              </div>
                              <Img
                                src="images/img_mask_group_162x183.png"
                                alt="image"
                                className="h-[162px] w-[47%] left-[13%] top-[6%] m-auto object-cover absolute"
                              />
                            </div>
                          </div>
                          <div className="h-[228px] w-[35%] relative">
                            <Img
                              src="images/img_mask_group_162x183.png"
                              alt="image"
                              className="h-[142px] w-[52%] bottom-0 right-[16%] m-auto object-cover absolute"
                            />
                            <div className="h-[203px] w-full top-0 right-0 left-0 m-auto absolute">
                              <Heading
                                size="4xl"
                                as="h1"
                                className="bottom-0 left-0 m-auto !text-pink-100_01 !font-montserrat text-center !font-bold absolute"
                              >
                                7,000+
                              </Heading>
                              <Text
                                size="3xl"
                                as="p"
                                className="w-[78%] right-0 top-0 m-auto !font-justmeagaindownhere text-center rotate-[-17deg] absolute"
                              >
                                Glorious Alumni
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row justify-between items-center w-[92%]">
                          <div className="h-[193px] w-[35%] relative">
                            <div className="flex flex-col items-end justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                              <Heading
                                size="4xl"
                                as="h1"
                                className="mr-1.5 !text-pink-100 !font-montserrat text-center !font-bold"
                              >
                                17+
                              </Heading>
                              <Text
                                size="3xl"
                                as="p"
                                className="mt-[-8px] !font-justmeagaindownhere text-center rotate-[-11deg]"
                              >
                                Years Of Educational Experience
                              </Text>
                            </div>
                            <Img
                              src="images/img_mask_group_162x183.png"
                              alt="image_forty"
                              className="h-[117px] w-[35%] right-[23%] top-[6%] m-auto object-cover absolute"
                            />
                          </div>
                          <div className="h-[249px] w-[31%] relative">
                            <div className="flex flex-col items-end justify-center w-full h-full gap-[46px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                              <Heading
                                size="4xl"
                                as="h1"
                                className="mr-[75px] !text-pink-100_01 !font-montserrat text-center !font-bold"
                              >
                                150+
                              </Heading>
                              <Text size="3xl" as="p" className="!font-justmeagaindownhere text-center rotate-[9deg]">
                                Faculty Members
                              </Text>
                            </div>
                            <Img
                              src="images/img_mask_group_162x183.png"
                              alt="image_fortyone"
                              className="h-[159px] w-[54%] left-[8%] top-[10%] m-auto object-cover absolute"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Img src="images/img_rectangle_4407_39x1728.png" alt="image_fortytwo" className="w-full object-cover" />
              <Img src="images/img_rectangle_4408_39x1728.png" alt="image" className="w-full mt-[15px] object-cover" />
            </div>
            <div className="h-[485px] w-full mt-[63px] pl-[127px] relative max-w-[1982px]">
              <div className="h-[53px] w-[12%] left-[44%] top-0 m-auto absolute">
                <Img
                  src="images/img_group_8_teal_400_01.svg"
                  alt="image_fortyfour"
                  className="justify-center h-[53px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                />
                <Text
                  as="p"
                  className="justify-center w-max left-0 bottom-0 right-0 top-3 m-auto tracking-[-0.60px] text-center absolute"
                >
                  RANKINGS
                </Text>
              </div>
              <div className="flex flex-row justify-start items-center w-[44%] bottom-0 left-[6%] m-auto absolute">
                <div className="flex flex-row justify-start items-start w-[66%] gap-[19px] z-[1]">
                  {/* <div className="h-px w-[46%] mt-[145px] rotate-[-90deg] bg-pink-900" /> */}
                  <div className="flex flex-col items-center justify-start w-[52%]">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="h-[290px] w-[290px] relative">
                        <Img
                          src="images/img_mask_group_290x290.png"
                          alt="image_fortyfive"
                          className="justify-center h-[290px] w-[290px] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                        />
                        <Text
                          size="5xl"
                          as="p"
                          className="w-max top-[32%] right-0 left-0 m-auto !text-transparent tracking-[-1.65px] !font-bebasneue bg-gradient2 bg-clip-text absolute"
                        >
                          NAAC A+
                        </Text>
                      </div>
                      <Heading
                        as="h5"
                        className="w-[78%] mt-[-28px] !text-transparent tracking-[-0.60px] text-center z-[1] bg-gradient1 bg-clip-text"
                      >
                        A+ ACCREDITATION BY UGC NAAC
                      </Heading>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-start w-[39%] ml-[-36px]">
                  <div className="flex flex-col items-center justify-start w-[87%] mt-[122px]">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="h-[290px] w-[290px] relative">
                        <Img
                          src="images/img_mask_group_290x290.png"
                          alt="image_fortysix"
                          className="justify-center h-[290px] w-[290px] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                        />
                        <Text
                          size="5xl"
                          as="p"
                          className="w-max top-[32%] right-0 left-0 m-auto !text-transparent tracking-[-1.65px] !font-bebasneue bg-gradient2 bg-clip-text absolute"
                        >
                          RANK 9
                        </Text>
                      </div>
                      <Heading
                        as="h5"
                        className="w-[85%] mt-[-28px] !text-transparent tracking-[-0.60px] text-center z-[1] bg-gradient1 bg-clip-text"
                      >
                        PRIVATE ENGG COLLEGE IN INDIA{" "}
                      </Heading>
                    </div>
                  </div>
                  <div className="h-[204px] w-px bg-pink-900" />
                </div>
              </div>
              <div className="flex flex-row items-center w-[48%] pr-[275px] gap-[91px] bottom-0 right-0 m-auto absolute">
                <div className="flex flex-col items-center justify-start w-[44%]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="h-[290px] w-[290px] relative">
                      <Img
                        src="images/img_mask_group_290x290.png"
                        alt="rank_thirtytwo"
                        className="justify-center h-[290px] w-[290px] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                      <Text
                        size="5xl"
                        as="p"
                        className="w-max top-[32%] right-0 left-0 m-auto !text-transparent tracking-[-1.65px] !font-bebasneue bg-gradient2 bg-clip-text absolute"
                      >
                        RANK 32
                      </Text>
                    </div>
                    <Heading
                      as="h5"
                      className="w-[82%] mt-[-28px] !text-transparent tracking-[-0.60px] text-center z-[1] bg-gradient1 bg-clip-text"
                    >
                      PRIVATE ENGG COLLEGE IN NORTH INDIA
                    </Heading>
                  </div>
                </div>
                <div className="w-[255px] h-px bg-pink-900" />
                <div className="flex flex-col items-center justify-start w-[44%]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="h-[290px] w-[290px] relative">
                      <Img
                        src="images/img_mask_group_290x290.png"
                        alt="image"
                        className="justify-center h-[290px] w-[290px] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                      <Text
                        size="5xl"
                        as="p"
                        className="w-max top-[32%] right-0 left-0 m-auto !text-transparent tracking-[-1.65px] !font-bebasneue bg-gradient2 bg-clip-text absolute"
                      >
                        TOP 25
                      </Text>
                    </div>
                    <Heading
                      as="h5"
                      className="w-[84%] mt-[-28px] !text-transparent tracking-[-0.60px] text-center z-[1] bg-gradient1 bg-clip-text"
                    >
                      B - SCHOOL AA+ IN NORTH INDIA
                    </Heading>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[783px] w-full mt-[55px] relative">
              <Img
                src="images/img_rectangle_4404.png"
                alt="image"
                className="h-[655px] w-full bottom-[3%] right-0 left-0 m-auto object-cover absolute"
              />
              <div className="justify-center h-[783px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                <div className="justify-center h-[783px] w-[77%] left-0 bottom-0 right-0 top-0 m-auto shadow-lg absolute" />
                <Heading
                  size="4xl"
                  as="h1"
                  className="w-[10%] top-[13%] right-0 left-0 m-auto !text-gray-400 tracking-[-1.80px] text-center absolute"
                >
                  <span className="text-black-900 text-3xl">
                    TULA’S
                    <br />
                  </span>
                  <span className="text-cyan-800 text-[50px]">AWARDS</span>
                </Heading>
                <div className="flex flex-col items-center justify-start w-[22%] gap-px bottom-[20%] right-0 left-0 m-auto shadow-md absolute">
                  <div className="h-[46px] w-px bg-cyan-800" />
                  <div className="flex flex-row justify-center w-full">
                    <div className="flex flex-row justify-center w-full">
                      <div className="h-[334px] w-full relative">
                        <Img
                          src="images/img_rectangle_4373_334x485.png"
                          alt="image"
                          className="justify-center h-[334px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                        />
                        <div className="flex flex-row justify-center w-max h-max left-0 bottom-0 right-0 top-0 px-14 py-[101px] m-auto border-white-A700 border border-solid absolute">
                          <Img
                            src="images/defaultNoData.png"
                            alt="image_fortynine"
                            className="w-[48px] mb-[70px] object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-start w-full gap-[37px] bottom-[20%] right-0 left-0 m-auto absolute">
                  <div className="h-[278px] w-[18%] shadow-sm relative">
                    <Img
                      src="images/img_rectangle_4373_278x404.png"
                      alt="image_fifty"
                      className="justify-center h-[278px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                    />
                    <div className="flex flex-row justify-center w-full h-full left-0 bottom-0 right-0 top-0 p-1 m-auto bg-pink-900_bf absolute">
                      <div className="h-[266px] w-full my-px border-white-A700 border border-solid" />
                    </div>
                  </div>
                  <div className="flex flex-row w-[61%] gap-[559px]">
                    <div className="h-[278px] w-[30%] shadow-sm cursor-pointer relative hover:shadow-sm">
                      <Img
                        src="images/img_rectangle_4373_1.png"
                        alt="image"
                        className="justify-center h-[278px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                      <div className="flex flex-row justify-center w-full h-full left-0 bottom-0 right-0 top-0 p-1 m-auto bg-pink-900_bf absolute">
                        <div className="flex flex-row justify-end w-full p-[19px] border-white-A700 border border-solid">
                          <Button
                            size="sm"
                            className="w-[59px] mt-[61px] mb-[106px] border-black-900 border border-solid"
                          >
                            <Img src="images/img_group_142.png" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-[30%] cursor-pointer hover:shadow-sm">
                      <div className="h-[278px] w-full shadow-sm relative">
                        <Img
                          src="images/img_rectangle_4373_2.png"
                          alt="image"
                          className="justify-center h-[278px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                        />
                        <div className="flex flex-row justify-center w-full h-full left-0 bottom-0 right-0 top-0 p-1 m-auto bg-pink-900_bf absolute">
                          <div className="flex flex-row justify-start w-full p-5 border-white-A700 border border-solid">
                            <Button
                              size="sm"
                              className="w-[59px] mt-[60px] mb-[105px] border-black-900 border border-solid"
                            >
                              <Img src="images/img_group_143.png" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-start w-[18%]">
                    <div className="h-[278px] w-full shadow-sm relative">
                      <Img
                        src="images/img_rectangle_4373_3.png"
                        alt="image_fiftyone"
                        className="justify-center h-[278px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                      <div className="flex flex-row justify-center w-full h-full left-0 bottom-0 right-0 top-0 p-1 m-auto bg-pink-900_bf absolute">
                        <div className="h-[266px] w-full my-px border-white-A700 border border-solid" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[704px] w-full mt-[127px] relative max-w-[1409px]">
              <Heading as="h5" className="bottom-[20%] right-0 m-auto !text-lime-900 text-center absolute">
                ADMISSION HELPLINE NO. +91-6366937159
              </Heading>
              <div className="flex flex-row justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                <div className="flex flex-row justify-between items-start w-full">
                  <div className="flex flex-col items-start justify-start w-[62%]">
                    <div className="flex flex-row justify-between items-start w-full">
                      <div className="flex flex-col items-end justify-start w-[32%] mt-[41px] gap-[58px]">
                        <Heading size="xl" as="h3" className="mr-[31px] !text-cyan-800 tracking-[-0.90px] text-center">
                          KEY LINKS
                        </Heading>
                        <div className="flex flex-col items-start justify-start w-full gap-[25px]">
                          <div className="flex flex-row justify-between items-start w-[84%]">
                            <Img
                              src="images/img_mask_group_9x9.png"
                              alt="image_fiftytwo"
                              className="w-[9px] mt-[7px] object-cover"
                            />
                            <Heading as="h5" className="tracking-[-0.60px] text-center">
                              ADMISSIONS
                            </Heading>
                          </div>
                          <div className="flex flex-row justify-between items-start w-full">
                            <Img
                              src="images/img_mask_group_9x9.png"
                              alt="image"
                              className="w-[9px] mt-[7px] object-cover"
                            />
                            <Heading as="h5" className="tracking-[-0.60px] text-center">
                              ACADEMIC CALENDER
                            </Heading>
                          </div>
                          <div className="flex flex-row justify-between items-start w-[88%]">
                            <Img
                              src="images/img_mask_group_9x9.png"
                              alt="image_fiftyfour"
                              className="w-[9px] mt-[7px] object-cover"
                            />
                            <Heading as="h5" className="tracking-[-0.60px] text-center">
                              EXAM DETAILS
                            </Heading>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start mb-5 gap-[34px]">
                        <Heading size="2xl" as="h2" className="!text-cyan-800 tracking-[-1.02px] text-center">
                          CONTACTS
                        </Heading>
                        <Img src="images/img_image_214.png" alt="image214_one" className="w-full object-cover" />
                      </div>
                    </div>
                    <div className="flex flex-row justify-between items-start w-[89%] mt-[13px]">
                      <div className="flex flex-row justify-between items-start w-auto mt-[11px] gap-[93px]">
                        <Img
                          src="images/img_mask_group_9x9.png"
                          alt="image_fiftyfive"
                          className="w-[9px] mt-[7px] object-cover"
                        />
                        <Heading as="h5" className="tracking-[-0.60px] text-center">
                          LATEST NEWS
                        </Heading>
                      </div>
                      <Heading size="md" as="h4" className="mb-[7px] !text-cyan-900_01 tracking-[6.96px] text-center">
                        ADDRESS
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-between items-center w-[96%] z-[1]">
                      <div className="flex flex-row justify-between items-start w-auto gap-16">
                        <Img
                          src="images/img_mask_group_9x9.png"
                          alt="image_fiftysix"
                          className="w-[9px] mt-[7px] object-cover"
                        />
                        <Heading as="h5" className="tracking-[-0.60px] text-center">
                          CODE OF CONDUCT
                        </Heading>
                      </div>
                      <Text size="lg" as="p" className="w-[34%] !text-gray-600 text-center">
                        <span className="text-gray-600">
                          Tulas Institute, Dhoolkot Near Selaqui, Dhulkot Rd, Dehradun,{" "}
                        </span>
                        <span className="text-gray_800_02 font-semibold">Uttarakhand </span>
                      </Text>
                    </div>
                    <div className="flex flex-row justify-between items-start w-[92%] z-[2]">
                      <div className="flex flex-row justify-between items-start w-auto gap-32">
                        <Img
                          src="images/img_mask_group_9x9.png"
                          alt="image"
                          className="w-[9px] mt-[7px] object-cover"
                        />
                        <Heading as="h5" className="tracking-[-0.60px] text-center">
                          AICTE
                        </Heading>
                      </div>
                      <Heading size="md" as="h4" className="mt-[21px] !text-cyan-900_01 tracking-[6.96px] text-center">
                        TELEPHONE
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-between items-start w-[87%]">
                      <div className="flex flex-row justify-between items-start w-auto gap-32">
                        <Img
                          src="images/img_mask_group_9x9.png"
                          alt="image"
                          className="w-[9px] mt-[7px] object-cover"
                        />
                        <Heading as="h5" className="tracking-[-0.60px] text-center">
                          AISHE
                        </Heading>
                      </div>
                      <Text size="lg" as="p" className="mt-[7px] !text-gray-600 text-center">
                        0135-2699300
                      </Text>
                    </div>
                    <div className="flex flex-row justify-between items-start w-[93%] mt-4">
                      <div className="flex flex-col items-center justify-start w-[25%] gap-[26px]">
                        <div className="flex flex-row justify-between items-start w-full">
                          <Img
                            src="images/img_mask_group_9x9.png"
                            alt="image_fiftynine"
                            className="w-[9px] mt-[7px] object-cover"
                          />
                          <Heading as="h5" className="tracking-[-0.60px] text-center">
                            NAAC
                          </Heading>
                        </div>
                        <div className="flex flex-row justify-between items-start w-[99%]">
                          <Img
                            src="images/img_mask_group_9x9.png"
                            alt="image_sixty"
                            className="w-[9px] mt-[5px] object-cover"
                          />
                          <Heading as="h5" className="tracking-[-0.60px] text-center">
                            IQAC
                          </Heading>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[29%] mt-2.5">
                        <div className="h-[53px] w-full relative">
                          <Img
                            src="images/img_group_8_pink_900.svg"
                            alt="image_sixtyone"
                            className="justify-center h-[53px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                          />
                          <a href="#" className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                            <Text as="p" className="tracking-[-0.60px] text-center">
                              CONTACT US
                            </Text>
                          </a>
                        </div>
                        <Img
                          src="images/img_group_100.png"
                          alt="image_sixtytwo"
                          className="w-[34px] mt-[92px] object-cover"
                        />
                        <Text size="s" as="p" className="mt-2 !text-pink-800_01 text-center">
                          BACK TO TOP
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[27%] mt-[35px]">
                    <Heading as="h5" className="w-[68%] !text-cyan-800 tracking-[-0.60px] text-center">
                      FOLLOW THE <br />
                      @TULA STORY
                    </Heading>
                    <Img src="images/img_group_61.png" alt="image" className="w-[49%] mt-3 object-cover" />
                    <div className="flex flex-col items-centfer justify-start w-full mt-[74px] gap-[71px]">
                      <Text size="xs" as="p" className="!text-gray-800 text-center">
                        Tula’s Institute was established in 2006, under the aegis of Rishabh Educational Trust, Dehradun
                        with the vision of offering excellent academics along with fostering the professional and
                        personal personas of every student of the institute. Tula’s Institute is dedicated to serve the
                        communities by recognizing the diverse needs of individuals.
                      </Text>
                      <Text size="xs" as="p" className="!text-gray-800 text-center">
                        Tula’s Institute was established in 2006, under the aegis of Rishabh Educational Trust, Dehradun
                        with the vision of offering excellent academics along with fostering the professional and
                        personal personas of every student of the institute. Tula’s Institute is dedicated to serve the
                        communities by recognizing the diverse needs of individuals.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
