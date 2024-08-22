// 026640491028-0-พิมพิกา-อินทัตสิงห์
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import AppMenu from "./templante/menu";
import Appheader from "./templante/header";
import Appfooter from "./templante/footer";

export const meta: MetaFunction = () => {
  return [
    { title: "ดูข้อมูล" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
  
    <div className="font-sans">
      <Appheader/>
      <AppMenu/>
      <main className="p-4 container mx-auto">
        <hr className="m-4" />
        <h1 className="text-3xl">ข้อมูลยาสมุนไพร</h1>
        
      </main>
      <Appfooter/>
    </div>
  );
}
