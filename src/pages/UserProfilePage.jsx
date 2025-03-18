import React from 'react';
import '../styles/styles.css';

const UserProfilePage = () => {
    const user = {
        name: "John Doe",
        email: "john.doe@example.com",
        role: "User",
        joinedDate: "2023-01-01"
    };

    return (
        <div className="user-profile">
            <h1>User Profile</h1>
            <div className="profile-details">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Role:</strong> {user.role}</p>
                <p><strong>Joined Date:</strong> {user.joinedDate}</p>
            </div>
        </div>
    );
};

export default UserProfilePage;