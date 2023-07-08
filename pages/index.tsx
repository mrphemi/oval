import type { NextPage } from "next";

import Header from "@/components/home/Header";
import Workspace from "@/components/home/Workspace";
import Focus from "@/components/home/Focus";
import Roles from "@/components/home/Roles";
import Testimonials from "@/components/home/Testimonials";
import Stats from "@/components/home/Stats";
import Pricing from "@/components/home/Pricing";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main id="home">
        <Workspace />
        <Roles />
        <Focus />
        <Testimonials />
        <div className="md:bg-bitmap-pattern-lg bg-no-repeat md:bg-[-70px_calc(25%)] xl:bg-[left_calc(50%-120px)]">
          <Stats />
          <Pricing />
        </div>
      </main>
    </>
  );
};

export default Home;
