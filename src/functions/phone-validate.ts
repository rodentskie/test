const validateNumber = (num: string) => {
  let newNumber: string = num;

  const regex = /^(\+639)\d{9}$|^(09)\d{9}$|^(639)\d{9}$/;
  const check = regex.test(num);

  const withPlusPrefix = num.substring(0, 4);
  const noPlusPrefix = num.substring(0, 3);

  if (withPlusPrefix === '+639') newNumber = num.replace('+63', '0');
  if (noPlusPrefix === '639') newNumber = num.replace('63', '0');

  return { check, newNumber };
};

export default validateNumber;
