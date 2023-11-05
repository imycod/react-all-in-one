import React from 'react';
import {useLocation, useParams, useSearchParams} from "react-router-dom";

function UserDetail(props) {
    const params= useParams()
    const [searchParams]= useSearchParams()
    const location= useLocation()
    console.log('location',location)
    console.log('searchParams---',searchParams.get('id'))
    console.log(params)
    return (
        <div>
            {params.id}
        </div>
    );
}

export default UserDetail;