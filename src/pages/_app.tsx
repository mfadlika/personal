import Layout from "@/components/Layout";
import "@/styles/chat-apps.css";
import "@/styles/food-menu.css";
import "@/styles/home.css";
import "@/styles/index.css";
import "@/styles/radio-button.css";
import "@/styles/responsive-device.css";
import "@/styles/work.css";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
