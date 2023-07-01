import React from "react";
import { Link, useParams } from 'react-router-dom'
import { usePage } from "./utils/global.context";


const Card = ({ name, username, id, email }) => {
  const { pageState } = usePage();
  const addFav = ()=>{
    
 
  }
  console.log(pageState);
  return (
    
    <div className="card">

        <Link to={`/dentista/`+ id }>
        <h4>{name}</h4>
        <h3>{username}</h3>
        </Link>
        
        <img style={{width: "100%", height:"100%"}} src="./images/doctor.jpg" alt={"Dr." + name}/>
        <h5>{email}</h5>
        
        <button onClick={addFav} className="favButton">Add ★</button>
    </div>
  );

};

export default Card;
