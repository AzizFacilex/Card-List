import { motion } from "framer-motion";
import React from "react";
import CardActions from "./CardActions";
import { Card } from "@/src/types/card";

interface CardDetailsProps {
  card: Card;
}

const CardDetails: React.FC<CardDetailsProps> = ({ card }) => {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.27 }}
      onClick={(e) => e.stopPropagation()}
      
    >
      <div className="p-4 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg shadow-inner cursor-auto">
        <p className="text-sm text-gray-700 text-center mb-4">
          Additional details for {card.name}'s {card.subject} class at {card.time}.
        </p>
        <CardActions />
      </div>
    </motion.div>
  );
};

export default CardDetails;
