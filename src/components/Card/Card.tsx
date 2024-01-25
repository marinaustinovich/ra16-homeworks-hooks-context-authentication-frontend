import { useNavigate, useParams } from "react-router-dom";
import { CardBody } from "../CardBody/CardBody";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../contexts/AuthContext";

export type ImageDataType = {
  id: string;
  image: string;
  content: string;
  title: string;
};

type Props = {
  newsData?: ImageDataType;
};

export const Card = ({ newsData }: Props) => {
  const [card, setCard] = useState<ImageDataType | undefined>(newsData);
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (!newsData && !token) {
      navigate("/");
      return;
    }

    if (!newsData) {
      fetch(`${process.env.REACT_APP_NEWS_URL}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            if (response.status === 404) {
              navigate("/error404");
            }
          }
          return response.json();
        })
        .then((json) => {
          setCard(json);
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  }, [id, navigate, token, newsData]);

  const handleClick = (id: string) => {
    fetch(`${process.env.REACT_APP_NEWS_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          if (response.status === 404) {
            navigate("/error404");
          }

          if (response.status === 401) {
            navigate("/");
            localStorage.removeItem("profile");
          }
          throw new Error("An error occurred");
        }
        return response.json();
      })
      .then((json) => {

        navigate(`/news/${id}`);
      })
      .catch((error) => {
        console.error(error.message);

      });
  };
  
  if (!card) {
    return null;
  }

  return (
    <div
      className="w-30 d-flex align-items-end"
      onClick={() => handleClick(card.id)}
    >
      <div className="card">
        {card.image && (
          <img src={card.image} className="card-img-top" alt={card.image} />
        )}
        <CardBody details={card} />
      </div>
    </div>
  );
};
