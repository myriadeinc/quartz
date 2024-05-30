import * as ICONS from "./components";

type Props = {
  name: keyof typeof ICONS;
};

const SupportIcon = ({ name }: Props) => {
  if (name in ICONS) {
    return ICONS[name];
  }

  return null;
};

export default SupportIcon;
