import { ComponentPropsWithoutRef } from "react";

import { classNames } from "@/utils";

interface StatType extends ComponentPropsWithoutRef<"div"> {
  title: string;
  subtitle: string;
}

const Stat = ({ title, subtitle, className }: StatType) => {
  return (
    <div className={classNames("w-fit", className ? className : "")}>
      <div className="md:space-y-4">
        <p className="text-center font-serif italic text-black text-[64px] md:text-7xl xl:text-[100px] relative">
          {title}
          <span className="bg-oval-gold absolute bottom-5 md:bottom-1 left-0 w-full h-[10px] md:h-5 -z-10"></span>
        </p>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Stat;
