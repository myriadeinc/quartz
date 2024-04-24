import * as ICONS from "./components";

type Props = {
  name: keyof typeof ICONS;
};

export const MenuIcon = ({ name }: Props) => {
  if (name in ICONS) {
    return ICONS[name];
  }

  return null;
};
