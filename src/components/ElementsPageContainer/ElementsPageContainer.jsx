import React from 'react'
import './ElementsPageContainer.css'
import Aboutme from '../Aboutme/Aboutme'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import products from '../../asyncmock/asyncmock'
import Home from '../Home/Home'

//Función que retorn un componente dependiendo del valor que tenga el parametro category
function switchComponent(category) {
    switch (category) {
        case "About me":
            return <Aboutme />;
        case "Proyects":
            return <ItemListContainer items={products} />;
        case "Home":
            return <Home />;
        default:
            return null;
    }
}
export default function ElementsPageContainer({page}) {
    return (
        <main className='main__pageContainer'>
            <section className='section__pageContainer'>
                <h3 className='title__pageContainer'>
                    {page}
                </h3>
                {switchComponent(page)}
            </section>
        </main>
    )
}
