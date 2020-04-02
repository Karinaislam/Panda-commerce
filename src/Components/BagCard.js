import React from 'react'
import CardsComp from './CardsComp'
import "./style.css"

export default function BagCard() {
    return (
        <div>
            <h1 className="header container">Bag</h1>
            <CardsComp></CardsComp>
        </div>
    )
}
