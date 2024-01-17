import React from "react";
import PropTypes from "prop-types";
import "./CardBody.css";
import { ImageDataType } from "../Card/Card";

type Props = {
  details: ImageDataType;
};

export const CardBody = ({ details }: Props) => {
  const { title, content } = details;

  return (
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{content}</p>
    </div>
  );
};
