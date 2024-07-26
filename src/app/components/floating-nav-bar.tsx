import Image from 'next/image';

export const FloatingNavBar = () => (
  <nav className="sticky left-1/2 top-[52px] flex h-[56px] w-[140px] -translate-x-1/2 items-center justify-center rounded-full border border-[#D0D5DD] bg-[#FCFCFD] sm:h-[88px] sm:w-[175px]">
    <button className="w-full px-6 py-[26px]" type="button">
      <Image alt="logo" height={38} src="/logo.svg" width={38} />
    </button>
    <div className="h-full w-[1px] min-w-[1px] bg-[#D0D5DD]" />
    <button className="w-full px-6 py-[26px]" type="button">
      <Image alt="burger" height={36} src="/burger.svg" width={41} />
    </button>
  </nav>
);
