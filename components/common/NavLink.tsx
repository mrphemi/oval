import { ReactChildren, ReactChild } from "react";

import { useRouter } from "next/router";

type NavLinkProps = { href: string; children: ReactChild | ReactChildren };

function NavLink({ children, href }: NavLinkProps) {
  const router = useRouter();

  const sharedStyles = `text-xs md:text-sm text-grey-light`;

  const styles =
    router.asPath === href || router.asPath.includes(href)
      ? `${sharedStyles}`
      : `${sharedStyles}`;

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} className={styles}>
      {children}
    </a>
  );
}

export default NavLink;
