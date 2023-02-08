import React, { ReactNode } from "react";
import Header from "./header";
import SideBar from "./sidebar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='w-full flex fixed inset-0'>
      <SideBar />
      <div className='w-4/5 h-full'>
        <Header />
        <div className='bg-neutral-100 h-full px-5 py-6'>{children}</div>
      </div>
    </div>
  );
}
