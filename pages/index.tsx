import type { NextPage } from "next";

import Header from "@/components/home/Header";
import Workspace from "@/components/home/Workspace";
import Focus from "@/components/home/Focus";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <Workspace />
        <Focus />
      </main>
    </>
  );
};

export default Home;
