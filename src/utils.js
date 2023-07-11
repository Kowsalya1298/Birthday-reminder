export const today = (person) => {
  let currentDay = new Date().getDate();
  let currentMonth = new Date().getMonth() + 1;

  let filterData = person.filter((data) => {
    let day = data.day;
    let month = data.month;
    return currentDay == day && currentMonth == month;
  });
  return filterData;
};

// upcoming events
export const upcoming = (person, monthSelected, managerSelected) => {
  console.log(managerSelected);
  console.log(monthSelected);
  let currentMonth = new Date().getMonth();
  let currentDay = new Date().getDate();
  let filterData = person.filter((data) => {
    let day = data.day;
    let month = data.month - 1;
    let manager = data.Manager;
    if (monthSelected.length > 0) {
      if (managerSelected?.length > 0) {
        if (month === currentMonth) {
          if (monthSelected.length === 1)
            return monthSelected.includes(month) && managerSelected.includes(manager) && day > currentDay;
          return monthSelected.includes(month) && managerSelected.includes(manager);
        };
        return monthSelected.includes(month) && managerSelected.includes(manager)

      } else {
        if (currentMonth === month) {
          if (monthSelected.length === 1) {
            return monthSelected.includes(month) && day > currentDay;
          }
          return monthSelected.includes(month)
        }
        return monthSelected.includes(month)
      }
    }else
    return person

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
