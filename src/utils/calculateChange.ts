export const calculateChange = (
  currentValue: number,
  previousValue: number,
) => {
  if (previousValue === 0) {
    return 0;
  }
  return ((currentValue - previousValue) / previousValue) * 100;
};