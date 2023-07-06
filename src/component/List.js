import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const List = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://api.chucknorris.io/jokes/categories')
          .then(response => {
            setData(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-10 m-20'>
      {
        data.map(val => {
          return(
            <div className='shadow-xl w-16 h-6 md:w-60 md:h-40 bg-[#FFFFFF] text-center  m-3 rounded-md hover:border border-black capitalize text-white text-lg  
                        cursor-pointer false md:p-3 '>
            <h1 className=' text-blue-900 font-bold capitalize text-sm md:text-2xl md:pt-6'>{val}</h1>
            <h5 className='capitalize text-purple-800 text-sm lg:block md:block hidden'>Unlimited Joles On Career</h5>
            <Link to='/category'/>
        </div>
          )
        
        })
      }
        
        
        {console.log(data)}
    </div>
  )
}

export default List