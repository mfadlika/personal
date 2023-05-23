import Layout from "@/components/Layout";
import "@/styles/index.css";
import "@/styles/work.css"
import "@/styles/chat-apps.css"
import "@/styles/food-menu.css"
import "@/styles/responsive-device.css"
import "@/styles/radio-button.css"
import "@/styles/home.css"
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default appWithTranslation(App);
