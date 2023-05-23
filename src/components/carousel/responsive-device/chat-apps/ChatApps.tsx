import { useEffect, useState } from "react";
import chat from "../../../../../public/assets/chat";
import ChatBody from "./ChatBody";
import ChatHeader from "./ChatHeader";

export default function ChatApps({ option }: OptionProps) {
  const [typing, setTyping] = useState<string>("Online");

  const defaultWhite: string = "#ece5dd";

  useEffect(() => {
    const timer = setTimeout(() => {
      if (chat.find((x) => x.left?.id === 7) === undefined) {
        setTyping("typing...");
        setTimeout(() => {
          chat.push({ left: { id: 7, text: "miss u", time: new Date() } });
          setTyping("Online");
        }, 3000);
      }
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`apps ${option}-apps`}>
      <ChatHeader option={option} color={defaultWhite} typing={typing} />
      <ChatBody
        option={option}
        color={defaultWhite}
        chat={chat}
        setTyping={setTyping}
      />
    </div>
  );
}
