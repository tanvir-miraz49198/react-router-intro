import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../singleFriend/Friend';

const Friends = () => {
    const friends = useLoaderData()
    
    return (
        <div>
            <h3>This Is  The Friends Page</h3>

            <div>
                {
                    friends.map(friend => <Friend
                    key = {friend.id}
                    friend = {friend}
                    ></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;