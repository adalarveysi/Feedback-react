import React from 'react'
import PropTypes from 'prop-types'
const Header = ({text="FeedBack UI",bgColor="rgba(0,0,0,0.4)",textColor="#ff6a95"}) => {
    const headerStyle ={
        backgroundColor:bgColor,
        color:textColor
    }
  return (
    <header className={{headerStyle}}>
        <div className='container'>
        <h2>{text}</h2>
        </div>
    </header>
)
}

export default Header