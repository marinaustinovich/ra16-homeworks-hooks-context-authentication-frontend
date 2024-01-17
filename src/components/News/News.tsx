import { useContext, useEffect, useState } from "react";

import AuthContext from "../../contexts/AuthContext";
import { Card } from "../Card";

export const News = () => {
  const { token } = useContext(AuthContext);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_NEWS_URL}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("fetsh", response);
        if (!response.ok) {
          throw new Error("Failed to fetch profile");
        }
        const data = await response.json();

        setNews(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, [token]);

  if (!news) {
    return <p>Loading news...</p>;
  }

  return (
    <div className="card-group">
      {news.map((item, id) => (
        <Card key={id} newsData={item} />
      ))}
    </div>
  );
};
