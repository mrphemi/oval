import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Inter, Libre_Baskerville } from "next/font/google";

import { DefaultSeo } from "next-seo";

import Nav from "@/components/common/Nav";
import Footer from "@/components/common/Footer";

import "../styles/globals.css"; // Global style sheet for css

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const libre = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-libre",
  weight: ["400", "700"],
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const siteUrl = process.env.SITE_URL as string;
  const siteTitle = process.env.SITE_TITLE;
  const isHomePage = router.asPath === "/";

  return (
    <>
      <DefaultSeo
        title={siteTitle}
        description="Enter description here"
        canonical={`${siteUrl}${isHomePage ? "" : router.asPath}`}
        openGraph={{
          type: "website",
          url: `${siteUrl}${isHomePage ? "" : router.asPath}`,
          site_name: siteTitle,
          title: siteTitle,
          description: "Enter description here",
          images: [
            {
              url: "Enter social icon path here",
              width: 1200,
              height: 630,
              alt: `${siteTitle}`,
            },
          ],
        }}
        twitter={{
          handle: "@twitterhandle",
          site: siteUrl,
          cardType: "summary_large_image",
        }}
      />

      <div className={`${inter.variable} ${libre.variable} font-sans`}>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
