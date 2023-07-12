import React from 'react'
import './Item.css'

export default function Item({ item }) {
    return (
        <article className='item__container'>
            <div className='item__container__image'>
                <img className="item__image" src={item.url} alt="" />
            </div>
            <h2>{item.name}</h2>
            <h4>{item.description}</h4>
        </article>
    )
}
