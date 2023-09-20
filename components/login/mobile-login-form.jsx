import React from 'react';
import { useForm } from 'react-hook-form';

function MobileLoginForm() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col justify-center items-center m-4">
      <div>
        <p className="text-2xl pt-4 pb-3 font-bold text-blue-500 font-['Helvetica']">facebook</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="flex flex-col justify-center gap-3 items-center">
          <div className="flex-1 w-full">
            <input
              placeholder="Mobile number or email address"
              {...register('email')}
              className="focus:outline-none w-full px-3 py-2 border border-slate-200 rounded bg-[#f5f6f7]"
            />
            {errors?.email && <span>Email is required</span>}
          </div>

          <div className="flex-1 w-full ">
            <input
              type="password"
              placeholder="Password"
              className="focus:outline-none w-full px-3 py-2 border border-slate-200 rounded bg-[#f5f6f7]"
              {...register('password')}
            />
            {errors?.password && <span>Password is required</span>}
          </div>
          <div className="text-center w-full">
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
        <ul className="footer-text flex-col flex flex-wrap gap-2 pb-3 pt-8 justify-center items-center">
          <li> English (UK)</li>
          <li className="cursor-pointer no-underline hover:underline text-[#4267b2]">
            中文(台灣)
          </li>
          <li className="cursor-pointer no-underline hover:underline text-[#4267b2]">
            Español
          </li>
          <li className="cursor-pointer no-underline hover:underline text-[#4267b2]">
            Français (France)
          </li>
        </ul>
        <ul className="footer-text flex-col flex flex-wrap gap-2 pb-3 pt-8 justify-center items-center">
          <li> Tiếng Việt</li>
          <li className="cursor-pointer no-underline hover:underline text-[#4267b2]">
            한국어
          </li>
          <li className="cursor-pointer no-underline hover:underline text-[#4267b2]">
            Português (Brasil)
          </li>
          <li className="border border-slate-200 px-2 cursor-pointer bg-[#f0f2f5] text-xs font-medium">
            +
          </li>
        </ul>
      </div>
      <div className="flex flex-row gap-1 pb-3">
        <a className="text-[11px] text-[#90949c]">About</a>
        <span className="text-[11px] text-[#90949c]">&#183;</span>
        <a className="text-[11px] text-[#90949c]">Help</a>
        <span className="text-[11px] text-[#90949c]">&#183;</span>
        <a className="text-[11px] text-[#90949c]">More</a>
      </div>
      <div className="footer-text">
        <p className="text-xs">Meta © {currentYear}</p>
      </div>
    </div>
  );
}

export default MobileLoginForm;
