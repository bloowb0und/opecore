'use client';

import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { cn } from '@/utils/tailwind-util';

const TabOptions = [
  { title: 'All Resources', value: '' },
  { title: 'Design', value: 'design' },
  { title: 'Development', value: 'development' },
  { title: 'Marketing', value: 'marketing' },
  { title: 'Branding', value: 'branding' },
];

export const TAB_QUERY_KEY = 'tab';

export const TabSelector = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const isTabActive = (tabValue: string) => {
    const tabValueFromUrl = searchParams.get(TAB_QUERY_KEY) ?? '';

    return tabValueFromUrl === tabValue;
  };

  const onTabClick = (tabValue: string) => {
    if (!isTabActive(tabValue)) {
      const params = new URLSearchParams(searchParams);
      if (tabValue) {
        params.set(TAB_QUERY_KEY, tabValue);
      } else {
        params.delete(TAB_QUERY_KEY);
      }
      router.replace(`${pathname}?${params.toString()}`);
    }
  };

  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-4">
        {TabOptions.map((tab) => (
          <button
            key={tab.value}
            type="button"
            className={cn(
              'flex items-center gap-2 rounded-lg border px-[16px] py-[10px] text-base font-medium transition-colors',
              isTabActive(tab.value)
                ? 'border-[#EDF2F5] bg-[#EDF2F5] text-[#294F74]'
                : 'border-[#EAECF0] bg-white text-[#667085]',
            )}
            onClick={() => onTabClick(tab.value)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <button
        className="flex items-center gap-2 rounded-lg border border-[#EAECF0] bg-white px-[16px] py-[10px]"
        type="button"
      >
        <Image alt="filter" height={16} src="/filter-icon.svg" width={16} />
        <p className="text-base font-medium text-[#667085]">Filters</p>
      </button>
    </div>
  );
};
