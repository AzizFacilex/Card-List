import React from "react";
import Container from "../shared/Container";
import SortSelect from "./SortSelect";

interface DashboardProps {
  sortBy: string;
  setSortBy: (value: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({
  sortBy,
  setSortBy,
}) => {

  return (
    <main>
      <Container>
        <div className="mb-4 flex justify-center">
          <SortSelect sortBy={sortBy} setSortBy={setSortBy} />
        </div>
      
      </Container>
    </main>
  );
};

export default Dashboard;
