import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendsDetails = () => {
    const friend = useLoaderData()
    
    console.log(friend)
    return (
        <div>
            <h1>Friends details Page</h1>
            <h4>Name : {friend.name}</h4>
            <h4>Phone : {friend.phone}</h4>
            <p>Email : {friend.email}</p>
            <p>Website : <a href="">{friend.website}</a></p>

        </div>
    );
};

export default FriendsDetails;