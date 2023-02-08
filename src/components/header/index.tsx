import React from "react";
import bellIcon from "../../assets/header-icons/bell.svg";
import indicator from "../../assets/header-icons/indicator.svg";
import dropdownIcon from "../../assets/header-icons/dropdown.svg";

export default function Header() {
  return (
    <div className='w-full bg-white flex justify-end px-16 py-5'>
      <div className='flex gap-10'>
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
