export const getConvertedFullYear = (date: Date) => {
  const year = date.getFullYear();
  const month = getFullMonth(date);
  const day = getFullDay(date);

  return `${year}-${month}-${day}`;
};

const getFullMonth = (date: Date) => {
  let month: any = date.getMonth() + 1;
  if (month <= 9) month = "0" + month;
  return month;
};

const getFullDay = (date: Date) => {
  let day: any = date.getDate();
  if (day <= 9) day = "0" + day;
  return day;
};
