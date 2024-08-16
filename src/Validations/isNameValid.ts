export const isNameValid = (name: string): boolean => {
  const nameRegex = /^[a-zA-Z\s']+$/;
  return nameRegex.test(name);
};
