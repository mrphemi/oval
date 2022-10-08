import Link from "next/link";

import Logo from "./Logo";
import NavLink from "./NavLink";
import Twitter from "./Twitter";
import Facebook from "./Facebook";
import Linkedin from "./Linkedin";

const Footer = () => {
  return (
    <footer className="bg-black pt-10 pb-5 md:py-20">
      <div className="wrapper flex flex-col-reverse md:flex-row gap-y-10 md:gap-y-0 md:gap-x-[68px] md:space-y-10 2xl:space-y-0 2xl:justify-between">
        {/* Logo, Socials & Copyright  */}
        <div className="flex md:flex-col justify-between md:justify-start 2xl:justify-between gap-y-[60px] md:max-w-[108px]">
          <div className="flex flex-col-reverse md:flex-col gap-y-11 md:gap-y-6">
            <Link href="" passHref>
              <a aria-label="Oval logo">
                <Logo theme="light" />
              </a>
            </Link>

            {/* Socials */}
            <div className="flex gap-x-5">
              <Link href="/" passHref>
                <a aria-aria-label="twitter">
                  <Twitter />
                </a>
              </Link>

              <Link href="/" passHref>
                <a aria-aria-label="facebook">
                  <Facebook />
                </a>
              </Link>

              <Link href="/" passHref>
                <a aria-aria-label="linkedin">
                  <Linkedin />
                </a>
              </Link>
            </div>
          </div>

          <p className="self-end md:self-auto text-xs md:text-sm text-grey-dark-primary">
            © {new Date().getFullYear()} Oval
          </p>
        </div>
        <div className="grid grid-cols-2 gap-y-10 md:flex md:gap-x-9 2xl:gap-x-[83px]">
          <ul>
            <li className="text-white text-sm font-bold hidden 2xl:block mb-[18px]">
              Product
            </li>
            <div className="space-y-3">
              <li>
                <NavLink href="">Landingpage</NavLink>
              </li>
              <li>
                <NavLink href="">Features</NavLink>
              </li>
              <li>
                <NavLink href="">Documentation</NavLink>
              </li>
              <li>
                <NavLink href="">Referral Program</NavLink>
              </li>
              <li>
                <NavLink href="/pricing">Pricing</NavLink>
              </li>
            </div>
          </ul>
          <ul>
            <li className="text-white text-sm font-bold hidden 2xl:block mb-[18px]">
              Services
            </li>
            <div className="space-y-3">
              <li>
                <NavLink href="/about">Documentation</NavLink>
              </li>
              <li>
                <NavLink href="">Design</NavLink>
              </li>
              <li>
                <NavLink href="/contact">Themes</NavLink>
              </li>
              <li>
                <NavLink href="">Illustrations</NavLink>
              </li>
              <li>
                <NavLink href="/contact">UI Kit</NavLink>
              </li>
            </div>
          </ul>
          <ul>
            <li className="text-white text-sm font-bold hidden 2xl:block mb-[18px]">
              Company
            </li>
            <div className="space-y-3">
              <li>
                <NavLink href="">About</NavLink>
              </li>
              <li>
                <NavLink href="">Terms</NavLink>
              </li>
              <li>
                <NavLink href="">Privacy Policy</NavLink>
              </li>
              <li>
                <NavLink href="">Careers</NavLink>
              </li>
            </div>
          </ul>
          <ul>
            <li className="text-white text-sm font-bold hidden 2xl:block mb-[18px]">
              More
            </li>
            <div className="space-y-3">
              <li>
                <NavLink href="">Documentation</NavLink>
              </li>
              <li>
                <NavLink href="">License</NavLink>
              </li>
              <li>
                <NavLink href="">Changelog</NavLink>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
