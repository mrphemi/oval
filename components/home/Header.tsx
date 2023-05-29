import Image from "next/image";
import Link from "next/link";

import Graph from "@/public/assets/images/home/graph.png";

const Header = () => {
  return (
    <header className="mt-5 mb-14 md:mt-12 md:mb-[120px] xl:mt-[105px] xl:mb-[200px]">
      <div className="space-y-[26px] md:space-y-[42px] xl:space-y-[48px]">
        <div className="space-y-[18px] md:space-y-6">
          <h1 className="text-center max-w-[280px] md:max-w-[600px] xl:max-w-[836px] mx-auto">
            Simpler tool that{" "}
            <span className="relative">
              freedom{" "}
              <span className="bg-oval-gold absolute bottom-2 left-0 md:-left-3 xl:left-0 w-full h-[24px] md:h-[39px] xl:h-[46px] -z-10"></span>
            </span>
            your work way.
          </h1>
          <p className="paragraph text-center max-w-[280px] md:max-w-[490px] mx-auto">
            Build your own workspace to replace isolated tools and bring
            everyone together.
          </p>
        </div>
        <div className="flex gap-x-4 xl:gap-x-6 justify-center">
          <Link
            href="/download"
            className="text-white text-[15px] md:text-base py-[13px] md:py-4 xl:py-5 px-6 md:px-10 xl:px-[55px] font-bold bg-oval-orange rounded-lg"
          >
            Try for free
          </Link>
          <button className="inline-block border border-oval-grey-light py-[13px] md:py-4 px-3 md:px-5 rounded-lg">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.8333 9.58337L5.83325 15.8334V3.33337L15.8333 9.58337Z"
                fill="#FF6846"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="max-w-[1235px] mx-auto mt-[42px] md:mt-[60px] xl:mt-[87px] mb-8 md:mb-16 xl:mb-[74px]">
        <Image src={Graph} priority alt="Application frame" />
      </div>

      <div className="text-center space-y-[11px] md:space-y-[14px]">
        <p className="text-lg md:text-[22px] xl:text-xl leading-[21px] md:leading-[27px] xl:leading-[29px] text-black font-semibold">
          Tools erect walls
        </p>
        <p className="paragraph max-w-[280px] md:max-w-[567px] xl:max-w-[657px] mx-auto">
          Collaboration is a struggle, when everybody uses a different app. We
          have the solution for that.
        </p>
      </div>
    </header>
  );
};

export default Header;
