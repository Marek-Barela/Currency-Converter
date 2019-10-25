export const getConvertedFullYear = (date: Date) => {
  const year = date.getFullYear();
  const month = getFullMonth(date);
  const day = date.getDate();

  return `${year}-${month}-${day}`;
};

const getFullMonth = (date: Date) => {
  let month: any = date.getMonth() + 1;
  if (month <= 9) month = "0" + month;
  return month;
};
