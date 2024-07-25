'use client';

import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FormEvent } from 'react';

interface FormElements extends HTMLFormControlsCollection {
  searchInput: HTMLInputElement;
}
interface SearchFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export const SEARCH_QUERY_KEY = 'search';

export const SearchInputForm = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const onFormSubmit = (event: FormEvent<SearchFormElement>) => {
    event.preventDefault();
    const searchValue = event.currentTarget.elements.searchInput.value;

    const params = new URLSearchParams(searchParams);
    if (searchValue) {
      params.set(SEARCH_QUERY_KEY, searchValue);
    } else {
      params.delete(SEARCH_QUERY_KEY);
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <form
      className="relative w-full rounded-2xl border-2 border-[#EAECF0] px-4 py-5 transition-colors has-[:focus]:border-[#D0D5DD]"
      onSubmit={onFormSubmit}
    >
      <button className="absolute" type="submit">
        <Image alt="search" height={24} src="/search-icon.svg" width={24} />
      </button>
      <input
        className="w-full rounded-2xl border-0 pl-10 font-normal outline-0 placeholder:text-[#98A2B3]"
        defaultValue={searchParams.get(SEARCH_QUERY_KEY)?.toString()}
        name="searchInput"
        placeholder="Search for resources and tutorials"
      />
    </form>
  );
};
