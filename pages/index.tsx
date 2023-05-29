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
      <main>
        <Workspace />
        <Roles />
        <Focus />
        <Testimonials />
        <Stats />
        <Pricing />
      </main>
    </>
  );
};

export default Home;
