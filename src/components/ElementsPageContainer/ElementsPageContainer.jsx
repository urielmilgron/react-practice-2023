import React from 'react'
import { useParams } from 'react-router-dom'
import './ElementsPageContainer.css'
import Aboutme from '../Aboutme/Aboutme'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import products from '../../asyncmock/asyncmock'
import Home from '../Home/Home'

function switchComponent(category){
    switch(category){
        case "About me":
            return <Aboutme/>;
        case "Proyects":
            return <ItemListContainer items={products}/>;
        case "Home":
            return <Home/>;
        default:
            return null;
    }
}
export default function ElementsPageContainer() {
    const { categoryId } = useParams()
    const category = categoryId == "Aboutme" ? "About me" : categoryId
    return (
        <main className='main__pageContainer'>
            <section className='section__pageContainer'>
                <h3 className='title__pageContainer'>
                    {category}
                </h3>
                {switchComponent(category)}
            </section>
        </main>
    )
}
