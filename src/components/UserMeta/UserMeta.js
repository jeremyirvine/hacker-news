import React from 'react';
import './UserMeta.css'

const UserMeta = (props) => {

    const {time, karma} = props
    
    const formatDate = (time) => {
        let date = new Date(time)
        return `${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`
    }

    return (
        <span className="UserMeta">
            joined {formatDate(time)} has {karma} karma
        </span>
    );
}
 
export default UserMeta;