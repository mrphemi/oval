import FeaturesGrid from "./FeaturesGrid";

const tabs = [
  {
    title: "Capture",
    text: "Easy-to-use apps for each team with no code",
  },
  {
    title: "Plan",
    text: "Work into custom hierarchies, fields and formulas.",
  },
  {
    title: "Execute",
    text: "Workflows with Tables, Boards, Timelines, Charts & more",
  },
];

const Focus = () => {
  return (
    <section className="container mb-14 md:mb-[120px] xl:mb-[200px]">
      <div className="wrapper-wide flex flex-col xl:grid grid-cols-2">
        {/* Heading */}
        <div className="flex justify-center xl:block">
          <div className="space-y-3 md:space-y-4 text-center xl:text-left xl:max-w-[550px]">
            <h2 className="max-w-[288px] md:max-w-none md:w-full mx-auto xl:mx-0">
              Focus on{" "}
              <span className="relative">
                meaningful
                <span className="bg-oval-gold absolute bottom-2 left-0 w-full h-[24px] md:h-[39px] xl:h-[46px] -z-10"></span>
              </span>{" "}
              work.
            </h2>
            <p className="max-w-[461px] mx-auto xl:mx-0 copy">
              Your workspace naturally maps the way you work, so there is
              nothing to be distracted by.
            </p>
          </div>
        </div>

        <FeaturesGrid tabs={tabs} />
      </div>
    </section>
  );
};

export default Focus;
