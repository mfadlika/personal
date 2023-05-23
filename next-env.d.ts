/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

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
