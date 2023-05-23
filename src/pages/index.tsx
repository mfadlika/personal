import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import postAPI from "./api/server";

export default function Home() {
  return (
    <section
      id="home"
      className="h-screen w-screen flex justify-center items-center"
    >
      <div className="h-max flex pl-3">
        <div className="h-container">
          <span className="h-letter"></span>
          <span className="h-letter"></span>
          <span className="h-letter"></span>
          <span className="h-letter"></span>
        </div>
        <div className="e-container">
          <span className="e-letter"></span>
          <span className="e-letter"></span>
        </div>
        <div className="l-container">
          <span className="l-letter"></span>
          <span className="l-letter"></span>
        </div>
        <div className="l-container2">
          <span className="l-letter2"></span>
          <span className="l-letter2"></span>
        </div>
        <div className="o-container">
          <span className="o-letter"></span>
          <span className="o-letter"></span>
        </div>
      </div>
    </section>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const ip =
    ctx.req.headers["x-forwarded-for"] ||
    (ctx.req.socket.remoteAddress as string);

  await postAPI(ip, "index");

  return {
    props: {
      ...(await serverSideTranslations(ctx.locale as string, [
        "common",
        "header",
      ])),
    },
  };
};
