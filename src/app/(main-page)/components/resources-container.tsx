'use client';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

import { TAB_QUERY_KEY } from '@/app/(main-page)/components/tab-selector';
import { chunkArray } from '@/utils/array.utils';
import { cn } from '@/utils/tailwind-util';

const Resources: {
  title: string;
  imageUrl: string;
  tags: { title: string; iconUrl?: string; value: string }[];
}[] = [
  {
    title: 'Case Study Template: FlipX, an Investment Attraction Startup',
    imageUrl: '/cases/first.svg',
    tags: [
      {
        title: 'Design file',
        iconUrl: '/resources-tags-icons/file.svg',
        value: 'design',
      },
    ],
  },
  {
    title: 'Designing Impression: The Power of First Impressions',
    imageUrl: '/cases/second.svg',
    tags: [
      {
        title: 'Github Resource',
        iconUrl: '/resources-tags-icons/code.svg',
        value: 'development',
      },
    ],
  },
  {
    title: 'Fluid Card Animation in After Effects',
    imageUrl: '/cases/third.svg',
    tags: [
      { title: 'Design', value: 'design' },
      { title: 'UI UX', value: 'development' },
      { title: 'Branding', value: 'branding' },
    ],
  },
  {
    title: 'Designing Impression: The Power of First Impressions2',
    imageUrl: '/cases/fourth.svg',
    tags: [
      { title: 'Design', value: 'design' },
      { title: 'UI UX', value: 'development' },
      { title: 'Branding', value: 'branding' },
    ],
  },
  {
    title: 'Designing Impression: The Power of First Impressions3',
    imageUrl: '/cases/fifth.svg',
    tags: [{ title: 'Design', value: 'design' }],
  },
  {
    title: 'OpenCore Customer Acquisition Strategy',
    imageUrl: '/cases/sixth.svg',
    tags: [
      {
        title: 'Marketing PDF',
        iconUrl: '/resources-tags-icons/pdf.svg',
        value: 'marketing',
      },
    ],
  },
];

const AMOUNT_OF_ITEMS_PER_CHUNK = 3;
const AMOUNT_OF_ITEMS_SHOWN_ON_MOBILE = 3;

export const ResourcesContainer = () => {
  const searchParams = useSearchParams();
  const selectedTab = searchParams.get(TAB_QUERY_KEY);

  const filteredResources = useMemo(
    () =>
      Resources.filter((x) =>
        selectedTab
          ? x.tags.filter((t) => t.value === selectedTab).length > 0
          : true,
      ),
    [selectedTab],
  );

  const chunkedResources = useMemo(
    () => chunkArray(filteredResources, AMOUNT_OF_ITEMS_PER_CHUNK),
    [filteredResources],
  );

  const isChunkIdxShownOnMobile = (idx: number) => {
    return (
      (idx + 1) * AMOUNT_OF_ITEMS_PER_CHUNK > AMOUNT_OF_ITEMS_SHOWN_ON_MOBILE
    );
  };

  return (
    <div className="flex flex-col gap-10 sm:gap-20">
      {chunkedResources.map((chunk, idx) => (
        <div
          key={idx}
          className={cn(
            'flex-col gap-10 sm:flex-row sm:gap-5',
            isChunkIdxShownOnMobile(idx) ? 'flex' : 'hidden sm:flex',
          )}
        >
          {chunk.map((resource) => (
            <div
              key={resource.title}
              className="flex w-full flex-col gap-4 sm:w-[33%]"
            >
              <Image
                alt={resource.title}
                className="w-full sm:w-[400px]"
                height={250}
                src={resource.imageUrl}
                width={400}
              />
              <p className="text-xl font-medium text-[#344054] sm:text-2xl">
                {resource.title}
              </p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-5">
                {resource.tags.map((tag) => (
                  <div
                    key={tag.title}
                    className="flex items-center gap-1 rounded bg-[#F9FAFB] px-2 py-1"
                  >
                    {tag.iconUrl ? (
                      <Image
                        alt={tag.title}
                        height={16}
                        src={tag.iconUrl}
                        width={16}
                      />
                    ) : null}
                    <p className="text-sm font-medium text-[#667085]">
                      {tag.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
