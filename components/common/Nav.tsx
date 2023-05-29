import Link from "next/link";

import NavLink from "./NavLink";
import Logo from "./Logo";

const Nav = () => {
  return (
    <nav className="wrapper py-5 md:flex gap-x-20 items-center text-sm">
      {/* Logo and Hamburger */}
      <div className="flex md:flex-row-reverse justify-between md:justify-start md:gap-x-6">
        <Logo />
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="xl:hidden"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 8V6H21V8H3ZM3 13H21V11H3V13ZM3 18H21V16H3V18Z"
            fill="black"
          />
        </svg>
      </div>

      {/* Links */}
      <ul className="hidden xl:flex gap-x-9">
        <li>
          <NavLink href="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink href="/product">Product</NavLink>
        </li>
        <li>
          <NavLink href="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink href="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink href="/download">Download</NavLink>
        </li>
      </ul>

      <div className="hidden md:flex gap-x-12 items-center ml-auto">
        <Link href="/login" className="text-oval-grey-dark-seconday">
          Login
        </Link>

        <Link
          href="/download"
          className="border border-oval-grey-light rounded-lg font-semibold py-[11px] px-[16px]"
        >
          Try for free
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
