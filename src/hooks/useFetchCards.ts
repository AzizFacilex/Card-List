import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "../types/card";
import { API_URL } from "../constants/Constants";

const useFetchCards = () => {
  const [allCards, setAllCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      const data = response.data.hits.map((item: any) => ({
        id: item.objectID,
        color: "bg-blue-100",
        status: "Active",
        time: new Date(item.created_at).toLocaleTimeString(),
        name: item.author,
        subject: item.title,
      }));
      setAllCards(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { allCards, loading, error };
};

export default useFetchCards;
