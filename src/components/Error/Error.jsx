import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../contexts/AuthContext';
import './Error.css';

function Error(props) {
    const {error} = props;
    const [loginError, setLoginError] = useState(error);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        setLoginError(error);
    }, []);

    if (!isVisible) {
        return null;
    }

    const handleClose = () => {
        setIsVisible(false);
        setLoginError(null);
    };

    return (
        <div className="error">
            {loginError && (
                <>
                    <p>{loginError}</p>
                    <button className="close-btn" onClick={handleClose}>
                        &times;
                    </button>
                </>
            )}
        </div>
    );
}

export default Error;
