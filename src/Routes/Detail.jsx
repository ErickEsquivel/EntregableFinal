import React, { useEffect } from 'react'
import { usePage } from '../Components/utils/global.context'
import { useParams } from 'react-router-dom';
import axios from 'axios';



const Detail = () => {
 
  const {pageState, pageDispatch} = usePage()
    const {id} = useParams()
    const urlUser = 'https://jsonplaceholder.typicode.com/users/' + id
    

    useEffect(() => {
        axios(urlUser)
        .then(res => {
            pageDispatch({type: 'GET_USER', payload: res.data})
        })
    }, [])


    const dentista = pageState.dentista
    console.log(dentista);


  return (
    <>
      <h1>{dentista.name}</h1>
      <p>Email: {dentista.email}</p>
      <p>Telefono: {dentista.phone}</p>
      <p>Website: {dentista.website}</p>      
      </>
  )
  
}

export default Detail