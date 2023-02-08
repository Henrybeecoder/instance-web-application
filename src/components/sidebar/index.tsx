import React from "react";
import Logo from "../../assets/svg/logo.svg";
import overview from "../../assets/sidebar-icons/overview.svg";
import finance from "../../assets/sidebar-icons/finance.svg";
import payment from "../../assets/sidebar-icons/payment.svg";
import profile from "../../assets/sidebar-icons/profile.svg";
import logoutSvg from "../../assets/sidebar-icons/logout.svg";

export default function SideBar() {
  return (
    <div className='bg-white w-1/5 px-8 py-5'>
      <div>
        <img src={Logo} alt='' />
      </div>
      <div className='lato mt-16 space-y-3'>
        <div className='dark-blue flex px-7 py-4 cursor-pointer gap-1 rounded-2xl'>
          <img src={overview} alt='' />
          <p className='text-white'>Overview</p>
        </div>
        <div className='flex px-3 py-3 cursor-pointer gap-1'>
          <img src={finance} alt='' />
          <p className='siderbar-text'>Finance</p>
        </div>
        <div className='flex px-3 py-3 cursor-pointer gap-1'>
          <img src={payment} alt='' />
          <p className='siderbar-text'>Payment</p>
        </div>
        <div className='flex px-3 py-3 cursor-pointer gap-1'>
          <img src={profile} alt='' />
          <p className='siderbar-text'>Profile</p>
        </div>
      </div>

      <button className='flex gap-3 items-center text-red-500 mt-40 mx-auto ml-10'>
        <img alt='' src={logoutSvg} />
        <p>Logout</p>
      </button>
    </div>
  );
}
