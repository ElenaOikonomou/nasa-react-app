import React from 'react'

export default function Sidebar({handleToggleModal}) {
  return (
    <div className='sidebar'>
    <div onClick={handleToggleModal}   className='bgOverlay'></div>
    <div className='sidebarContents'>
        <h2>The Brutal Martian Landscape</h2>
            <div>
                <p>Description</p>
                <p>This image was captured from NASA</p>
            </div>    
            <button onClick={handleToggleModal}>
            <i className='fa-solid fa-right-long'></i>
            </button>
            </div>    
    </div>
  )
}
