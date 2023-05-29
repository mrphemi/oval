import Image from "next/image";

import Quote from "@/components/icons/Quote";

interface Testimonial {
  text: string;
  author: string;
  role: string;
  image: string;
}

const Testimonials = () => {
  return (
    <section className="container mb-14 md:mb-[120px] xl:mb-[200px]">
      <div className="wrapper space-y-8 md:space-y-16">
        <div className="flex flex-col gap-8 xl:flex-row">
          <Quote className="w-16 md:w-24" />
          <h2 className="max-w-[280px] md:max-w-[635px] xl:max-w-[798px]">
            Loved by so many people around the world
          </h2>
        </div>

        <div
          id="testimonials"
          className="mt-5 md:mt-10 divide-x-2 flex overflow-x-scroll"
        >
          <Testimonial
            text="I received great customer service from the specialists who helped me. I would recommend to anyone who wants great dashboard that has great quality"
            author="Harold Tyler"
            role="Product Designer"
            image="/assets/images/home/harold.png"
          />
          <Testimonial
            text="It really boils down to this: that all life is interrelated. We are
          all caught in an inescapable network of mutuality, tied into a single
          garment of destiny"
            author="Julia Armstrong"
            role="Aplication and Web Developer"
            image="/assets/images/home/armstrong.png"
          />
          <Testimonial
            text="Really excited to see the progress that Fibery team are making on the
          product. There's a lot of potential with this one!"
            author="Rosalie Morgan"
            role="Co-founder of Square Space"
            image="/assets/images/home/rosalie.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

const Testimonial = ({ text, author, role, image }: Testimonial) => {
  return (
    <div className="testimonial flex flex-col justify-between gap-y-5 px-5">
      <p className="w-[276px] xl:w-[336px]">{`“${text}”`}</p>
      <div className="flex space-x-3">
        <div className="w-9 h-9 relative">
          <Image src={image} fill alt={author} />
        </div>
        <div>
          <p className="font-serif text-sm text-black font-bold">{author}</p>
          <p className="text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};
