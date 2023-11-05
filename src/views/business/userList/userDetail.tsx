import React from 'react';
import {useParams} from "react-router-dom";

function UserDetail(props) {
    const params= useParams()
    return (
        <div>
            {params.id}
        </div>
    );
}

export default UserDetail;