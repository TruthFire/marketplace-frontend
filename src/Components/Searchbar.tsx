import { MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/outline';
// import { Listbox } from '@headlessui/react';
import SelectMulti from './SelectMulti';

// const Container: React.FC<ContainerProps> = ({ children }) => {
//   return <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>{children}</div>;
// };


const Searchbar = () => {
  return (
    <>
      <form
        action=''
        className='relative mt-2 border border-gray-300 rounded-md shadow-sm'>
        <fieldset className='flex w-full '>
          <div className='searchfield basis-7/12 border-r border-gray-300'>
            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2'>
              <span className='text-gray-500 sm:text-sm'>
                <MagnifyingGlassIcon
                  className='block h-6 w-6'
                  aria-hidden='true'
                />
              </span>
            </div>
            <input
              type='text'
              name='price'
              id='price'
              className='pl-8 w-full border-none py-4'
              placeholder='Search among 1000 ads'
            />
          </div>
          <div className='cityfield basis-4/12  border-r border-gray-300 relative'>
            <div className='pointer-events-none absolute inset-y-0 flex items-center pl-2'>
              <span className='text-gray-500 sm:text-sm'>
                <MapPinIcon className='block h-6 w-6' aria-hidden='true' />
              </span>
            </div>
            {/* <div className='pl-8'> */}
            <SelectMulti />
            {/* </div> */}
          </div>
          <button className='basis-1/12 py-4'>Search</button>
        </fieldset>
      </form>
      {/* <SelectMulti /> */}
    </>
  );
};

export default Searchbar;

// Works fine only on desktop, need to make it adaptive later
