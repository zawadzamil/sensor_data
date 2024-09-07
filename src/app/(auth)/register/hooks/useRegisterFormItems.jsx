// useFilterItems.js

const useRegisterFormItems = () => {
  const formItems = [
    {
      label: 'Full Name',
      name: 'fullName',
      type: 'input',
      className: 'col-span-12',
      placeholder: 'Enter user name',
      rules: [{ required: true, message: 'Please input user name!' }],
    },
    {
      label: 'Email',
      name: 'email',
      type: 'input',
      className: 'col-span-12',
      placeholder: 'Enter user email',
      rules: [{ required: true, message: 'Please input user email!' }],
    },
    {
      label: 'Password',
      name: 'password',
      type: 'password',
      className: 'col-span-12',
      placeholder: 'Enter user password',
      rules: [{ required: true, message: 'Please input user password!' }],
      extra: 'Between 8 and 10 characters',
    },
  ];
  return formItems;
};

export default useRegisterFormItems;
