// import { Calendar, Home, Inbox, LogOut, LogIn, LogOutIcon, LogInIcon, ArrowLeft } from "lucide-react"

// import {
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
// } from "@/components/ui/sidebar"
// import { useDispatch, useSelector } from "react-redux"
// import { useNavigate } from "react-router-dom"
// import { Button } from "@/components/ui/button";
// import { useToast } from '@/components/ui/use-toast';

// import { logout } from "../../../featured/auth/authSlice"
// import { useEffect, useState } from "react";

// export function AppSidebar() {
//   const authStatus = useSelector((state: any) => state.auth.status)
//   const successMessage = useSelector((state: any) => state.auth.successMessage)

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { toast } = useToast();

//   const logoutHandler = () => {
//     dispatch(logout());
//     toast({
//       title: "Logout Successful",
//       description: successMessage || "You have been logged out successfully.",
//     });
//     navigate('/admin/login');
//   }

//   const items = [
//     { title: "Home", url: "/admin/dashboard", icon: Home },
//     { title: "Create Blog", url: "/admin/create-blog", icon: Inbox },
//     { title: "Blogs", url: "/admin/blogs", icon: Calendar },
//   ]

//   // State to track current theme
//   const [isDarkMode, setIsDarkMode] = useState(() => {
//     return document.documentElement.classList.contains("dark");
//   });

//   // When user toggles theme
//   const toggleTheme = () => {
//     const newTheme = !isDarkMode;
//     document.documentElement.classList.toggle("dark", newTheme);
//     localStorage.setItem("theme", newTheme ? "dark" : "light");
//     setIsDarkMode(newTheme); // update state so component re-renders
//   };



//   return (
//     <Sidebar className="bg-slate-200 dark:bg-gray-800 flex flex-col justify-between h-screen">
//       {/* Top section */}
//       <SidebarContent>
//         <SidebarGroup>
//           <SidebarGroupLabel className="mb-4">CYNERZA</SidebarGroupLabel>
//           <SidebarGroupContent>
//             <SidebarMenu>
//               {/* Top menu items */}
//               {authStatus && items.map((item) => (
//                 <SidebarMenuItem key={item.title}>
//                   <SidebarMenuButton asChild>
//                     <a href={item.url}>
//                       <item.icon />
//                       <span>{item.title}</span>
//                     </a>
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//               ))}

//               {/* Logout / Login Button */}
//               {authStatus ? (
//                 <SidebarMenuButton onClick={logoutHandler}>
//                   <ArrowLeft />
//                   <span>Logout</span>
//                 </SidebarMenuButton>
//               ) : (
//                 <SidebarMenuButton onClick={() => navigate("/admin/login")}>
//                   <LogInIcon />
//                   <span>Login</span>
//                 </SidebarMenuButton>
//               )}
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>
//       </SidebarContent>

//       {/* Bottom section: Dark Mode Button */}
//       <div className="p-4">
//         <SidebarMenu>
//           <SidebarMenuButton
//             onClick={toggleTheme}
//             aria-label="Toggle dark mode"
//           >
//             <span className="ml-2">
//               {isDarkMode ? 'Light' : 'Dark'}
//             </span>
//           </SidebarMenuButton>
//         </SidebarMenu>

//       </div>
//     </Sidebar>
//   );
// }


import { Calendar, Home, Inbox, LogOut, LogIn, Moon, Sun } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from '@/components/ui/use-toast';
import { logout } from "../../../featured/auth/authSlice";
import { useEffect, useState } from "react";

export function AppSidebar() {
  const authStatus = useSelector((state: any) => state.auth.status);
  const successMessage = useSelector((state: any) => state.auth.successMessage);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return document.documentElement.classList.contains("dark");
  });

  const logoutHandler = () => {
    dispatch(logout());
    toast({
      title: "Logout Successful",
      description: successMessage || "You have been logged out successfully.",
    });
    navigate('/admin/login');
  };

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    setIsDarkMode(newTheme);
  };

  const items = [
    { title: "Home", url: "/admin/dashboard", icon: Home },
    { title: "Create Blog", url: "/admin/create-blog", icon: Inbox },
    { title: "Blogs", url: "/admin/blogs", icon: Calendar },
  ];

  return (
    <Sidebar className="bg-slate-100 dark:bg-gray-800 flex flex-col justify-between h-screen transition-colors duration-300">
      {/* Top section */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="mb-4 text-lg font-bold text-slate-800 dark:text-slate-200">
            CYNERZA
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {authStatus && items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    className="hover:bg-slate-200 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <a href={item.url} className="flex items-center gap-3 p-3">
                      <item.icon className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                      <span className="text-slate-700 dark:text-slate-300">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

              {authStatus ? (
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    onClick={logoutHandler}
                    className="hover:bg-slate-200 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-3 py-3 ml-1">
                      <LogOut className="w-5 h-4 text-slate-600 dark:text-slate-300" />
                      <span className="text-slate-700 dark:text-slate-300 ">Logout</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ) : (
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    onClick={() => navigate("/admin/login")}
                    className="hover:bg-slate-200 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-3 p-3">
                      <LogIn className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                      <span className="text-slate-700 dark:text-slate-300">Login</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Bottom section: Theme Toggle */}
      <div className="p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={toggleTheme}
              className="hover:bg-slate-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <div className="flex items-center gap-3 p-3">
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                ) : (
                  <Moon className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                )}
                <span className="text-slate-700 dark:text-slate-300">
                  {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </div>
    </Sidebar>
  );
}