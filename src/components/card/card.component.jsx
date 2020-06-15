import React from 'react'
import '../card/card.style.css'

const Card = props => (
    <div className= 'card-container'>
        <img src={`https://robohash.org/${props.monster.id}?set=set1`} alt="monster"/>
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
)

export default Card