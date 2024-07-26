import { ResourcesContainer } from '@/app/(main-page)/components/resources-container';
import { SearchInputForm } from '@/app/(main-page)/components/search-input-form';
import { TabSelector } from '@/app/(main-page)/components/tab-selector';
import { Suspense } from 'react';
import { Loader } from '@/app/components/loader';

export const ResourcesSection = () => {
  return (
    <section className="flex w-full flex-col items-center gap-16">
      <Suspense fallback={<Loader />}>
        <div className="flex w-full flex-col gap-8">
          <SearchInputForm />
          <TabSelector />
        </div>
        <ResourcesContainer />
      </Suspense>
    </section>
  );
};
