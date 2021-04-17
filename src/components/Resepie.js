import React, { Component, useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import "./Resepie.css";

const Resepie = ({ recepie, calories, img, ingredientLines }) => {
  return (
    <div className="resepie-item">
      <h1>{recepie}</h1>
      <p>{calories} Calories</p>
      <ol className="resepie-steps">
        {ingredientLines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ol>
      <img className="resepie-image" src={img}></img>
    </div>
  );
};

export default Resepie;
