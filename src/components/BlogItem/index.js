import React from 'react'
import './index.css'
import { Link } from 'react-router-dom';

const BlogItem = props => {
    const {blogData} = props;
    const {id , title , imageUrl , avatarUrl , author , topic} = blogData

  return (
    <Link to={`/blogs/${id}` } className='linking'>
        <div className='blog-item'>
        <img src={imageUrl}  alt="blog" className='blog-pic'/>
        <div className='left-container'>
            <h3 className='topic'>{topic}</h3>
            <h4 className='title'>{title}</h4>
            <div className='auth-container'>
                <img src={avatarUrl} alt='avatar' className='avatar-pic' width='30px' height='30px'/>
                <span className='author'>{author}</span>
            </div>
        </div>
        </div>
    </Link>
    
  )
}

export default BlogItem
