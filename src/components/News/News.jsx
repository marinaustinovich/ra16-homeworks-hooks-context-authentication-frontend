import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import AuthContext from '../../contexts/AuthContext';

function News(props) {
    const {token } =   useContext(AuthContext);
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchProfile = async () => {
            
            try {
                const response = await fetch(process.env.REACT_APP_NEWS_URL, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log('fetsh', response)
                if (!response.ok) {
                    throw new Error('Failed to fetch profile');
                }
                const data = await response.json();

                setNews(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProfile();
    }, [token]);

    if (!news) {
        return <p>Loading news...</p>;
    }

    return (
        <div className="card-group" id={props.id}>
            {news.map((item) => <Card key={item.id}>{item}</Card>)}
        </div>

    )
}

News.propTypes = {}

export default News
