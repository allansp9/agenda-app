const normalizePhone = (value) => {
  if (!value) {
    return value;
  }

  const onlyNums = value.replace(/[^\d]/g, '');
  if (onlyNums.length <= 2) {
    return onlyNums;
  }
  if (onlyNums.length <= 7) {
    return `(${onlyNums.slice(0, 2)})${onlyNums.slice(2)}`;
  }
  return `(${onlyNums.slice(0, 2)})${onlyNums.slice(2, 7)}-${onlyNums.slice(7, 11)}`;
};

export default normalizePhone;
