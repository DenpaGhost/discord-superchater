import "@/styles/app.scss";
import { AppProps } from "next/dist/next-server/lib/router/router";
import React from "react";

const app = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);
export default app;
