import React from "react";
import bellIcon from "../../assets/header-icons/bell.svg";
import indicator from "../../assets/header-icons/indicator.svg";
import dropdownIcon from "../../assets/header-icons/dropdown.svg";

export default function Header({
  setOpen,
}: {
  setOpen: (state: boolean) => void;
}) {
  return (
    <div className='w-full bg-white flex justify-between md:justify-end px-5 md:px-16 py-5'>
      <button onClick={() => setOpen(true)} className='md:hidden'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='2'
          stroke='currentColor'
          className='w-8 h-8'>
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
          />
        </svg>
      </button>
      <div className='flex gap-5 md:gap-10'>
        <div className='relative'>
          <img alt='' src={bellIcon} />
          <img alt='' src={indicator} className='absolute top-0 right-0' />
        </div>
        <div className='flex gap-2 items-center text-base'>
          <img alt='' src='profile.png' />
          <h3 className='font-semibold'>Timothy</h3>
          <img alt='' src={dropdownIcon} />
        </div>
      </div>
    </div>
  );
}
