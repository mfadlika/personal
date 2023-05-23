import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { CameraSVG, MicrophoneSVG, PlusSVG } from "../../../../../public/assets/svg";

interface Options extends OptionProps {
  color: string;
  chat: ChatProps[];
  setTyping: Dispatch<SetStateAction<string>>;
}

export default function ChatBody({ option, color, chat, setTyping }: Options) {
  const divRef = useRef<null | HTMLDivElement>(null);
  const [message, setMessage] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(false);

  function sendChat(event: any) {
    if (event.key === "Enter" && message !== "") {
      chat.push({
        right: {
          id: Math.random() * (1000 - 8) + 8,
          text: message,
          time: new Date(),
        },
      });
      setMessage("");
      if (chat.find((x) => x.left?.id === 7)) {
        setTimeout(() => {
          setDisabled(true);
          setTyping("");
        }, 2000);
      }
    }
  }

  useEffect(() => {
    divRef.current?.scrollIntoView({ behavior: "smooth" });
  });
  return (
    <div className={`apps-body ${option}-apps-body`}>
      <div className="chat px-2 py-2">
        {chat.map((props: ChatProps, i: number) => {
          const person: string = Object.keys(props)[0];
          const newProps: RLProps = props[person as "left" | "right"]!;
          return (
            <div
              key={i}
              className={`message relative border w-max px-2 py-0.5 my-2 ${
                person === "left" ? "pr-10" : "mr-0 ml-auto pr-10"
              }`}
              ref={divRef}
            >
              {newProps.text}
              <span className="absolute text-xs bottom-0 right-1 text-gray-500">
                {new Date(newProps.time).getHours()}:
                {new Date(newProps.time).getMinutes() < 10
                  ? "0" + new Date(newProps.time).getMinutes()
                  : new Date(newProps.time).getMinutes()}
              </span>
            </div>
          );
        })}
        {disabled && (
          <div
            className="w-max mx-auto italic"
            style={{ color: color }}
            ref={divRef}
          >
            You are blocked
          </div>
        )}
      </div>
      <div className="control flex flex-col justify-evenly">
        <div className="w-full h-5/6 flex items-center justify-center pl-2">
          <PlusSVG height="20px" className="w-1/12 px-1" fill={color} />
          <input
            onKeyDown={sendChat}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="w-8/12 rounded-full pl-2"
            disabled={disabled}
          ></input>
          <div className="w-3/12 flex p-1">
            <CameraSVG height="20px" className="w-6/12" fill={color} />
            <MicrophoneSVG height="20px" className="w-6/12" fill={color} />
          </div>
        </div>
        <div className="w-full h-1/6"></div>
      </div>
    </div>
  );
}
