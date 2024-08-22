export default function AppMenu(){
    return(
    <nav className="bg-pink-300 text-white p-2">
        <div className="container mx-auto">
          <ul className="flex space-x-4">
          <li>
              <a href="/" className="hover:bg-pink-200 px-3 py-2 rounded">
                หน้าหลัก
              </a>
            </li>
            <li>
              <a href="/herbs/MyHerbForm" className="hover:bg-pink-200 px-3 py-2 rounded">
                เพิ่มข้อมูลยาสมุนไพร
              </a>
            </li>
            <li>
              <a href="/herbs/MyHerbList" className="hover:bg-pink-200 px-3 py-2 rounded">
                ข้อมูลยาสมุนไพร
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
}