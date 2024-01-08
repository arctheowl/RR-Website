import { type AppType } from "next/dist/shared/lib/utils";
import { useEffect } from "react";
import { init } from "@socialgouv/matomo-next";
import "~/styles/globals.css";

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL || "";
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID || "";

const MyApp: AppType = ({ Component, pageProps }) => {
  useEffect(() => {
    init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
  }, []);
  return <Component {...pageProps} />;
};

export default MyApp;
