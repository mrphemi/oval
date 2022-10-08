import Image from "next/image";
import Link from "next/link";

import Graph from "../../public/assets/images/home/graph.png";

const Header = () => {
  return (
    <header className="my-5 md:my-12 2xl:my-[105px]">
      <div className="space-y-[26px] md:space-y-[42px] 2xl:space-y-[48px]">
        <div className="space-y-[18px] md:space-y-6">
          <h1 className="font-serif text-[34px] md:text-5xl 2xl:text-6xl leading-[46px] md:leading-[60px] 2xl:leading-[74px] text-center w-[280px] md:w-[600px] 2xl:w-[836px] mx-auto">
            Simpler tool that freedom your work way.
          </h1>
          <p className="para text-center w-[280px] md:w-[490px] mx-auto">
            Build your own workspace to replace isolated tools and bring
            everyone together.
          </p>
        </div>
        <div className="flex gap-x-4 2xl:gap-x-6 justify-center">
          <Link href="/download" passHref>
            <a className="text-white text-[15px] md:text-base py-[13px] md:py-4 2xl:py-5 px-6 md:px-10 2xl:px-[55px] font-bold bg-orange rounded-lg">
              Try for free
            </a>
          </Link>
          <button className="inline-block border border-grey-light py-[13px] md:py-4 px-3 md:px-5 rounded-lg">
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

      <div className="max-w-[1235px] mx-auto mt-[42px] md:mt-[60px] 2xl:mt-[87px] mb-8 md:mb-16 2xl:mb-[74px]">
        <Image
          width={Graph.width / 2}
          height={Graph.height / 2}
          src={Graph}
          priority
          alt="Application frame"
        />
      </div>

      <div className="text-center space-y-[11px] md:space-y-[14px]">
        <p className="text-lg md:text-[22px] 2xl:text-2xl leading-[21px] md:leading-[27px] 2xl:leading-[29px] text-black font-semibold">
          Tools erect walls
        </p>
        <p className="para w-[280px] md:w-[567px] 2xl:w-[657px] mx-auto">
          Collaboration is a struggle, when everybody uses a different app. We
          have the solution for that.
        </p>
      </div>
    </header>
  );
};

export default Header;
