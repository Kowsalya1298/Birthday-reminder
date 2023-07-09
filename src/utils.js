export const today = (person) => {
  let currentDay = new Date().getDate();
  let currentMonth = new Date().getMonth() + 1;

  let filterData = person.filter((data) => {
    let day = data.day;
    let month = data.month;
    return currentDay === day && currentMonth === month;
  });
  return filterData;
};

// upcoming birthdays
export const upcoming = (person, monthSelected) => {
  let currentMonth = new Date().getMonth() + 1;
  let currentDay = new Date().getDate();
  let filterData = person.filter((data) => {
    let day = data.day;
    let month = data.month;
    // if (month === currentMonth && day === currentDay) return false;
    return (
      month >= currentMonth &&
      day > currentDay &&
      getMonthName(month) === monthSelected
    );
  });

  return filterData
    .sort(function (a, b) {
      return a.day - b.day;
    })
    .sort(function (a, b) {
      return a.month - b.month;
    });
};

export const getMonthName = (monthNumber) => {
  const date = new Date();
  date.setMonth(monthNumber - 1);
  return date.toLocaleString("en-US", { month: "long" });
};
