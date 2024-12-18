import React from 'react'

export default function Footer({data, handleToggleModal}) {
  return (
    <footer>
        <div className="bgGradient"></div>
        <div>    
            <h2>{data&&data.title}</h2>
            <h1>APOD PROJECT</h1>
        </div>           
        <button onClick={handleToggleModal}>
        <i className="fa-solid fa-circle-info"></i>
        </button>        
    </footer>
    
  )
}
