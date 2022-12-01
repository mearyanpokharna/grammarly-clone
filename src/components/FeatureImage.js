import React from "react";

function FeatureImage(props) {
  return (
    <div className={`featureImageDiv ${props.show ? "" : "hidden"}`}>
      <img
        className={props.show ? "addAnimate1" : ""}
        src={`/slide${props.type}.1.svg`}
        alt={props.type}
      />
      <img
        className={props.show ? "addAnimate2" : ""}
        src={`/slide${props.type}.2.svg`}
        alt={props.type}
      />
    </div>
  );
}

export default FeatureImage;
