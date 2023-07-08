import Stat from "../common/Stat";

const Stats = () => {
  return (
    <section className="container mb-14 md:mb-[120px] xl:mb-[200px]">
      <div className="wrapper space-y-8 md:space-y-16">
        <div className="grid place-items-center md:grid-cols-2 gap-10 xl:gap-0">
          <p className="text-lg md:text-xl xl:text-2xl max-w-[250px] md:max-w-[397px] xl:max-w-[384px] mx-auto text-center xl:text-left md:col-span-2 xl:place-self-end xl:mx-0">
            Businesses all over the world trust Oval to build their own workflow
          </p>
          <Stat
            title="10 years"
            subtitle="In business"
            className="text-center xl:-mt-60"
          />
          <Stat
            title="75,000+"
            subtitle="Customers"
            className="text-center md:mt-14 xl:mt-40 xl:place-self-end"
          />
          <Stat
            title="1,092"
            subtitle="Partner Companies"
            className="text-center xl:-mt-60"
          />
          <Stat
            title="39+"
            subtitle="Branch Offices"
            className="text-center md:mt-14 xl:mt-40 xl:place-self-center"
          />
          <hr className="bg-oval-orange h-[1px] w-40 border-none mx-auto md:mx-0 md:place-self-center md:-mt-12" />
        </div>
      </div>
    </section>
  );
};

export default Stats;
