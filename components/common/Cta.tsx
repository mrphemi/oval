import Link from "next/link";

// TODO: position small avatars

const Cta = () => {
  return (
    <div className="relative -mt-20 md:-mt-56 xl:-mt-80">
      <div className="mt-20 md:mt-32 xl:mt-52 pt-20 pb-12 md:pt-24 xl:pt-44 md:pb-28 xl:pb-48 bg-oval bg-no-repeat bg-cover bg-center md:bg-[center_top] max-w-screen-xl mx-auto">
        <div className="text-center">
          <h2 className="max-w-[280px] md:max-w-[623px] xl:max-w-[650px] mx-auto mb-7 md:mb-8 xl:mb-12">
            Oval is for Everyone. Easy and Free
          </h2>
          <Link
            href="/download"
            className="inline-block text-white text-[15px] md:text-base py-[13px] md:py-4 xl:py-5 px-6 md:px-10 xl:px-[55px] font-bold bg-oval-orange rounded-lg"
          >
            Try for free
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cta;
