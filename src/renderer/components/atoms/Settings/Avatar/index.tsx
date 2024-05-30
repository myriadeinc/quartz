import * as ICONS from "./components";

type Props = {
  name: keyof typeof ICONS;
};

const Avatar = ({ name }: Props) => {
  if (name in ICONS) {
    return ICONS[name];
  }

  return null;
};

export default Avatar;
