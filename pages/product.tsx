import type { NextPage } from "next";

import Image from "next/image";

import Header from "@/components/product/Header";
import Testimonials from "@/components/common/Testimonials";
import ShowCase from "@/components/product/ShowCase";
import Features from "@/components/product/Features";
import Cta from "@/components/common/Cta";

import Graph from "@/public/assets/images/product/header.png";

const Product: NextPage = () => {
  return (
    <>
      <Header />
      <main className="relative -top-20 md:-top-56 xl:-top-80">
        <div className="wrapper">
          <Image src={Graph} priority alt="Application frame" />
        </div>

        <section className="wrapper mt-10 md:mt-14 xl:mt-28">
          <Testimonials />
        </section>

        <ShowCase />

        <Features />
      </main>
      <Cta />
    </>
  );
};

export default Product;
