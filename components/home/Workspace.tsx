import FeaturesGrid from "./FeaturesGrid";

const tabs = [
  {
    title: "Create",
    text: "Easy-to-use apps for each team with no code",
  },
  {
    title: "Organize",
    text: "Work into custom hierarchies, fields and formulas",
  },
  {
    title: "Visualize",
    text: "Workflows with Tables, Boards, Timelines, Charts & more.",
  },
];

const Workspace = () => {
  return (
    <section className="container mb-14 md:mb-[120px] xl:mb-[200px]">
      <div className="wrapper-wide flex flex-col xl:grid grid-cols-2">
        {/* Heading */}
        <div className="flex justify-center xl:block">
          <div className="space-y-3 md:space-y-4 text-center xl:text-left xl:max-w-[491px]">
            <h2>
              Build your <br className="hidden xl:block" />{" "}
              <span className="relative">
                own
                <span className="bg-oval-green-light absolute bottom-2 left-0 w-full h-[24px] md:h-[39px] xl:h-[46px] -z-10"></span>
              </span>{" "}
              workspace.
            </h2>
            <p className="max-w-[461px] mx-auto xl:mx-0 copy">
              It will take a couple of hours, but will save your company weeks
              in the long term.
            </p>
          </div>
        </div>

        <FeaturesGrid tabs={tabs} />
      </div>
    </section>
  );
};

export default Workspace;
