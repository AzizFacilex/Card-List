import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Body from "./components/dashboard/Dashboard";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import LogoutModal from "./components/modals/LogoutModal";
import Notifications from "./components/notifications/Notification";
import PaginationControls from "./components/pagination/PaginationControls";
import Loader from "./components/shared/Loader";
import useFetchCards from "./hooks/useFetchCards";
import { Card } from "./types/card";
import useResponsiveCardsPerPage from "./hooks/useResponsiveCardsPerPage";

function App() {
  const cardsPerPage = useResponsiveCardsPerPage();
  const { allCards, loading, error } = useFetchCards();
  const [sortedCards, setSortedCards] = useState<Card[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>("");
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  useEffect(() => {
    setSortedCards(allCards);
  }, [allCards]);

  useEffect(() => {
    const sortCards = (sortBy: string) => {
      let sorted = [...allCards];

      if (sortBy === "name") {
        sorted.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortBy === "subject") {
        sorted.sort((a, b) => a.subject.localeCompare(b.subject));
      } else if (sortBy === "time") {
        sorted.sort((a, b) => {
          const dateA = new Date(`1970-01-01T${a.time}Z`);
          const dateB = new Date(`1970-01-01T${b.time}Z`);
          return dateB.getTime() - dateA.getTime();
        });
      }

      setSortedCards(sorted);
      setCurrentPage(1);
    };

    if (sortBy) {
      sortCards(sortBy);
    }
  }, [allCards, sortBy]);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentDisplayedCards = sortedCards.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  };

  const removeCard = (id: string) => {
    const updatedSortedCards = sortedCards.filter((card) => card.id !== id);

    setSortedCards(updatedSortedCards);
    setCurrentPage(Math.min(currentPage, Math.ceil(updatedSortedCards.length / cardsPerPage)));
  };

  if (loading) return <Loader />;
  if (error) return <div>{error}</div>; // Display the error message if any

  return (
    <div className="flex flex-col min-h-screen">
      <Header isSideMenuOpen={isSideMenuOpen} setIsSideMenuOpen={setIsSideMenuOpen} setIsModalOpen={setIsModalOpen} />
      <div className="flex-1 bg-gray-50">
        <div className="hidden md:block">
          <motion.div
            initial={{ width: "100%" }}
            animate={{ width: isSideMenuOpen ? `calc(100% + 256px)` : "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className="flex-1 py-6 h-full">
              <Body
                currentCards={currentDisplayedCards}
                removeCard={removeCard}
                sortBy={sortBy}
                setSortBy={setSortBy}
              />
            </div>
          </motion.div>
        </div>
        <div className="md:hidden">
          <div className="flex-1 p-6 bg-gray-50 h-full">
            <Body currentCards={currentDisplayedCards} removeCard={removeCard} sortBy={sortBy} setSortBy={setSortBy} />
          </div>
        </div>
      </div>
      <PaginationControls
        currentPage={currentPage}
        cardsPerPage={cardsPerPage}
        totalCards={sortedCards.length}
        paginate={paginate}
      />
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
