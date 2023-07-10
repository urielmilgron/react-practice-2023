import React, { useEffect, useState } from 'react'
import  getProyects from '../../asyncmock/asyncmock'
import ItemList from '../ItemList/ItemList'


export default function ItemListContainer() {
  //Creamos un estado para poder setear los items
  const [items, setItems] = useState([])

  useEffect(()=> {
    //Usamos la función getProyects para poder obtener los 
    //proyectos, si la función los obtiene, entonces los seteamos
    getProyects().then((proyects) => {
      setItems(proyects)
      console.log(proyects)
    })
  },[])
  return (
    <section>
      {/*Pasamos los items al componente que lista items*/}
      <ItemList items={items}/>
    </section>
  )
}
