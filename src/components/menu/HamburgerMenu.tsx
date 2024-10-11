import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart,
  FileText,
  HelpCircle,
  Home,
  LogOut,
  Menu,
  User,
  X,
} from "lucide-react";
import { useEffect, useRef } from "react";
import Button from "../shared/Button";

const HamburgerMenu: React.FC<{
  isSideMenuOpen: boolean;
  setIsSideMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}> = ({
  isSideMenuOpen,
  setIsSideMenuOpen,
  setIsModalOpen
}: {
  isSideMenuOpen: boolean;
  setIsSideMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsSideMenuOpen(isSideMenuOpen);
  }, [isSideMenuOpen, setIsSideMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsSideMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, setIsSideMenuOpen]);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <div ref={menuRef}>
      <Button variant="ghost" size="icon" onClick={toggleSideMenu}>
        <Menu className="h-10 w-10 transition-transform duration-300 hover:scale-110" />
      </Button>

      <AnimatePresence>
        {isSideMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-y-0 left-0 w-64 bg-gradient-to-b from-blue-400 to-green-300 shadow-lg z-50 overflow-y-auto"
          >
            <div className="p-4 md:p-6 flex flex-col h-full">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white ">Menu</h2>
                <Button variant="ghost" size="icon" onClick={toggleSideMenu}>
                  <X className="h-6 w-6 text-white hover:scale-110 transition-transform duration-200" />
                </Button>
              </div>
              <nav className="flex-grow">
                <ul className="space-y-4">
                  {[
                    { name: "Home", icon: <Home className="mr-3 h-5 w-5" /> },
                    {
                      name: "Analytics",
                      icon: <BarChart className="mr-3 h-5 w-5" />,
                    },
                    {
                      name: "Reports",
                      icon: <FileText className="mr-3 h-5 w-5" />,
                    },
                    {
                      name: "Profile",
                      icon: <User className="mr-3 h-5 w-5" />,
                    },
                    {
                      name: "Help",
                      icon: <HelpCircle className="mr-3 h-5 w-5" />,
                    },
                  ].map((item) => (
                    <li key={item.name}>
                      <a
                        href="/"
                        className="flex items-center text-white hover:text-gray-200 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-gradient-to-r from-blue-400 to-blue-600"
                      >
                        {item.icon}
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <Button
                variant="danger"
                size="icon"

                onClick={()=> setIsModalOpen(true)}
                className="mb-6 md:mb-0 mt-auto flex items-center text-white hover:text-gray-100 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-red-600"
              >
                <LogOut className="mr-2 h-5 w-5" />
                Logout
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;
