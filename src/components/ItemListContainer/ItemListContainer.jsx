import React from 'react'
import { useParams } from 'react-router-dom'
export default function ItemListContainer() {
    const {categoryId} = useParams()
    return (
        <main>
          {categoryId == "Aboutme" ? "About me" : categoryId}
        </main>
    )
}
