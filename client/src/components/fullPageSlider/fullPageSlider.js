import React from 'react'

export default function fullPageSlider(props) {
    return (
        <li>
        <img src={props.image} /> 
        <div className="caption center-align">
          <h3>{props.title}</h3>
          <h5 className="light grey-text text-lighten-3">{props.subtitle}</h5>
          <button className="btn ">{props.button}</button>
        </div>
      </li>
    )
}
