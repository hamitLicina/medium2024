import React from 'react'



const Button = ({ onEdit, btnType, btnLabel }) => {
    return (
        <Button onClick={() => onEdit(5)} className={btnType} >
            {btnLabel}
        </Button>
    )
}

export default Button