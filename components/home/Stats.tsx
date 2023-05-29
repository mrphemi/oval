import { ComponentPropsWithoutRef } from "react";

import { classNames } from "@/utils";

interface StatType extends ComponentPropsWithoutRef<"div"> {
  title: string;
  subtitle: string;
}

const Stats = () => {
  return (
    <section className="container mb-14 md:mb-[120px] xl:mb-[200px]">
      <div className="wrapper space-y-8 md:space-y-16">
        <div className="grid place-items-center md:grid-cols-2 gap-10 xl:gap-0">
          <p className="text-lg md:text-xl xl:text-2xl max-w-[250px] md:max-w-[397px] xl:max-w-[384px] mx-auto text-center xl:text-left md:col-span-2 xl:place-self-end xl:mx-0">
            Businesses all over the world trust Oval to build their own workflow
          </p>
          <Stat title="10 years" subtitle="In business" className="xl:-mt-60" />
          <Stat
            title="75,000+"
            subtitle="Customers"
            className="md:mt-14 xl:mt-40 xl:place-self-end"
          />
          <Stat
            title="1,092"
            subtitle="Partner Companies"
            className="xl:-mt-60"
          />
          <Stat
            title="39+"
            subtitle="Branch Offices"
            className="md:mt-14 xl:mt-40 xl:place-self-center"
          />
          <hr className="bg-oval-orange h-[1px] w-40 border-none mx-auto md:mx-0 md:place-self-center md:-mt-12" />
        </div>
      </div>
    </section>
  );
};

export default Stats;

const Stat = ({ title, subtitle, className }: StatType) => {
  return (
    <div className={classNames("w-fit", className ? className : "")}>
      <div className="space-y-4 text-center">
        <p className="font-serif italic text-black text-[64px] md:text-7xl xl:text-[100px] relative">
          {title}
          <span className="bg-oval-gold absolute bottom-5 md:bottom-1 left-0 w-full h-[10px] md:h-5 -z-10"></span>
        </p>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};
