import Link from "next/link";

import Nav from "../common/Nav";

const Header = () => {
  return (
    <>
      <div className="bg-[#f9f9f9] min-h-[505px] md:min-h-[702px] xl:min-h-[940px]">
        <Nav />
        <header className="mt-5 md:mt-12 xl:mt-[105px]">
          <div className="space-y-4 md:space-y-6 text-center">
            <h1 className="max-w-[280px] md:max-w-[600px] xl:max-w-[836px] mx-auto">
              Make your project & tasks well planned
            </h1>
            <p className="max-w-[280px] md:max-w-[490px] mx-auto copy">
              Plan, track, and do all your work in one place. Steer the ship
              together with your team.
            </p>
          </div>

          <div className="flex justify-center space-x-4 mt-6 md:mt-10">
            <input
              type="email"
              className="hidden md:block border border-oval-grey-light rounded-lg px-5 py-4 xl:py-5"
              placeholder="Enter your work email.."
            />

            <Link
              href="/download"
              className="text-white text-[15px] md:text-base py-[13px] md:py-4 xl:py-5 px-6 md:px-10 xl:px-[55px] font-bold bg-oval-orange rounded-lg"
            >
              Try for free
            </Link>

            <button className="inline-block md:hidden border border-oval-grey-light py-[13px] md:py-4 px-3 md:px-5 rounded-lg">
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
        </header>
      </div>
    </>
  );
};

export default Header;
