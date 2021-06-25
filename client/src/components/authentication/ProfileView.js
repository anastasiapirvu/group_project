//ALL DONE HERE! :)
import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import Api from '../helper/Api';


function ProfileView(props) {
    const [user, setUser] = useState(null);
    const [errorMsg, setErrorMsg] = useState('');
    let { userId } = useParams();

    useEffect(() => {
        async function fetchProfile() {
            let response = await Api.getUser(userId);
            if (response.ok) {
                setUser(response.data);
                setErrorMsg('');
            } else {
                setUser(null);
                setErrorMsg(response.error);
            }
        }
        fetchProfile();
    }, [userId]);

    if (errorMsg) {
        return <h2 style={{ color: 'salmon' }}>{errorMsg}</h2>
    }

    if (!user) {
        return <h2>Please wait...</h2>;
    }

    return (
        <div className="ProfileView">
            <h1>Profile View</h1>
            ID: {user.id}<br />
            Username: {user.username}<br />
            Email: {user.email}
        </div>
    );
}


export default ProfileView;