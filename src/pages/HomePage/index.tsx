import React from "react";
import Header from "../../components/header";
import SideBar from "../../components/sidebar";

export default function HomePage() {
  return (
    <div className="w-full flex">
      <SideBar />
      <div className="w-4/5">
        <Header />
      </div>
    </div>
  );
}
