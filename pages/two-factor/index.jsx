import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import '../../app/globals.css';

function TwoFactor() {
  const { register, handleSubmit, errors } = useForm();

  const initialTime = 300; // 5 minutes in seconds
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (time > 0) {
        setTime((prevTime) => prevTime - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col min-h-screen p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="border rounded-md m-0 m-auto justify-center items-start max-w-[500px]">
          {/* Page content */}
          <div className="border-b-2 px-2 py-3">
            <span className="text-lg font-medium">
              Two-factor authentication required (1/3)
            </span>
          </div>
          <div className="px-4 py-5">
            <p className="text-sm mb-4">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              You're asked us to required a 6 digit login code when anyone tries
              to access your account from a new device or browser.
            </p>
            <p className="text-sm mb-4">
              Enter the 6-digit code from your <b>code generator</b> or
              third-party app below
            </p>

            <input
              placeholder="Login code"
              {...register('code')}
              className="outline-none shadow-none px-2 py-3 mr-4 rounded border border-slate-300 mt-1 max-w-[230px]"
            />
            <span className='text-sm'>{`(wait: ${minutes.toString().padStart(2, '0')}:
          ${seconds.toString().padStart(2, '0')})`}</span>
          </div>
          <div className="flex flex-row justify-between border-t-2 px-2 py-3">
            <div>
              <span className="font-bold text-[#4267b2]">
                Need another way to authenticate?
              </span>
            </div>
            <button
              type="submit"
              className="bg-[#4267b2] border-[#4267b2] font-medium text-xs text-white p-2 px-4 rounded"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TwoFactor;
