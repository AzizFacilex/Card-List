import type { Card as CardType } from "@/src/types/card";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import React from "react";
import Button from "../shared/Button";
import { Card } from "../shared/Card";
import { Textarea } from "../shared/Textarea";
import { TextField } from "../shared/Textfield";
import CardDetails from "./CardDetails";

interface CardComponentProps {
  card: CardType;
  removeCard: (id: string) => void;
  expandedCard: string | null; 
  toggleCard: (id: string) => void;
}

const CardComponent: React.FC<CardComponentProps> = ({ card, removeCard, expandedCard, toggleCard }) => {
  return (
    <motion.div layout transition={{ duration: 0.27 }}>
      <Card
        className={`min-h-[300px] relative bg-blue-50 p-6 cursor-pointer transition-all duration-300 item ${
          expandedCard === card.id ? "shadow-2xl border border-gray-200" : "hover:shadow-lg"
        }`}
        onClick={() => toggleCard(card.id)}
      >
        <div className="flex justify-between items-start mb-4">
          <span
            className={`px-2 py-1 rounded text-xs font-semibold cursor-auto ${card.color}`}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {card.status}
          </span>
          <span
            className="text-sm text-gray-600 cursor-auto"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {card.time}
          </span>
          <Button
            size="xsmall"
            variant="danger"
            className="absolute right-2 top-2 flex items-center transition-transform transform hover:scale-105"
            onClick={(e) => {
              e.stopPropagation();
              removeCard(card.id);
            }}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
        <div className="space-y-4 items-center flex flex-col flex-grow">
          <TextField value={card.name} placeholder="Name" />
          <Textarea value={card.subject} placeholder="Subject" />
        </div>
        <div className="flex justify-center items-center m-2">
          {expandedCard === card.id ? (
            <ChevronUp className="text-gray-600 h-5 w-5" />
          ) : (
            <ChevronDown className="text-gray-600 h-5 w-5" />
          )}
        </div>
        <AnimatePresence>{expandedCard === card.id && <CardDetails card={card} />}</AnimatePresence>
      </Card>
    </motion.div>
  );
};

export default CardComponent;
