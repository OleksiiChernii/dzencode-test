export const getPrice = (products, symbol) => {
  return products.reduce((acc, value) => {
    const price = value.price
      .filter((p) => p.symbol === symbol)
      .reduce((a, p) => a + p.value, 0);
    return acc + price;
  }, 0).toFixed(2);
};

export const mounthes = [
  "январь",
  "февраль",
  "март",
  "апрель",
  "май",
  "июнь",
  "июль",
  "август",
  "сентябрь",
  "октябрь",
  "ноябрь",
  "декабрь",
];

export const weekDay = [
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
  "воскресенье",
];

export const getDate = (orderDate) => {
  const date = new Date(orderDate);
  const day = date.getDate();
  const mounth = date.getMonth();
  const year = date.getFullYear();

  return {
    day: day > 9 ? day : "0" + day,
    weekDay: weekDay[date.getDay()],
    mounth: mounthes[mounth].slice(0, 3),
    mounthDigit: mounth > 8 ? mounth + 1 : "0" + (mounth + 1),
    year,
  };
};
