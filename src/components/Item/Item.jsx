import React from 'react'

export default function Item({ item }) {
    return (
        <article>
            <img src={item.url} alt="" />
            <h2>{item.name}</h2>
            <h4>{item.description}</h4>
        </article>
    )
}
