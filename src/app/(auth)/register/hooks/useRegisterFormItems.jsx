// useFilterItems.js

const useRegisterFormItems = () => {
  const formItems = [
    {
      label: 'Full Name',
      name: 'fullName',
      type: 'input',
      className: 'col-span-12',
      placeholder: 'Enter user name',
      rules: [{ required: true, message: 'Please input your name!' }],
    },
    {
      label: 'Phone number',
      name: 'phone',
      type: 'input',
      className: 'col-span-12',
      placeholder: 'Enter user phone',
      rules: [{ required: true, message: 'Please input your phone number!' }],
    },
    {
      label: 'Password',
      name: 'password',
      type: 'password',
      className: 'col-span-12',
      placeholder: 'Enter your password',
      rules: [{ required: true, message: 'Please input your password!' }],
      extra: 'Between 8 and 10 characters',
    },
  ];
  return formItems;
};

export default useRegisterFormItems;
