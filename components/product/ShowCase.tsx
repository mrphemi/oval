import Image from "next/image";
import ShowCaseImgMain from "@/public/assets/images/product/showcase-main.jpg";
import ShowCaseImgLeft from "@/public/assets/images/product/showcase-img-left.jpg";
import ShowCaseImgRight from "@/public/assets/images/product/showcase-img-right.jpg";

const ShowCase = () => {
  return (
    <section className="wrapper mt-16 md:mt-28 xl:mt-44">
      <div className="text-center space-y-4">
        <h2 className="max-w-[546px] mx-auto">
          Keep your work bundled{" "}
          <span className="relative">
            together.
            <span className="bg-oval-blue-light absolute bottom-2 left-0 w-full h-[24px] md:h-[39px] xl:h-[46px] -z-10"></span>
          </span>{" "}
        </h2>
        <p className="max-w-[461px] mx-auto copy">
          Each item in your database is its own page. Keep all related work in
          one spot.
        </p>
      </div>

      <div className="mt-4 md:mt-10 xl:mt-14">
        <Image src={ShowCaseImgMain} priority alt="Application frame" />
      </div>
      <div className="flex flex-col md:flex-row gap-y-7 md:gap-x-11 xl:gap-x-14 mt-10 md:mt-8 xl:mt-14">
        <div className="space-y-4 xl:space-y-6">
          <Image src={ShowCaseImgLeft} priority alt="Application frame" />
          <div className="space-y-2">
            <h3 className="font-semibold md:text-[18px] xl:text-2xl">
              Real-time collaboration
            </h3>
            <p className="text-sm xl:text-base md:w-4/5">
              Work on the same page at the same time with as many teammates as
              you want.
            </p>
          </div>
        </div>
        <div className="space-y-4 xl:space-y-6">
          <Image src={ShowCaseImgRight} priority alt="Application frame" />
          <div className="space-y-2">
            <h3 className="font-semibold md:text-[18px] xl:text-2xl">
              Track your task
            </h3>
            <p className="text-sm xl:text-base md:w-4/5">
              Add a filter to see only your tasks. Easily toggle between tasks
              for you and tasks for the whole team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
