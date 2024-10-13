import { useState, useEffect } from "react";

const useResponsiveCardsPerPage = () => {
  const [cardsPerPage, setCardsPerPage] = useState<number>(6);

  useEffect(() => {
    const handleResize = () => {
      const height = window.innerHeight;
      if (height >= 1200) {
        setCardsPerPage(9);
      } else if (height >= 768) {
        setCardsPerPage(6);
      } else {
        setCardsPerPage(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return cardsPerPage;
};

export default useResponsiveCardsPerPage;
