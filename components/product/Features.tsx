import Image, { StaticImageData } from "next/image";

import Chat from "@/public/assets/images/icons/chat.svg";
import Eye from "@/public/assets/images/icons/eye.svg";
import Unlock from "@/public/assets/images/icons/unlock.svg";
import PenTool from "@/public/assets/images/icons/pen-tool.svg";
import Restore from "@/public/assets/images/icons/restore.svg";
import News from "@/public/assets/images/icons/news.svg";

import Stat from "../common/Stat";

const Features = () => {
  return (
    <section className="md:bg-bitmap-pattern-sm bg-no-repeat md:bg-[calc(100%+130px)_90%] xl:bg-[right_center]">
      <div className="wrapper mt-16 md:mt-28 xl:mt-44">
        <div className="grid xl:grid-cols-2 gap-y-3 md:gap-y-4 text-center xl:text-left">
          <h2 className="max-w-[288px] md:max-w-none xl:max-w-lg mx-auto xl:mx-0">
            A Plan to{" "}
            <span className="relative">
              succeed
              <span className="bg-oval-green-light absolute bottom-2 left-0 w-full h-[24px] md:h-[39px] xl:h-[46px] -z-10"></span>
            </span>{" "}
            at scale
          </h2>
          <p className="max-w-[461px] mx-auto xl:mx-0 xl:self-end xl:mb-2 copy">
            Oval can help your team collaborate easily. So you will have more
            control and more support to run your company to work with your team.
          </p>
        </div>

        <div className="mt-9 md:mt-14 grid md:grid-cols-2 gap-y-8 md:gap-12 xl:gap-x-0">
          <Feature
            image={Chat}
            title="Dedicated success manager"
            description="Your own customer success manager to help onboard large teams and create custom workflows."
          />

          <Feature
            image={Unlock}
            title="Advanced permissions"
            description="Extra permission controls to prevent certain employees from sharing pages externally, disable guests and etc."
          />
          <Feature
            image={PenTool}
            title="Custom contracting"
            description="We’ll work with you to create a custom contract and payment via PO/invoice."
          />
          <Feature
            image={Restore}
            title="Unlimited version history"
            description="Access version history of any page indefinitely, not just only 30 days like other products."
          />
          <Feature
            image={Eye}
            title="Early access"
            description="You’ll always have the most powerful version of Notion. You’ll also influence our future product roadmap."
          />
          <Feature
            image={News}
            title="Bulk PDF export"
            description="Export all of your content at once as PDFs. Handy for legal or compliance backups.."
          />
        </div>

        <div className="mt-16 md:mt-24 xl:mt-48 flex flex-col md:flex-row md:justify-center gap-y-7 gap-x-16 xl:gap-x-44">
          <Stat
            title="98%"
            subtitle="of users saved time"
            className="text-center max-w-[125px] md:max-w-[140px] xl:max-w-[190px] mx-auto md:mx-0 md:mt-12"
          />

          <Stat
            title="26%"
            subtitle="less emails sent and received"
            className="text-center max-w-[125px] md:max-w-[140px] xl:max-w-[190px] mx-auto md:mx-0 md:mt-5"
          />

          <Stat
            title="32%"
            subtitle="faster project completion"
            className="text-center max-w-[125px] md:max-w-[140px] xl:max-w-[190px] mx-auto md:mx-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;

interface FeatureProps {
  image: StaticImageData;
  title: string;
  description: string;
}

const Feature = ({ image, title, description }: FeatureProps) => {
  return (
    <div className="text-center xl:text-left">
      <Image
        src={image}
        priority
        alt="Application frame"
        className="inline-block"
      />
      <div className="mt-4 md:mt-6 xl:mt-7 space-y-3">
        <h3 className="text-lg md:text-xl xl:text-2xl font-bold">{title}</h3>
        <p className="text-sm xl:text-base max-w-[461px] mx-auto xl:mx-0">
          {description}
        </p>
      </div>
    </div>
  );
};
