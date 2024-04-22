import Typography from "../../TextStyles";
type Props = {
  backgroundColor: string;
  text: string;
};

export const GiveAwayPriceCardTag = ({ backgroundColor, text }: Props) => {
  return (
    <Box
      sx={{
        backgroundColor: backgroundColor,
        borderRadius: "50%",
        minHeight: "48px",
        maxWidth: "48px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" lineHeight="28px" weight="500">
        {text}
      </Typography>
    </Box>
  );
};
