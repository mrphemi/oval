import { useState } from "react";

import Image from "next/image";

import { classNames } from "@/utils";
import { Tab } from "@/types";

import ChevronRight from "@/components/icons/ChevronRight";

import Illustration from "@/public/assets/images/home/workspace.png";

interface Props {
  tabs: Tab[];
}

const FeaturesGrid = ({ tabs }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      {/* Image */}
      <div className="max-w-[705px] my-[30px] md:mt-[40px] md:mb-[68px] xl:my-0 xl:row-span-2">
        <Image src={Illustration} alt="Workspace Graphic" />
      </div>

      {/* Tabs */}
      <div className="flex flex-col md:flex-row xl:flex-col gap-y-6 md:gap-x-5 xl:mt-8">
        {tabs.map((tab: any, i: number) => (
          <div
            key={i}
            className="flex gap-x-3 md:basis-1/3 xl:basis-full cursor-pointer"
            onClick={() => setActiveIndex(i)}
          >
            <ChevronRight
              className={classNames(
                "mt-[3px]",
                activeIndex === i ? "visible" : "invisible"
              )}
            />
            <div
              className={classNames(
                "w-full max-w-[430px] pb-[10px] xl:pb-4 space-y-3 border-b",
                activeIndex === i ? "border-oval-orange" : "border-transparent"
              )}
            >
              <h3 className="font-semibold text-lg xl:text-xl leading-[22px] xl:leading-6">
                {tab.title}
              </h3>
              <p className="text-sm xl:text-base leading-6 xl:leading-[26px]">
                {tab.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturesGrid;
