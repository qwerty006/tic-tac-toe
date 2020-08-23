import React from 'react'

const style = {
    backgroundColor : '#fffdd0',
    border: '4px solid brown',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
}

const Square = ({value, onClick}) => (
    <button style={style} onClick={onClick}>
        {value}
    </button>
)

export default Square;

