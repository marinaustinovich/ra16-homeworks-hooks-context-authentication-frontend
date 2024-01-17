import { CardBody } from "../CardBody/CardBody";

export type ImageDataType = {
  image: string;
  content: string;
  title: string;
};

type Props = {
  newsData: ImageDataType;
};

export const Card = ({ newsData }: Props) => {
  const { image } = newsData;

  return (
    <div className="w-30 d-flex align-items-end">
      <div className="card">
        {image && <img src={image} className="card-img-top" alt={image} />}
        <CardBody details={newsData} />
      </div>
    </div>
  );
};
