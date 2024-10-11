import React, { useState } from "react";
import CardComponent from "../card/CardComponent";
import Container from "../shared/Container";
import SortSelect from "./SortSelect";
import { Card } from "@/src/types/card";

interface DashboardProps {
  currentCards: Card[];
  removeCard: (id: string) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({
  currentCards,
  removeCard,
  sortBy,
  setSortBy,
}) => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <main>
      <Container>
        <div className="mb-4 flex justify-center">
          <SortSelect sortBy={sortBy} setSortBy={setSortBy} />
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {currentCards.map((card) => (
            <CardComponent
              key={card.id}
              card={card}
              removeCard={removeCard}
              expandedCard={expandedCard}
              toggleCard={toggleCard}
            />
          ))}
        </div>
      </Container>
    </main>
  );
};

export default Dashboard;
