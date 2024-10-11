import { Bell, Search } from "lucide-react";
import React from "react";
import Avatar, { AvatarFallback, AvatarImage } from "../shared/Avatar";
import Button from "../shared/Button";
import HamburgerMenu from "../menu/HamburgerMenu";

const Header: React.FC<{
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
  return (
    <header className="bg-gradient-to-b from-blue-400 to-green-300 shadow-lg">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid layout for header */}
        <div className="grid grid-cols-2 md:grid-cols-3 items-center py-4">
          <div className="flex justify-start items-center">
          <HamburgerMenu
              isSideMenuOpen={isSideMenuOpen}
              setIsSideMenuOpen={setIsSideMenuOpen}
              setIsModalOpen={setIsModalOpen}
            />
            <h1 className="md:hidden text-3xl font-extrabold text-center text-gray-800">
              Dashboard
            </h1>
          </div>
          <h1 className="hidden md:block text-3xl font-extrabold text-center text-gray-800">
            Dashboard
          </h1>
          <div className="flex justify-end">
            <Button variant="ghost" size="icon" className="mr-2">
              <Search className="h-5 w-5 text-gray-700 hover:text-gray-900 transition duration-200" />
            </Button>
            <Button variant="ghost" size="icon" className="mr-2">
              <Bell className="h-5 w-5 text-gray-700 hover:text-gray-900 transition duration-200" />
            </Button>
            <Avatar>
              <AvatarImage
                src="/placeholder.svg?height=32&width=32"
                alt="User"
              />
              <AvatarFallback fallback="U" />
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
