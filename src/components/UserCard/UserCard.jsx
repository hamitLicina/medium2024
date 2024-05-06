import React from 'react'



const UserCard = ({ user, onEdit, onDelete }) => {

    const { name, email, id } = user;

    return (
        <div className="user-card">
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>ID: {id}</p>
            <button onClick={() => onEdit(id)}>Edit</button>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}

export default UserCard