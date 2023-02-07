import React from "react";
import Logo from "../../assets/svg/logo.svg";
import overview from "../../assets/sidebar-icons/overview.svg";
import finance from "../../assets/sidebar-icons/finance.svg";
import payment from "../../assets/sidebar-icons/payment.svg";
import profile from "../../assets/sidebar-icons/profile.svg";

export default function SideBar() {
  return (
    <div className="bg-white w-1/5">
      <div>
        <img src={Logo} alt="" />
      </div>
      <div className="lato">
        <div className="dark-blue flex px-3 py-3 cursor-pointer rounded-md">
          <img src={overview} alt="" />
          <p className="text-white">Overview</p>
        </div>
        <div className="flex px-3 py-3 cursor-pointer">
          <img src={finance} alt="" />
          <p className="siderbar-text">Finance</p>
        </div>
        <div className="flex px-3 py-3 cursor-pointer">
          <img src={payment} alt="" />
          <p className="siderbar-text">Payment</p>
        </div>
        <div className="flex px-3 py-3 cursor-pointer">
          <img src={profile} alt="" />
          <p className="siderbar-text">Profile</p>
        </div>
      </div>
    </div>
  );
}
