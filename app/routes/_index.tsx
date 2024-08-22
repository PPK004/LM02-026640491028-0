// 026640491028-0-พิมพิกา-อินทัตสิงห์
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import AppMenu from "./templante/menu";
import Appheader from "./templante/header";
import Appfooter from "./templante/footer";

export const meta: MetaFunction = () => {
  return [
    { title: "MyHomePage" },
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
        <h1 className="text-3xl">ผู้สร้าง</h1>
        <ul className="list-disc mt-4 pl-6 space-y-2">
          <li>Name: Pimpika Intutsing</li>
          <li>No.: 026640491028-0</li>
          <li>Email: phimpika.int@rmutto.ac.th</li>
        </ul>
        <img src="/figures/pf.jpg" style={{ width: '20%', height: '20%' }} alt="Example" />
        <div className="mt-4">
          <a
            href="https://www.facebook.com/people/Pimpika-Intutsing/pfbid02jtEcF4gA74usmBaaw417atg5LovmK3uLSMArKzeqEPAJjAa1iuEnLdq1cYSUGyYFl/?locale=es_LA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 12.1c0 5.5-4.5 10-10 10S2 17.6 2 12.1 6.5 2.1 12 2.1c2.3 0 4.4.8 6.1 2.1L12 12h-3v-2h3V8.2c0-3 1.7-4.6 4.2-4.6 1.2 0 2.2.1 2.5.1v2.8h-1.7c-1.3 0-1.6.7-1.6 1.6v2h3.3l-.5 3h-2.8v7.5c5.5-.9 9.5-5.4 9.5-11.4z"
              />
            </svg>
            กดเพื่อไปยัง Facebook ผู้สร้าง
          </a>
        </div>
      </main>
      <Appfooter/>
    </div>
  );
}
