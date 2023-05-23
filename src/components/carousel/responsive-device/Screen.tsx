import ChatApps from "./chat-apps/ChatApps";
import StatusBar from "./StatusBar";
import {
  ChatSVG,
  HomeSVG,
  MailSVG,
  MusicSVG,
  TerminalSVG,
  TrashSVG,
} from "../../../../public/assets/svg";

export default function Screen({ option }: OptionProps) {
  return (
    <div className={`phone-screen ${option}-screen`}>
      <div className="relative h-full">
        <StatusBar option={option} />
        <ChatApps option={option} />
        <span
          className={`flex items-center justify-center p-1 home-btn ${option}-home-btn`}
        >
          <div className={`tabs-btm ${option}-tabs-btm`}>
            <div className="pc-tabs-btm-apps bg-transparent">
              <HomeSVG fill="gray" />
            </div>
            <div className="pc-tabs-btm-apps bg-transparent">
              <MusicSVG
                fill="green"
                height="100%"
                width="100%"
                className="bg-transparent"
              />
            </div>
            <div className="pc-tabs-btm-apps bg-slate-300">
              <ChatSVG className="fill-sky-600 p-1" />
            </div>
            <div className="pc-tabs-btm-apps bg-slate-300">
              <MailSVG className="bg-transparent fill-sky-500 p-1" />
            </div>
            <div className="pc-tabs-btm-apps bg-gray-800">
              <TerminalSVG fill="whitesmoke" className="bg-gray-800 p-2" />
            </div>
            <div className="pc-tabs-btm-apps bg-transparent">
              <TrashSVG
                fill="gray"
                height="90%"
                width="100%"
                className="bg-transparent"
              />
            </div>
          </div>
        </span>
      </div>
    </div>
  );
}
