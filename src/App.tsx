import { useState } from "react";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Notifications from "./components/notifications/Notification";
import LogoutModal from "./components/modals/LogoutModal";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortBy, setSortBy] = useState<string>("");
  
  const handleLogout = () => {
    toast.success("You have been logged out!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      draggable: true,
      theme: "colored",
    });
    setIsModalOpen(false);
  };


  return (
    <div className="flex flex-col min-h-screen">
      <Header isSideMenuOpen={isSideMenuOpen} setIsSideMenuOpen={setIsSideMenuOpen} setIsModalOpen={setIsModalOpen} />
      <div className="flex-1 bg-gray-50">
        <div className="hidden md:block">
     
            <div className="flex-1 py-6 h-full">
              <Dashboard
                sortBy={sortBy}
                setSortBy={setSortBy}
              />
            </div>
        </div>
        <div className="md:hidden">
          <div className="flex-1 p-6 bg-gray-50 h-full">
            <Dashboard sortBy={sortBy} setSortBy={setSortBy} />
          </div>
        </div>
      </div>
      <Notifications
        modal={LogoutModal}
        modalProps={{
          isOpen: isModalOpen,
          onClose: () => setIsModalOpen(false),
          onLogout: handleLogout,
        }}
      />
      <Footer />
    </div>
  );
}

export default App;
