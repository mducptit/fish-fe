import VerifyForm from '@/components/contact/verify-form';
import { useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import '../../app/globals.css';

function BrowserView() {
  return (
    <>
      <div className="m-auto m-0 bg-[#3b5998] py-4">
        <div className="m-auto m-0 flex justify-around items-center flex-row text-center w-[55%]">
          <span className="text-white text-4xl font-bold leading-relaxed mr-[20%]">
            facebook
          </span>
          <div className="flex flex-1 w-full relative">
            <div className="absolute pointer-events-auto">
              <svg
                className="absolute text-[#888] font-medium h-4 top-2 left-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="How can we help?"
              className="p-1 w-[80%] pl-7 "
            />
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-around bg-[#e9ebee] pt-3">
        <div className="text-sm text-[#3578e5] font-bold border-b-4 border-b-blue-600 pb-3">
          <span>Help Center</span>
        </div>
        <div>
          <a
            href="#"
            className="text-[#4267b2] text-xs no-underline hover:underline"
          >
            English (US)
          </a>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-[55%] m-auto gap-10 py-4">
        <div className="flex flex-col flex-1 min-w-[298px] gap-1 text-[#444950] text-sm">
          <a className="cursor-pointer hover:bg-[#e9ebee] p-1">
            Creating an Account
          </a>
          <a className="cursor-pointer hover:bg-[#e9ebee] p-1">Your Profile</a>
          <a className="cursor-pointer hover:bg-[#e9ebee] p-1">Friending</a>
          <a className="cursor-pointer hover:bg-[#e9ebee] p-1">
            Facebook Dating
          </a>
          <a className="cursor-pointer hover:bg-[#e9ebee] p-1">
            Your Home Page
          </a>
          <a className="cursor-pointer hover:bg-[#e9ebee] p-1">Messaging</a>
          <a className="cursor-pointer hover:bg-[#e9ebee] p-1">Reels</a>
          <a className="cursor-pointer hover:bg-[#e9ebee] p-1">Stories</a>
          <a className="cursor-pointer hover:bg-[#e9ebee] p-1">Photos</a>
          <a className="cursor-pointer hover:bg-[#e9ebee] p-1">Videos</a>
          <a className="cursor-pointer hover:bg-[#e9ebee] p-1">Gaming</a>
          <a className="cursor-pointer hover:bg-[#e9ebee] p-1">Pages</a>
          <a className="cursor-pointer hover:bg-[#e9ebee] p-1">Groups</a>
          <a className="cursor-pointer hover:bg-[#e9ebee] p-1">Events</a>
          <a className="cursor-pointer hover:bg-[#e9ebee] p-1">
            Fundraisers and Donations
          </a>
          <a className="cursor-pointer hover:bg-[#e9ebee] p-1">Meta Pay</a>
          <a className="cursor-pointer hover:bg-[#e9ebee] p-1">Marketplace</a>
          <a className="cursor-pointer hover:bg-[#e9ebee] p-1">Apps</a>
          <a className="cursor-pointer hover:bg-[#e9ebee] p-1">
            Facebook Mobile Apps
          </a>
          <a className="cursor-pointer hover:bg-[#e9ebee] p-1">Accessibility</a>
        </div>
        <VerifyForm />
      </div>
      <Footer />
    </>
  );
}

function MobileView() {
  return <VerifyForm />;
}

const Footer = () => {
  return (
    <>
      <div className="flex text-sm text-[#90949c] flex-row justify-center gap-20 items-start py-10">
        {/* <div>Facebook icon</div> */}
        <div className="flex flex-col gap-2">
          <span>Meta © 2023</span>
          <span>
            <a className="no-underline hover:underline">English (US)</a>
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span>
            <a className="no-underline hover:underline">About</a>
          </span>
          <span>
            <a className="no-underline hover:underline">Privacy Policy</a>
          </span>
          <span>
            <a className="no-underline hover:underline">Careers</a>
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span>
            <a className="no-underline hover:underline">Ad choices</a>
          </span>
          <span>
            <a className="no-underline hover:underline">Terms & Policies</a>
          </span>
          <span>
            <a className="no-underline hover:underline">Privacy Policy</a>
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span>
            <a className="no-underline hover:underline">Ad choices</a>
          </span>
          <span>
            <a className="no-underline hover:underline">Create ad</a>
          </span>
          <span>
            <a className="no-underline hover:underline">Create Page</a>
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span>
            <a className="no-underline hover:underline"> Terms & Policies</a>
          </span>
          <span>
            <a className="no-underline hover:underline">Cookies</a>
          </span>
        </div>
      </div>
    </>
  );
};

export default function Contact() {
  useEffect(() => {
    import('preline');
  }, []);

  return isMobile ? <MobileView /> : <BrowserView />;
}
