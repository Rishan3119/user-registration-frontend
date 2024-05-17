import React from 'react';
import { useLocation } from 'react-router-dom';

function UserProfile() {
    const location = useLocation();
    const { user } = location.state || {}; 

    return (
        <div className='d-flex justify-content-center align-items-center bg-info vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2 className='text-center mb-4 mt-3'>User Profile</h2>
                {user ? (
                    <div>
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        
                    </div>
                ) : (
                    <p>No user data found</p>
                )}
            </div>
        </div>
    );
}

export default UserProfile;
