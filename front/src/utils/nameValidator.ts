const nameValidator = (name: string): boolean => {
  const nameRegex = /^[a-zA-Z]+$/;
  return nameRegex.test(name);
};
export default nameValidator;
