import React from "react";
import Logo from "../../assets/svg/logo.svg";
import overview from "../../assets/sidebar-icons/overview.svg";
import finance from "../../assets/sidebar-icons/finance.svg";
import payment from "../../assets/sidebar-icons/payment.svg";
import profile from "../../assets/sidebar-icons/profile.svg";
import logoutSvg from "../../assets/sidebar-icons/logout.svg";
//@ts-ignore
import { Content, Overlay, Portal, Root } from "@radix-ui/react-dialog";

export default function SideBar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (state: boolean) => void;
}) {
  return (
    <>
      <Root open={open} onOpenChange={setOpen}>
        <Portal>
          <Overlay
            className={"fixed inset-0 z-30 bg-black bg-opacity-40 md:hidden"}
          />
          <Content className={"fixed w-4/6 z-40 bg-white h-full md:hidden"}>
            <img src={Logo} alt="" className="p-4" />
            <div className="lato mt-16 space-y-3">
              <div className="dark-blue flex px-7 py-4 cursor-pointer gap-1">
                <img src={overview} alt="" />
                <p className="text-white">Overview</p>
              </div>
              <div className="flex px-3 py-3 cursor-pointer gap-1">
                <img src={finance} alt="" />
                <p className="siderbar-text">Finance</p>
              </div>
              <div className="flex px-3 py-3 cursor-pointer gap-1">
                <img src={payment} alt="" />
                <p className="siderbar-text">Payment</p>
              </div>
              <div className="flex px-3 py-3 cursor-pointer gap-1">
                <img src={profile} alt="" />
                <p className="siderbar-text">Profile</p>
              </div>
            </div>

            <button className="flex gap-3 items-center text-red-500 mt-40 mx-auto ml-10 text-sm">
              <img alt="" src={logoutSvg} />
              <p>Logout</p>
            </button>
          </Content>
        </Portal>
      </Root>
      {/* screen-lg */}
      <div className="bg-white w-1/5 py-5 hidden md:block">
        <div className="px-8">
          <img src={Logo} alt="" />
        </div>
        <div className="lato mt-16 space-y-3">
          <div className="w-full relative">
            <div className="dark-blue absolute left-0 h-full w-3 z-20 rounded-tr-xl rounded-br-xl" />
            <div className="dark-blue flex px-7 mx-8 py-4 cursor-pointer gap-1 rounded-2xl">
              <img src={overview} alt="" />
              <p className="text-white">Overview</p>
            </div>
          </div>
          <div className="flex p-3 mx-8 cursor-pointer gap-1">
            <img src={finance} alt="" />
            <p className="siderbar-text">Finance</p>
          </div>
          <div className="flex p-3 mx-8 cursor-pointer gap-1">
            <img src={payment} alt="" />
            <p className="siderbar-text">Payment</p>
          </div>
          <div className="flex p-3 mx-8 cursor-pointer gap-1">
            <img src={profile} alt="" />
            <p className="siderbar-text">Profile</p>
          </div>
        </div>

        <button className="flex gap-3 items-center text-red-500 mt-40 mx-auto ml-10 text-sm">
          <img alt="" src={logoutSvg} />
          <p>Logout</p>
        </button>
      </div>
    </>
  );
}
