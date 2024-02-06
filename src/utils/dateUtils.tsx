// dateUtils.js
export const getDatesForYear = (year) => {
  let startDate = new Date(year, 0, 1);
  let endDate = new Date(year, 11, 31);

  let currentDate = startDate;
  let dates = [];

  while (currentDate <= endDate) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
};
