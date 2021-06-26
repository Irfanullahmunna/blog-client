import React from 'react';
import './Posts.css';
import Post from '../Post/Post';

const Posts = ({ posts }) => {
    return (
        <div className="posts">
            {
                posts.map((p) => (
                    <Post post={p} />
                ))
            }
            {/* <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post /> */}
        </div>
    );
};

export default Posts;