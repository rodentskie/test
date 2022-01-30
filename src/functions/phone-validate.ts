const validateNumber = (num: string) => {
  let newNumber: string = num;

  const regex = /^(\+639)\d{9}$|^(09)\d{9}$|^(639)\d{9}$/;
  const check = regex.test(num);

  const phoneNumPrefix = num.substring(0, 3);
  if (phoneNumPrefix === '+63') newNumber = num.replace('+63', '0');
  if (phoneNumPrefix === '639') newNumber = num.replace('63', '0');

  return { check, newNumber };
};

export default validateNumber;
