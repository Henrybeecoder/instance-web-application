import React, { ReactNode, useState } from "react";
import Header from "./header";
import SideBar from "./sidebar";

export default function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className='w-full flex fixed inset-0 lato'>
      <SideBar open={open} setOpen={setOpen} />
      <div className='w-full md:w-4/5 h-full'>
        <Header setOpen={setOpen} />
        <div className='bg-neutral-100 h-full px-2 md:px-5 pt-6 pb-16 overflow-y-auto'>
          {children}
        </div>
      </div>
    </div>
  );
}
