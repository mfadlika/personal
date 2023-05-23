import { ArrowLeftSVG, PhoneSVG, VideoCallSVG } from "../../../../../public/assets/svg";

interface Options extends OptionProps {
  color: string;
  typing: string;
}

export default function ChatHeader({ option, color, typing }: Options) {
  return (
    <div className={`apps-head ${option}-apps-head flex justify-between px-1`}>
      <div className="flex w-2/12 items-center justify-center">
        <ArrowLeftSVG height="75%" width="35%" fill={color} />
        <span className="pl-1" style={{ color: color }}>
          88
        </span>
      </div>
      <div className="flex w-7/12 items-center pl-1">
        <img
          src={
            typing === ""
              ? "https://ethikverein.de/wp-content/uploads/2020/12/anonym.png"
              : "https://awsimages.detik.net.id/community/media/visual/2022/09/11/1422334769-1_43.jpeg?w=700&q=90"
          }
          className="img rounded-full p-0.5"
          alt="profile"
        />
        <div className="pl-1">
          <p style={{ color: color }}>Ex-Girlfriend</p>
          <p
            className={`text-xs ${typing === "Online" ? "" : "italic"}`}
            style={{ color: color }}
          >
            {typing}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center w-3/12 pr-2 py-0.5">
        <VideoCallSVG height="75%" className="p-1" fill={color} />
        <PhoneSVG height="75%" className="p-1" fill={color} />
      </div>
    </div>
  );
}
