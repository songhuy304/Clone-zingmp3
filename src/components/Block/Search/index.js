import React , { useEffect, useRef, useState } from 'react';
import useDebounce from '~/hooks/useDebounce';
import SearchItem from './SearchItem';
import { SearchApi } from '~/Api';
import { formatRegexSearch } from '~/contanst';

function SearchInput() {
  const searchContainerRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const debouncedSearchValue = useDebounce(value, 2000);

  const handleClickOutside = (event) => {
    if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
      setIsFocused(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleType = (e) => {
    setValue(e.target.value);
    if(!e.target.value){
      setSearchResult([]);
    }
  }
  const searchFormat = formatRegexSearch(debouncedSearchValue);
  useEffect(() => {
    if (searchFormat) {
      const fetchData = async () => {
        try {
          const res = await SearchApi(searchFormat);
          setSearchResult(res); // Assuming res contains the search results
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }
  }, [searchFormat]);
  return (
    <div ref={searchContainerRef} className="hidden md:inline-block relative w-full max-w-[300px] min-w-[150px] text-gray-600">
      <input
        onFocus={() => setIsFocused(true)}
        type="search"
        onChange={handleType}
        value={value}
        name="search"
        placeholder="Nhập vào tên ca sĩ, bài hát, album"
        className={`bg-[#1b2639] h-10 px-5 w-full pr-10 text-white ${
          isFocused ? 'rounded-t-[20px] outline-none' : 'rounded-[20px]'
        } text-sm `}
        autoComplete="off"
      />
      <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
        <svg
          className="h-4 w-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 56.966 56.966"
          style={{ enableBackground: "new 0 0 56.966 56.966" }}
          xmlSpace="preserve"
          width="512px"
          height="512px"
        >
          <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
        </svg>
      </button>
      {isFocused && (
        <div className="absolute overflow-y-scroll top-[39px] max-h-[calc(100vh_-_180px)] rounded-b-[20px] bg-[#1b2639] right-0 w-full px-3 py-2">
          <SearchItem listdata={searchResult} />
        </div>
      )}
    </div>
  );
}

export default SearchInput;
