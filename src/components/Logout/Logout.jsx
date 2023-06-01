import React, { useContext, useEffect } from 'react';
import './Logout.css';
import PropTypes from 'prop-types'
import AuthContext from '../../contexts/AuthContext';
import useStorage from '../../hooks/useStorage';

function Logout(props) {
    const {token, handleLogout} =   useContext(AuthContext);
    const [profile, setProfile] = useStorage(localStorage, 'profile', true);

    useEffect(() => {
        const fetchProfile = async () => {
            
            try {
                const response = await fetch(process.env.REACT_APP_PRIVSTE_ME_URL, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log('fetsh', response)
                if (!response.ok) {
                    throw new Error('Failed to fetch profile');
                }
                const data = await response.json();
                
                setProfile(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProfile();
    }, [token]);

    if (!profile) {
        return <p>Loading profile...</p>;
    }


    return (
        <div className='form-wrapper'>
            <p>Neto Social</p>
            <div className="user-wrapper">
                <p className='user-text'>Hello, {profile.name}</p>
                <img className="user-avatar" src={profile.avatar}alt={profile.name} />
            </div>

            <button onClick={handleLogout} className='logout'>Logout</button>
        </div>
    );
}

Logout.propTypes = {}

export default Logout
