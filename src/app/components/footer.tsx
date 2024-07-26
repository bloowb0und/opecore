import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => (
  <footer className="bg-[#294F74] px-4 py-8 sm:px-[72px] sm:py-[86px]">
    <section className="bg-logo-full sm:bg-logo-footer flex flex-col rounded-[36px] bg-white bg-contain bg-[center_bottom_-1rem] bg-no-repeat p-6 pb-[90px] sm:gap-[64px] sm:bg-auto sm:pb-[160px] sm:pl-[100px] sm:pr-[80px] sm:pt-[80px]">
      <div className="flex flex-col justify-between sm:flex-row">
        <div className="flex flex-col items-center gap-6 border-b border-[#F2F4F7] pb-[32px] sm:items-start sm:border-b-0 sm:pb-0">
          <div className="flex flex-col justify-center">
            <p className="text-center text-xl font-semibold text-[#1D2939] sm:text-left">
              Say Hello!
            </p>
            <p className="text-center text-xl font-normal text-[#475467] sm:text-left">
              opencoregroup@gmail.com
            </p>
          </div>
          <div className="flex items-center gap-[30px]">
            <Link
              className="flex h-[40px] min-w-[40px] items-center justify-center rounded bg-[#F2F4F7] p-2"
              href="#"
            >
              <Image alt="ig" height={24} src="ig.svg" width={24} />
            </Link>
            <Link
              className="flex h-[40px] min-w-[40px] items-center justify-center rounded bg-[#F2F4F7] p-2"
              href="#"
            >
              <Image alt="fb" height={24} src="fb.svg" width={24} />
            </Link>
            <Link
              className="flex h-[40px] min-w-[40px] items-center justify-center rounded bg-[#F2F4F7] p-2"
              href="#"
            >
              <Image alt="tw" height={24} src="tw.svg" width={24} />
            </Link>
            <Link
              className="flex h-[40px] min-w-[40px] items-center justify-center rounded bg-[#F2F4F7] p-2"
              href="#"
            >
              <Image alt="li" height={24} src="li.svg" width={24} />
            </Link>
          </div>
        </div>
        <div className="flex justify-between border-b border-[#F2F4F7] pb-6 pt-8 sm:gap-[64px] sm:border-b-0 sm:pb-0 sm:pt-0">
          <div className="flex flex-col gap-3">
            <Link
              className="text-base font-normal text-[#475467] sm:text-xl"
              href="#"
            >
              Home
            </Link>
            <Link
              className="text-base font-normal text-[#475467] sm:text-xl"
              href="#"
            >
              About us
            </Link>
            <Link
              className="text-base font-normal text-[#475467] sm:text-xl"
              href="#"
            >
              Work
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <Link
              className="text-base font-normal text-[#475467] sm:text-xl"
              href="#"
            >
              Services
            </Link>
            <Link
              className="text-base font-normal text-[#475467] sm:text-xl"
              href="#"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between pt-6 sm:flex-row sm:pt-0">
        <p className="text-sm font-normal text-[#667085] sm:text-xl">
          Toronto, ON Canada
        </p>
        <p className="text-sm font-normal text-[#667085] sm:text-xl">
          OpenCore. All Rights Reserved
        </p>
      </div>
    </section>
  </footer>
);
