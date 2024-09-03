// useFilterItems.js

const useFormItems = () => {
  const formItems = [
    {
      label: 'Phone number',
      name: 'phone',
      type: 'input',
      className: 'col-span-12',
      placeholder: 'Enter user phone',
      rules: [{ required: true, message: 'Please input your phone number!' }],
    },
  ];
  return formItems;
};

export default useFormItems;
