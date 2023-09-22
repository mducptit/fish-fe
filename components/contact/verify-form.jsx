import { createProfile } from '@/request/post';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '../common/error-message';
import { SelectInput } from '../common/select-input';

function VerifyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const onSubmit = async (data) => {
    const res = await createProfile(data);

    if (res?.status) {
      router.push('/login');
    }
  };

  const isPage = false;
  return (
    <div className="flex flex-col gap-4 border-8 md:border-2 w-full">
      <div className="border-b-2 bg-[#f5f6f7] p-2 py-3 ">
        <h2 className="font-bold text-[#4b4f56]">
          Verify Your Page or Profile
        </h2>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-xs text-[#4b4f56]"
      >
        <div className="flex flex-col items-start p-4">
          <p className="text-[11px] text-[#4b4f56] mb-4">
            Verified pages and profiles have blue checkmarks next to their names
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            to show that Facebook has confirmed they're the real presence of the
            public figures, celebrities, and brands they represent.
          </p>
          <p className="font-bold text-[#90949c]">What are you verifying?</p>
          {isPage ? (
            <>
              {' '}
              <p className="text-xs font-bold text-[#90949c]">Page</p>
              <p className="text-[11px]">You have no eligible admined Pages.</p>
            </>
          ) : (
            <>
              <div className="w-full">
                <p className="text-xs font-medium text-[#90949c] mt-2">
                  Profile link
                </p>
                <input
                  className="shadow-none p-1 border border-slate-300 mt-1 w-full lg:w-[300px]"
                  placeholder="Enter your profile's URL"
                  {...register('profileURL', {
                    required: "Your profile's URL is required",
                  })}
                />
                <ErrorMessage error={errors?.profileURL?.message} />
              </div>
            </>
          )}
          <p className="text-[11px] my-4">Step 1: Confirm authenticity</p>
          <p className="mb-4">
            Add an official identification document for yourself or your
            business to show that your Page or profile is connected to the
            public figure, celebrity or brand it represents.
          </p>

          <SelectInput
            register={register}
            name="documentType"
            label="Document type"
            options={[
              `Driver's license`,
              `Password`,
              `National identification card`,
              `Tax filling`,
              `Recent utility bill`,
              `Articles of incorporation`,
            ]}
            selected={`Driver's license`}
            className="bg-white border border-slate-300 mb-4 w-full lg:w-[300px]"
          />

          <p className="text-xs font-bold text-[#90949c] mb-2">Add document</p>
          <input
            type="file"
            id="myFile"
            name="filename"
            {...register('filename')}
          />

          <p className="text-[11px] my-4">Step 2: Confirm notability</p>
          <p className="mb-4">
            Show that the public figure, celebrity or brand your Page or profile
            represents is in the public interest.
          </p>

          <SelectInput
            label="Category"
            register={register}
            name="category"
            options={[
              `News/Media`,
              `Sports`,
              `Government & Politics`,
              `Music`,
              `Fashion`,
              `Entertainment`,
              `Digital Creator/Blogger/Influencer`,
              `Gamer`,
              `Business/Brand/Organization`,
              `Other`,
            ]}
            selected={`News/Media`}
            className=" bg-white border border-slate-300 mb-4 w-full lg:w-[300px]"
          />

          <p className="text-xs font-bold text-[#90949c]">Country / region</p>
          <p className="text-xs text-[#90949c] my-2">
            Enter the country or region where the person or organization your
            Page or profile represents is most popular.
          </p>
          <input
            className="shadow-none p-1  border border-slate-300 mt-1 w-full lg:w-[300px]"
            placeholder="Enter a country name..."
            {...register('region', {
              required: 'Country / region is required',
            })}
          />
          <ErrorMessage error={errors?.region?.message} />

          <p className="text-xs font-bold  mt-4 mb-2 text-[#90949c]">
            Audience (Optional)
          </p>
          <p className="text-xs text-[#90949c]">
            Describe the people who follow your Page or profile. Include who
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            they are, what they're interested in and why they follow you.
          </p>
          <input
            className="shadow-none p-1 mb-4 border border-slate-300 mt-1 w-full lg:w-[300px]"
            {...register('audience')}
          />
          <p className="text-xs font-bold mt-4 mb-2 text-[#90949c]">
            Also known as (Optional)
          </p>
          <p className="text-xs text-[#90949c] ">
            List all the names the person or organization your Page or profile
            represents is known by. Include different names and the same name in
            other languages.
          </p>
          <input
            className="shadow-none p-1 border border-slate-300 mt-1 w-full lg:w-[300px]"
            {...register('alsoKnowAs')}
          />

          <p className="my-4">
            Information of person submitting the verification application. We
            will contract you using the information below.
          </p>

          <p className="text-xs font-bold text-[#90949c] ">Business Email</p>
          <input
            className="shadow-none p-1 border border-slate-300 mt-1 w-full lg:w-[300px]"
            {...register('businessEmail')}
          />
          <p className="text-xs font-bold text-[#90949c] mt-3">
            Personal Email
          </p>
          <input
            className="shadow-none p-1 border border-slate-300 mt-1 w-full lg:w-[300px]"
            {...register('personalEmail', {
              required: 'Personal email is required',
            })}
          />
          <ErrorMessage error={errors?.personalEmail?.message} />

          <p className="text-xs font-bold text-[#90949c] mt-3">Phone</p>
          <input
            className="shadow-none p-1 border border-slate-300 mt-1 w-full lg:w-[300px]"
            {...register('phone', { required: 'Phone is required' })}
          />
          <ErrorMessage error={errors?.phone?.message} />

          <p className="text-[11px] mt-2">
            Learn more about{' '}
            <a
              href="#"
              className="text-[#4267b2] text-xs no-underline hover:underline"
            >
              verified Pages and profiles
            </a>
            .
          </p>
        </div>
        <div className="w-full border-t-2 bg-[#f5f6f7] p-2 text-right">
          <button
            type="submit"
            className="w-full md:w-auto md:bg-[#4267b2] bg-blue-500  border-[#4267b2] font-bold text-[#90949c] text-xs text-white p-2 px-4 rounded"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default VerifyForm;
