import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import AppMenu from "./templante/menu";
import Appheader from "./templante/header";
import Appfooter from "./templante/footer";

export const meta: MetaFunction = () => {
  return [
    { title: "เพิ่มข้อมูล" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans">
        <Appheader/>      
        <AppMenu />
      <main className="p-4 container mx-auto">
        <hr className="m-4" />
        <h1 className="text-3xl font-bold mb-4">หน้าเพิ่มข้อมูลสมุนไพร</h1>
        
        <form className="space-y-4">
          <div className="mb-4">
            <label htmlFor="herbName" className="block text-gray-700 font-semibold mb-2">
              ชื่อสมุนไพร
            </label>
            <input
              type="text"
              id="herbName"
              name="herbName"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="กรอกชื่อสมุนไพร"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="producerName" className="block text-gray-700 font-semibold mb-2">
              ชื่อผู้ผลิต
            </label>
            <input
              type="text"
              id="producerName"
              name="producerName"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="กรอกชื่อผู้ผลิต"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="contactInfo" className="block text-gray-700 font-semibold mb-2">
              ข้อมูลติดต่อผู้ผลิต
            </label>
            <input
              type="text"
              id="contactInfo"
              name="contactInfo"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="กรอกข้อมูลติดต่อ"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="usageInstructions" className="block text-gray-700 font-semibold mb-2">
              วิธีการใช้ยา
            </label>
            <textarea
              id="usageInstructions"
              name="usageInstructions"
              className="w-full p-2 border border-gray-300 rounded"
              rows={4}
              placeholder="กรอกวิธีการใช้ยา"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="herbImage" className="block text-gray-700 font-semibold mb-2">
              ภาพตัวอย่างสมุนไพร
            </label>
            <input
              type="url"
              id="herbImage"
              name="herbImage"
              accept="image/*"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            เพิ่มข้อมูล
          </button>
        </form>
      </main>
      <Appfooter />
    </div>
  );
}
