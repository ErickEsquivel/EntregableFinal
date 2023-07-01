import React from "react";
import Card from "../Components/Card";
import { usePage } from "../Components/utils/global.context";



const Favs = () => {
  const { pageState, pageDispatch } = usePage();
  const favs = pageState.favs


  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs.map(dentista => <Card  name={dentista.name} username={dentista.username} id={dentista.id} email={dentista.email}/>)}
      </div>
    </>
  );
  
};

export default Favs;