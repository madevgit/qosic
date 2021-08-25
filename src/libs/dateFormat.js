export default function DateFormat(valideDateString) {
    
  let splitDate = {
    day: undefined,
    month: undefined,
    year: undefined,
    date: undefined,
  };

  const months = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const BaseDate = new Date(valideDateString);

  splitDate.day = days[BaseDate.getDay()];
  splitDate.month = months[BaseDate.getMonth()];
  splitDate.year = BaseDate.getFullYear();
  splitDate.date = BaseDate.getDate();

  return splitDate;
}
