export const getConvertedFullYear = (date: Date) => {
  const day = date.getDate();
  const month = getFullMonth(date);
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};

const getFullMonth = (date: Date) => {
  let month: any = date.getMonth() + 1;
  if (month <= 9) month = "0" + month;
  return month;
};
