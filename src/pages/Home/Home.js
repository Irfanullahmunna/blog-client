import React from 'react';
import { useEffect, useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import Sidebar from '../../components/Sidebar/Sidebar';
import axios from 'axios';
import { useLocation } from 'react-router';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts" + search);
            setPosts(res.data);
        };
        fetchPosts();
    }, [search]);
    return (
        <>
            <Header />
            <div className="home">
                <Posts posts={posts} />
                {/* <p>Home Page</p> */}
                {/* <Posts /> */}
                <Sidebar />
            </div>
        </>
    );
};

export default Home;