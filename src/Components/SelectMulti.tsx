import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

type Person = {
  id: number;
  name: string;
};

const people: Person[] = [
  { id: 1, name: 'Vilnius' },
  { id: 2, name: 'Kaunas' },
  { id: 3, name: 'Klaipeda' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
  { id: 7, name: 'Caroline Schultz' },
  { id: 8, name: 'Mason Heaney' },
  { id: 9, name: 'Claudie Smitham' },
  { id: 10, name: 'Emil Schaefer' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function truncateString(str: string, maxLength: number) {
  if (str.length <= maxLength) {
    return str;
  }
  return str.substr(0, maxLength - 3) + '...';
}

export default function SelectMulti() {
  const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);
  const maxLength = 35;

  const truncatedNames = selectedPeople.map((person) => person.name).join(', ');
  const displayNames =
    truncatedNames.length > maxLength
      ? truncateString(truncatedNames, maxLength)
      : truncatedNames;

  return (
    <Listbox value={selectedPeople} onChange={setSelectedPeople} multiple>
      {({ open }) => (
        <>
          <div className='relative '>
            <Listbox.Button className='relative w-full cursor-default py-4 pl-8 pr-10 text-left text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'>
              <span className='block truncate'>
                {displayNames.length === 0 ? 'All Cities' : displayNames}
              </span>
              <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                {selectedPeople.length > 3 && (
                  <span className='rounded-full py-1.5 px-2 bg-indigo-400 text-slate-50 leading-3'>
                    {selectedPeople.length}
                  </span>
                )}

                <ChevronUpDownIcon
                  className='h-5 w-5 text-gray-400'
                  aria-hidden='true'
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'>
              <Listbox.Options className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-8 pr-4'
                      )
                    }
                    value={person}>
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? 'font-semibold' : 'font-normal',
                            'block truncate'
                          )}>
                          {person.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 left-0 flex items-center pl-1.5'
                            )}>
                            <CheckIcon className='h-5 w-5' aria-hidden='true' />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
