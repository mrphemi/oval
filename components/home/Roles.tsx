import FeaturesStacked from "./FeaturesStacked";

const tabs = [
  {
    title: "Align",
    text: "ideas and knowledge with real-time collaborative wiki.",
  },
  {
    title: "Link",
    text: "Visually by building roadmaps that are always up-to-date.",
  },
  {
    title: "Decentralize",
    text: "Smoothly when everybody knows what's important.",
  },
];

const Roles = () => {
  return (
    <section className="container mb-14 md:mb-[120px] xl:mb-[200px]">
      <div className="wrapper space-y-8 md:space-y-16">
        {/* Heading */}
        <div className="flex justify-center">
          <div className="space-y-3 md:space-y-4 text-center max-w-[839px]">
            <h2>
              Bring all the roles{" "}
              <span className="relative">
                together.
                <span className="bg-oval-blue-light absolute bottom-2 left-0 w-full h-[24px] md:h-[39px] xl:h-[46px] -z-10"></span>
              </span>{" "}
            </h2>
            <p className="max-w-[461px] mx-auto copy">
              We believe in autonomous teams that own their work and their piece
              of workspace.
            </p>
          </div>
        </div>

        <FeaturesStacked tabs={tabs} />
      </div>
    </section>
  );
};

export default Roles;
