import Link from "next/link";

import * as Switch from "@radix-ui/react-switch";

const Pricing = () => {
  return (
    <section className="container mb-14 md:mb-[120px] xl:mb-[200px]">
      <div className="wrapper space-y-8 md:space-y-16">
        <div className="max-w-[288px] md:max-w-none md:w-full mx-auto xl:mx-0 text-center space-y-3 md:space-y-4">
          <h2>Oval Plans and Pricing</h2>
          <p className="text-oval-grey-dark-secondary">
            30-day free trial, cancel any time. No credit card required.
          </p>
        </div>

        <div className="flex gap-x-3 md:gap-x-4 items-end max-w-[288px] md:max-w-[400px] mx-auto">
          <div>
            <p className="font-serif italic text-xs md:text-sm text-oval-orange text-center">
              Save 13%
            </p>
            <p className="copy font-medium text-oval-grey-dark-secondary">
              Annual Plans
            </p>
          </div>

          <Switch.Root className="relative bg-oval-orange w-14 h-7 md:w-[88px] md:h-12 rounded-full">
            <Switch.Thumb className="switch-thumb block w-5 h-5 md:w-10 md:h-10 bg-white rounded-full will-change-transform duration-150 translate-x-1 data-[state=checked]:translate-x-8 md:data-[state=checked]:translate-x-11" />
          </Switch.Root>

          <p className="copy font-medium text-oval-grey-dark-secondary">
            Monthly Plans
          </p>
        </div>

        <div>
          <div className="border border-[#D1D0D6] md:rounded-md grid md:grid-cols-2 xl:grid-cols-4">
            <Plan name="Starter" price="199" seats={20} />

            <Plan name="Growth" price="499" seats={60} />

            <Plan name="Midsize" price="899" seats={100} />

            <Plan name="Large" price="1999" seats={300} />
          </div>

          <div className="mt-6 md:mt-12 bg-[#F5F6F9] pt-8 pb-4 md:py-8 rounded-md text-center space-y-4 md:flex items-center md:gap-x-7 md:space-y-0 md:px-8">
            <h3 className="font-semibold text-xl md:text-2xl text-oval-grey-dark-secondary">
              Enterprise
            </h3>

            <p className="max-w-[165px] md:max-w-none mx-auto md:mx-0 text-sm">
              For companies with over 1,000+ people
            </p>

            <Link
              href="/"
              className="inline-block bg-oval-orange py-2 px-6 text-white rounded-md text-sm font-bold md:ml-auto"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="text-center space-y-5">
          <p className="text-sm md:text-base md:max-w-sm xl:max-w-none mx-auto">
            See how an all-in-one Oval plan stacks up against the competition
            and saves you money
          </p>
          <Link
            href="/"
            className="block underline underline-offset-4 text-sm font-semibold"
          >
            Compare Prices
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

interface PlanProps {
  name: string;
  price: string;
  seats: number;
}

const Plan = ({ name, price, seats }: PlanProps) => {
  return (
    <div className="plan">
      <div className="space-y-1">
        <h3 className="font-semibold text-xl md:text-2xl text-oval-grey-dark-secondary">
          {name}
        </h3>
        <p className="text-sm">Up to {seats} people</p>
      </div>

      <h4 className="font-serif font-bold text-4xl mt-7 mb-5">${price}</h4>

      <p className="max-w-[160px] mx-auto">Per month, billed annually in USD</p>

      <Link
        href="/"
        className="block underline underline-offset-4 text-sm text-oval-grey-dark-secondary mt-7 mb-10"
      >
        Contact us for a Quote
      </Link>

      <Link
        href="/"
        className="inline-block bg-oval-orange py-4 px-8 text-white rounded-md text-sm font-bold"
      >
        Buy Now
      </Link>
    </div>
  );
};
