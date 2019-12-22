export const formatDate = string => {
  const date = new Date(string);

  return new Intl.DateTimeFormat('pl').format(date);
};

export const formatCurrency = value => {
  const number = Number(value);

  return new Intl.NumberFormat('pl', { style: 'currency', currency: 'PLN' }).format(number);
};
