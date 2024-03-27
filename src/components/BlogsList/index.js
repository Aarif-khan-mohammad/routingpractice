import { Component } from "react";
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem/index.js'
import './index.css'

/*const blogsData = [
    {
        id:1,
        title : "Blog 1",
        imageUrl : "https://i.ibb.co/kc5KJNC/588a6667d06f6719692a2d17.png" ,
        avatarUrl : "https://i.ibb.co/8bvMDy1/information.png",
        author : "Author Name" ,
        topic : "React.js",
    },
    {
        id:2,
        title : "Blog 2",
        imageUrl : "https://i.ibb.co/kc5KJNC/588a6667d06f6719692a2d17.png" ,
        avatarUrl : "https://i.ibb.co/8bvMDy1/information.png",
        author : "Author Name 2" ,
        topic : "Node.js",
    },
    {
        id:3,
        title : "Blog 3",
        imageUrl : "https://i.ibb.co/kc5KJNC/588a6667d06f6719692a2d17.png" ,
        avatarUrl : "https://i.ibb.co/8bvMDy1/information.png",
        author : "Author Name 3" ,
        topic : "Express.js",
    }
]*/

class BlogsList extends Component{

    state = { blogsData : [], isLoading : true}

    componentDidMount(){
        this.getBlogsData()
    }

    getBlogsData = async () =>{
        const response = await fetch("https://apis.ccbp.in/blogs/");
        const data = await response.json();
        const updatedData = data.map((eachItem)=> ({
            id : eachItem.id ,
            title : eachItem.title,
            imageUrl :eachItem.image_url ,
            avatarUrl : eachItem.avatar_url,
            author : eachItem.author,
            topic : eachItem.topic,
        }))
        this.setState({blogsData : updatedData , isLoading: false})
        console.log(updatedData)
    }

    render(){
        const {blogsData , isLoading} = this.state;
        return(
            <div className="blogs-list-container">
                <h1 className="blogs">Blogs</h1>

                {isLoading ? <Loader type="TailSpin" color="#000ffb" height={50} width={50}/> : blogsData.map(each => (
                    <BlogItem blogData = {each} key ={each.id}/>
                ))}

            </div>
        )
    }
}

export default BlogsList;