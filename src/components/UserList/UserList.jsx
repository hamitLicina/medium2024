import React from 'react'
import UserCard from '../UserCard/UserCard'



const UserList = ({ users }) => {

    const handleEdit = (id) => {
        // Logic to handle editing user with ID: id
        console.log(`Editing user with ID ${id}`);
    };

    const handleDelete = (id) => {
        // Logic to handle deleting user with ID: id
        console.log(`Deleting user with ID ${id}`);
    };

    return (
        <div className="user-list">
            <h1>User List</h1>
            {users.map((user) => (
                <UserCard
                    key={user.id}
                    user={user}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            ))}
        </div>
    )
}

export default UserList