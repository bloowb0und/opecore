import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => (
  <footer className="bg-[#294F74] px-[72px] py-[86px]">
    <section className="bg-logo-full bg-logo-footer flex flex-col gap-[64px] rounded-[36px] bg-white bg-no-repeat pb-[160px] pl-[100px] pr-[80px] pt-[80px]">
      <div className="flex justify-between">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <p className="text-xl font-semibold text-[#1D2939]">Say Hello!</p>
            <p className="text-xl font-normal text-[#475467]">
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
        <div className="flex gap-[64px]">
          <div className="flex flex-col gap-3">
            <Link className="text-xl font-normal text-[#475467]" href="#">
              Home
            </Link>
            <Link className="text-xl font-normal text-[#475467]" href="#">
              About us
            </Link>
            <Link className="text-xl font-normal text-[#475467]" href="#">
              Work
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <Link className="text-xl font-normal text-[#475467]" href="#">
              Services
            </Link>
            <Link className="text-xl font-normal text-[#475467]" href="#">
              Contact us
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-xl font-normal text-[#667085]">Toronto, ON Canada</p>
        <p className="text-xl font-normal text-[#667085]">
          OpenCore. All Rights Reserved
        </p>
      </div>
    </section>
  </footer>
);
