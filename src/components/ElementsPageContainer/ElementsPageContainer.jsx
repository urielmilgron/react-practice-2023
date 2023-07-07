import React from 'react'
import { useParams } from 'react-router-dom'
import './ElementsPageContainer.css'
export default function ElementsPageContainer() {
    const {categoryId} = useParams()
    const category = categoryId == "Aboutme" ? "About me" : categoryId
    return (
        <main className='main__pageContainer'>
            <section className='section__pageContainer'>
                <h3 className='title__pageContainer'>
   {category}
                </h3>
                
            </section>
        </main>
    )
}
