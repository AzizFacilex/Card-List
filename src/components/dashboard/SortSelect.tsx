import React from "react";
import { Select, SelectItem } from "../shared/Select";

interface SortSelectProps {
  sortBy: string;
  setSortBy: (value: string) => void;
}

const SortSelect: React.FC<SortSelectProps> = ({ sortBy, setSortBy }) => {
  return (
    <Select value={sortBy} onValueChange={setSortBy}>
      <SelectItem value="name">Name</SelectItem>
      <SelectItem value="subject">Subject</SelectItem>
      <SelectItem value="time">Time</SelectItem>
    </Select>
  );
};

export default SortSelect;
