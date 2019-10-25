export const getTotalValueAsPrice = (numberOne: number, numberTwo: number) => {
  return Math.floor(numberOne * numberTwo * 100) / 100;
};
