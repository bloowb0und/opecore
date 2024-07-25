import { BannerSection } from '@/app/(main-page)/components/sections/banner-section';
import { MainSection } from '@/app/(main-page)/components/sections/main-section';
import { ResourcesSection } from '@/app/(main-page)/components/sections/resources-section';

const Page = () => {
  return (
    <>
      <MainSection />
      <ResourcesSection />
      <BannerSection />
    </>
  );
};

export default Page;
