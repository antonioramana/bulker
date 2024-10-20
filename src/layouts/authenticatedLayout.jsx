import { useEffect } from "react";
import Header from "../components/Header/index";
import Sidebar from "../components/Sidebar/index";
import { PropsWithChildren, ReactNode, useState } from "react";

export default function Authenticated({
    children,
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [user, setUser] = useState(null);

    // Fetch user from local storage when the component mounts
    useEffect(() => {
      const storedUser = localStorage.getItem('user'); // Replace 'user' with your actual key
      if (storedUser) {
        const user = JSON.parse(storedUser);
        setUser(user); 
    } else {
      window.location.href = '/bulker/login'; 
    }
    }, []); 
    console.log("userrr",user);
    return (
        <div className="bg-gray dark:text-bodydark">
        {/* <!-- ===== Page Wrapper Start ===== --> */}
        <div className="flex h-screen overflow-hidden">
          {/* <!-- ===== Sidebar Start ===== --> */}
          <Sidebar user={user} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* <!-- ===== Sidebar End ===== --> */}
  
          {/* <!-- ===== Content Area Start ===== --> */}
          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            {/* <!-- ===== Header Start ===== --> */}
            <Header user={user} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            {/* <!-- ===== Header End ===== --> */}
  
            {/* <!-- ===== Main Content Start ===== --> */}
            <main>
              <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                {children}
              </div>
            </main>
            {/* <!-- ===== Main Content End ===== --> */}
          </div>
          {/* <!-- ===== Content Area End ===== --> */}
        </div>
        {/* <!-- ===== Page Wrapper End ===== --> */}
      </div>
    );
}
