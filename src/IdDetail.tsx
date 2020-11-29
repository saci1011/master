import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'; 
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import {Link} from 'react-router-dom';


const App = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);                //only 10 Items pro Page
  
    useEffect(() => {
      const fetchPosts = async () => {
        setLoading(true);
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(res.data);
        setLoading(false);
      };
  
      fetchPosts();
    }, []);
  

  
    return (
      <div className='container mt-5'>
         <h1>
             Item
         </h1>
      </div>
    );
  };
  
  export default App;