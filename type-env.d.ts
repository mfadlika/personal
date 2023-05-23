type OptionProps = {
  option: string;
  setOption?: Dispatch<SetStateAction<string>>;
};

type RLProps = {
  id: number;
  text: string;
  time: Date;
};

type ChatProps = {
  right?: RLProps;
  left?: RLProps;
};
