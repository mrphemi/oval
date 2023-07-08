import Image from "next/image";

import Quote from "@/components/icons/Quote";
import TestimonialsList from "../common/Testimonials";

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

        <TestimonialsList />
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
