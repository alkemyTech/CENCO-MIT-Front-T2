export const isPhoneValid = (phone: string): boolean => {
  const phoneRegex = /^[0-9]+$/;
  return phoneRegex.test(phone);
};
