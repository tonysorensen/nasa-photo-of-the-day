import React from "react";

const PhotoInfo = (props) => {
  const { owner, date, title } = props;
  return (
    <div className="row">
      <div className="col d-flex justify-content-center">
        <h2>{title}</h2>
      </div>
      <div className="col">
        <h2>{owner}</h2>

        <h2>{date}</h2>
      </div>
    </div>
  );
};

export default PhotoInfo;
