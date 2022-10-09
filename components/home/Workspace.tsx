import Image from "next/image";

import Illustration from "../../public/assets/images/home/workspace.png";

const Workspace = () => {
  return (
    <section className="container mb-14 md:mb-[120px] xl:mb-[200px]">
      <div className="wrapper-wide flex flex-col xl:grid grid-cols-2">
        {/* Heading */}
        <div className="xl:w-[491px]">
          <div className="space-y-[9px] md:space-y-4">
            <h2 className="w-[288px] md:w-full mx-auto xl:mx-0 text-center xl:text-left">
              Build your <br className="hidden xl:block" />{" "}
              <span className="relative">
                own
                <span className="bg-green-light absolute bottom-2 left-0 w-full h-[24px] md:h-[39px] xl:h-[46px] -z-10"></span>
              </span>{" "}
              workspace.
            </h2>
            <p className="w-[288px] md:w-[490px] xl:w-[461px] mx-auto xl:mx-0 text-center xl:text-left">
              It will take a couple of hours, but will save your company weeks
              in the long term.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="max-w-[705px] my-[30px] md:mt-[40px] md:mb-[68px] xl:my-0 xl:row-span-2">
          <Image src={Illustration} alt="Workspace Graphic" />
        </div>

        {/* Tabs */}
        <div className="flex flex-col md:flex-row xl:flex-col gap-y-6 md:gap-x-5 xl:mt-8">
          {/* Tab 1 */}
          <div className="flex gap-x-3">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-[3px]"
            >
              <path
                d="M5 2L11 8L5 14"
                stroke="black"
                stroke-width="2"
                stroke-linejoin="round"
              />
            </svg>
            <div className="w-[250px] md:w-[185px] xl:w-[430px] pb-[10px] xl:pb-4 space-y-[9px] border-b border-orange">
              <h3 className="font-semibold text-lg xl:text-xl leading-[22px] xl:leading-6">
                Create
              </h3>
              <p className="text-sm xl:text-base leading-6 xl:leading-[26px]">
                Easy-to-use apps for each team with no code.
              </p>
            </div>
          </div>
          {/* Tab 2 */}
          <div className="flex gap-x-3">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="invisible mt-[3px]"
            >
              <path
                d="M5 2L11 8L5 14"
                stroke="black"
                stroke-width="2"
                stroke-linejoin="round"
              />
            </svg>
            <div className="w-[250px] md:w-[185px] xl:w-[430px] pb-[10px] xl:pb-4 space-y-[9px] border-b border-orange">
              <h3 className="font-semibold text-lg xl:text-xl leading-[22px] xl:leading-6">
                Organize
              </h3>
              <p className="text-sm xl:text-base leading-6 xl:leading-[26px]">
                Work into custom hierarchies, fields and formulas.
              </p>
            </div>
          </div>
          {/* Tab 3 */}
          <div className="flex gap-x-3">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="invisible mt-[3px]"
            >
              <path
                d="M5 2L11 8L5 14"
                stroke="black"
                stroke-width="2"
                stroke-linejoin="round"
              />
            </svg>
            <div className="w-[250px] md:w-[185px] xl:w-[430px] pb-[10px] xl:pb-4 space-y-[9px] border-b border-orange">
              <h3 className="font-semibold text-lg xl:text-xl leading-[22px] xl:leading-6">
                Visualize
              </h3>
              <p className="text-sm xl:text-base leading-6 xl:leading-[26px]">
                Workflows with Tables, Boards, Timelines, Charts & more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workspace;
