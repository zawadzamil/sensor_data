// useFilterItems.js

const useLoginFormItems = () => {
  const formItems = [ 
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
    },
  ];
  return formItems;
};

export default useLoginFormItems;
