import React from 'react';
import './Post.css';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    const PF = "http://localhost:5000/images/";
    return (
        <div className="post">
            {post.photo && <img className="post-image" src={PF + post.photo} alt="" />}            
            <div className="post-info">
                <div className="post-categories">
                    {
                        post.categories.map((c) => (
                            <span className="post-categorie">{c.name}</span>
                        ))
                    }
                </div>
                <Link to={`/post/${post._id}`} className="link">
                    <span className="post-tittle">
                        {post.title}
                    </span>
                </Link>
                <hr />
                <span className="post-date">
                    {new Date(post.createdAt).toDateString()}
                </span>
                {/* <span className="post-detail">1 hour ago</span> */}
            </div>
            <p className="post-description">
                {post.desc}
            </p>
        </div>
    );
};

export default Post;