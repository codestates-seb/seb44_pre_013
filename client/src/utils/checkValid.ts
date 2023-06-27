interface PropType {
  type: string;
  text: string;
}

const checkValid = () => {
  const validate = (input: PropType) => {
    const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    const pwRegex = /[a-z][0-9]{2,3}/;
    switch (input.type) {
      case 'email':
        if (input.text.length === 0)
          return {
            isValid: false,
            content: 'email address is empty',
          };
        else if (!emailRegex.test(input.text))
          return {
            isValid: false,
            content: `${input.text} is not a valid email address.`,
          };
        else return { isValid: true, content: '' };

      case 'password':
        if (input.text.length === 0)
          return {
            isValid: false,
            content: 'password is empty',
          };
        else if (input.text.length < 8)
          return {
            isValid: false,
            content: `Must contain at least ${8 - input.text.length} more character.`,
          };
        else if (!pwRegex.test(input.text))
          return {
            isValid: false,
            content: `Password must contain at least one alphabet and one number.`,
          };
        else return { isValid: true, content: '' };

      case 'name':
        if (input.text.length === 0)
          return {
            isValid: false,
            content: 'display name is empty',
          };
        else return { isValid: true, content: '' };

      default:
        break;
    }
  };

  return { validate };
};

export default checkValid;
