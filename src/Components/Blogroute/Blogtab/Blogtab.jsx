import { Tabs } from "@mui/base/Tabs";
import { TabsList } from "@mui/base/TabsList";
import { TabPanel } from "@mui/base/TabPanel";
import { Tab } from "@mui/base/Tab";
import TrendingArticles from "../TrendingArticles/TrendingArticles";
import { ChevronRight } from "lucide-react";
import Blogtabcontent2 from "../Blogtabcontent2/Blogtabcontent2";
import Blogtabcontent3 from "../Blogtabcontent3/Blogtabcontent3";
import Blogtabcontent4 from "../Blogtabcontent4/Blogtabcontent4";
import Blogtabcontent5 from "../Blogtabcontent5/Blogtabcontent4";
import Blogtabcontent6 from "../Blogtabcontent6/Blogtabcontent4";

export default function UnstyledTabsVertical() {
  return (
    <>
      <div className="max-w-[100%] mx-auto py-[20px] lg:py-[40px]">
        <div className="w-[90%] mx-auto grid grid-cols-1">
          <Tabs defaultValue={0} orientation="vertical">
            <div className=" grid grid-cols-4  gap-14">
              <div className="h-fit col-span-1 md:col-span-2 lg:col-span-1">
                <TabsList
                  className="w-[100%] md:flex flex-col gap-5 py-7 px-3 bg-white rounded-lg hidden h-[100%]"
                  id="certi"
                >
                  <Tab
                    slotProps={{
                      root: ({ selected, disabled }) => ({
                        className: `font-[poppins]  ${
                          selected ? "text-white  bg-[#FF9F00] " : "text-black"
                        } ${
                          disabled
                            ? "cursor-not-allowed opacity-50"
                            : "cursor-pointer"
                        } text-[16px] w-full px-1 py-2   flex justify-between items-center focus:outline-0 rounded-md px-3`,
                      }),
                    }}
                  >
                    Trending Articles <ChevronRight size={16}></ChevronRight>
                  </Tab>
                  <Tab
                    slotProps={{
                      root: ({ selected, disabled }) => ({
                        className: `font-[poppins]  ${
                          selected ? "text-white  bg-[#FF9F00] " : "text-black"
                        } ${
                          disabled
                            ? "cursor-not-allowed opacity-50"
                            : "cursor-pointer"
                        } text-[16px] w-full px-1 py-2   flex justify-between items-center focus:outline-0 rounded-md px-3`,
                      }),
                    }}
                  >
                    AI & ML <ChevronRight size={16}></ChevronRight>
                  </Tab>
                  <Tab
                    slotProps={{
                      root: ({ selected, disabled }) => ({
                        className: `font-[poppins]  ${
                          selected ? "text-white  bg-[#FF9F00] " : "text-black"
                        } ${
                          disabled
                            ? "cursor-not-allowed opacity-50"
                            : "cursor-pointer"
                        } text-[16px] w-full px-1 py-2   flex justify-between items-center focus:outline-0 rounded-md px-3`,
                      }),
                    }}
                  >
                    Block Chain <ChevronRight size={16}></ChevronRight>
                  </Tab>
                  <Tab
                    slotProps={{
                      root: ({ selected, disabled }) => ({
                        className: `font-[poppins]  ${
                          selected ? "text-white  bg-[#FF9F00] " : "text-black"
                        } ${
                          disabled
                            ? "cursor-not-allowed opacity-50"
                            : "cursor-pointer"
                        } text-[16px] w-full px-1 py-2   flex justify-between items-center focus:outline-0 rounded-md px-3`,
                      }),
                    }}
                  >
                    Cloud Computing <ChevronRight size={16}></ChevronRight>
                  </Tab>
                  <Tab
                    slotProps={{
                      root: ({ selected, disabled }) => ({
                        className: `font-[poppins]  ${
                          selected ? "text-white  bg-[#FF9F00] " : "text-black"
                        } ${
                          disabled
                            ? "cursor-not-allowed opacity-50"
                            : "cursor-pointer"
                        } text-[16px] w-full px-1 py-2   flex justify-between items-center focus:outline-0 rounded-md px-3`,
                      }),
                    }}
                  >
                    Cyber Security <ChevronRight size={16}></ChevronRight>
                  </Tab>
                  <Tab
                    slotProps={{
                      root: ({ selected, disabled }) => ({
                        className: `font-[poppins]  ${
                          selected ? "text-white  bg-[#FF9F00] " : "text-black"
                        } ${
                          disabled
                            ? "cursor-not-allowed opacity-50"
                            : "cursor-pointer"
                        } text-[16px] w-full px-1 py-2   flex justify-between items-center focus:outline-0 rounded-md px-3`,
                      }),
                    }}
                  >
                    Data Science <ChevronRight size={16}></ChevronRight>
                  </Tab>
                </TabsList>
              </div>

              <div className="col-span-4 md:col-span-2 lg:col-span-3">
                <TabPanel value={0}>
                  <TrendingArticles></TrendingArticles>
                </TabPanel>
                <TabPanel value={1}>
                  <Blogtabcontent2></Blogtabcontent2>
                </TabPanel>
                <TabPanel value={2}>
                  <Blogtabcontent3></Blogtabcontent3>
                </TabPanel>
                <TabPanel value={3}>
                  <Blogtabcontent4></Blogtabcontent4>
                </TabPanel>
                <TabPanel value={4}>
                  <Blogtabcontent5></Blogtabcontent5>
                </TabPanel>
                <TabPanel value={5}>
                  <Blogtabcontent6></Blogtabcontent6>
                </TabPanel>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </>
  );
}
