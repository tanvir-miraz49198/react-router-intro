import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';
const Friend = ({friend}) => {
    const {name , phone, email , website , id} = friend;
    return (
        <div className='friend'>
            <h3>Name : {name}</h3>
            <h4>Email : {email}</h4>
            <h5>Phone : {phone}</h5>
            <p>Website : {website}</p>
            <p><Link to = {`/friend/${id}`}>Show Me Details</Link></p>
        </div>
    );
};

export default Friend;