import { useState } from "react";

import Image from "next/image";

import { classNames } from "@/utils";
import { Tab } from "@/types";

import ChevronRight from "@/components/icons/ChevronRight";

import Illustration from "../../public/assets/images/home/roles.png";

interface Props {
  tabs: Tab[];
}

const FeaturesStacked = ({ tabs }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-y-6">
        {tabs.map((tab: any, i: number) => (
          <div
            key={i}
            className={classNames(
              "flex gap-x-3 md:basis-1/3 md:pt-8 cursor-pointer",
              activeIndex === i
                ? "md:border-t md:border-oval-orange"
                : " md:border-t md:border-oval-grey-light"
            )}
            onClick={() => setActiveIndex(i)}
          >
            <ChevronRight
              className={classNames(
                "mt-3 md:mt-[2px]",
                activeIndex === i ? "visible" : "invisible"
              )}
            />
            <div
              className={classNames(
                "w-full max-w-[430px] space-y-3 pt-[10px] md:pt-0 border-t md:border-none",
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

      {/* Image */}
      <div className="">
        <Image src={Illustration} alt="Workspace Graphic" />
      </div>
    </>
  );
};

export default FeaturesStacked;
