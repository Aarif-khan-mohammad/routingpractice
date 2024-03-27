import React from 'react'
import { Component } from 'react'
import Header from '../Header'
import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'


class BlogItemDetails extends Component  {

    state = {blogItems : []  , isLoading : true}

    componentDidMount(){
        this.getBlogItemData()
    }

    getBlogItemData = async()=>{
        const {match} = this.props
        const {params} = match
        const {id} = params
        
        const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
        const data = await response.json()
        
        const updatedData = {
            id : data.id ,
            title : data.title,
            imageUrl : data.image_url,
            avatarUrl : data.avatar_url ,
            author : data.author,
            topic : data.topic,
            content :data.content,
        }
        this.setState({ blogItems:updatedData  ,isLoading:false})

    }
    
    render(){
        const {blogItems , isLoading} = this.state;
        const {id , title , imageUrl , avatarUrl , author   , content} = blogItems

        return (
            <div className='mini-main'>
                <Header />
                {isLoading ? <Loader type='spinTailing' color='#0099fd' height={50} width={50}/> : (
                    <div  className='mini-blog'>
                        <h2 className='blogname'>{title}</h2>
                        <div className='auth-blog'>
                            <img src={avatarUrl} alt={`blog-${id}`} className='author-pic' />
                            <span className='author'>{author}</span>
                        </div>
                        <img src={imageUrl} alt='main-blog-one' className='main-pic'/>
                        <h5 className='para'>{content}</h5>
                    </div>
                )}
                
              
            </div>
          )
    }
  
}

export default BlogItemDetails
