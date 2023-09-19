import React from 'react';
import { useForm } from 'react-hook-form';

function LoginForm() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='flex flex-col gap-8'>
      <div className="login-form">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center gap-4 items-center"
        >
          <div className="w-[91%]">
            <input
              type="email"
              placeholder="Email address or phone number"
              {...register('email')}
              className="login-input focus:outline-none"
            />
            {errors?.email && <span>Email is required</span>}
          </div>

          <div className="w-[91%]">
            <input
              type="password"
              placeholder="Password"
              className="login-input focus:outline-none"
              {...register('password')}
            />
            {errors?.password && <span>Password is required</span>}
          </div>
          <div className="text-center w-[91%]">
            <button type="submit" className="login-btn">
              Login
            </button>
          </div>

          <div className="text-center">
            <a href="#" className="text-blue-500 font-normal">
              Forgotten Password?
            </a>
          </div>
          <div className='border w-[90%] my-2'/>
          <div className="text-center">
            <button type="submit" className='font-medium create-new-btn'>Create new account</button>
          </div>
        </form>
      </div>
      <div className='flex-1 text-center text-sm'>
        <p>
          <b>
            <a>Create a Page </a>
          </b>
          for a celebrity, brand or business.
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
