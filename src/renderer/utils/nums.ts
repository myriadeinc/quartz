export const isNumStr = (str: string) => {
  let num = parseInt(str);
  return !isNaN(num);
};

// doesn't implement NaN check, use isNumStr first
export const getNearestWholeNumStr = (str: string) => {
  let num = parseInt(str);
  return Math.round(num);
};
