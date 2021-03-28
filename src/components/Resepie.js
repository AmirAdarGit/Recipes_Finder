import React ,{Component, useState, useEffect} from 'react';
import { Button } from '@material-ui/core'
  
const Recepie = ({recepie, calories, img, ingredientLines})   => {
  return (
      <div>
        <h1>{recepie}</h1>
        <p>{calories} Calories</p>
        <ol>
          {ingredientLines.map(line => (<li key={line}>{line}</li>))}
        </ol>
        <img src={img}></img>
      </div> 
  );
}




export default Recepie;
