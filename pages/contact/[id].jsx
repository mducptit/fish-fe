import VerifyForm from '@/components/contact/verify-form';
import { useEffect } from 'react';
import '../../app/globals.css';

export default function Contact() {
  useEffect(() => {
    import('preline');
  }, []);

  return (
    <>
      <div className="m-auto m-0 bg-[#3b5998] py-4">
        <div className="m-auto m-0 flex justify-around items-center flex-row text-center w-[55%]">
          <span className="text-white text-4xl font-bold leading-relaxed mr-[20%]">
            facebook
          </span>
          <div class="flex flex-1 w-full relative">
            <div class="absolute pointer-events-auto">
              <svg
                class="absolute text-[#888] font-medium h-4 top-2 left-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="How can we help?"
              class="p-1 w-[80%] pl-7 "
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

      <div className="flex flex-row w-[55%] m-auto gap-10 py-4">
        <div className="flex flex-col flex-1 min-w-[298px] gap-1 text-[#444950] text-sm">
          <div className="cursor-pointer hover:bg-[#e9ebee] p-1">
            Creating an Account
          </div>
          <div className="cursor-pointer hover:bg-[#e9ebee] p-1">
            Your Profile
          </div>
          <div className="cursor-pointer hover:bg-[#e9ebee] p-1">Friending</div>
          <div className="cursor-pointer hover:bg-[#e9ebee] p-1">
            Facebook Dating
          </div>
          <div className="cursor-pointer hover:bg-[#e9ebee] p-1">
            Your Home Page
          </div>
          <div className="cursor-pointer hover:bg-[#e9ebee] p-1">Messaging</div>
          <div className="cursor-pointer hover:bg-[#e9ebee] p-1">Reels</div>
          <div className="cursor-pointer hover:bg-[#e9ebee] p-1">Stories</div>
          <div className="cursor-pointer hover:bg-[#e9ebee] p-1">Photos</div>
          <div className="cursor-pointer hover:bg-[#e9ebee] p-1">Videos</div>
          <div className="cursor-pointer hover:bg-[#e9ebee] p-1">Gaming</div>
          <div className="cursor-pointer hover:bg-[#e9ebee] p-1">Pages</div>
          <div className="cursor-pointer hover:bg-[#e9ebee] p-1">Groups</div>
          <div className="cursor-pointer hover:bg-[#e9ebee] p-1">Events</div>
          <div className="cursor-pointer hover:bg-[#e9ebee] p-1">
            Fundraisers and Donations
          </div>
          <div className="cursor-pointer hover:bg-[#e9ebee] p-1">Meta Pay</div>
          <div className="cursor-pointer hover:bg-[#e9ebee] p-1">
            Marketplace
          </div>
          <div className="cursor-pointer hover:bg-[#e9ebee] p-1">Apps</div>
          <div className="cursor-pointer hover:bg-[#e9ebee] p-1">
            Facebook Mobile Apps
          </div>
          <div className="cursor-pointer hover:bg-[#e9ebee] p-1">
            Accessibility
          </div>
        </div>
        <VerifyForm />
      </div>
      <Footer />
    </>
  );
}

const Footer = () => {
  return (
    <>
      <div className="flex text-sm text-[#8d949e] flex-row justify-center gap-20 items-start py-10">
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
