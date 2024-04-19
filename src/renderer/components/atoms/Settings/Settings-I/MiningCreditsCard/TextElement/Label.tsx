import Typography from "renderer/components/atoms/TextStyles";

type Props = {
  label: string;
};

const Label = ({ label }: Props) => {
  return <Typography variant="body2">{label}</Typography>;
};

export default Label;
