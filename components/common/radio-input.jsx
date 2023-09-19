import React from 'react';

export const RadioInput = ({ label, register, name, ...props }) => {
  return (
    <>
      <input
        class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
        {...register(name)}
        {...props}
      />
      <label class="text-xs text-gray-500 ml-2 dark:text-gray-400">
        {label}
      </label>
    </>
  );
};
