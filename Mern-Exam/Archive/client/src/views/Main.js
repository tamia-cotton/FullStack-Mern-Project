import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Main = (props) => {
    const [pet, setPet] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/Pet")
            .then(res => {
                console.log(res.data.Pets);
                setPet(res.data.Pets);
                
            })
            .catch(err => console.log(err))
    }, []
    )
    

    return(
        <div>
            <h1>
                Pet Shelter
                </h1> <Link to="/new">Add a pet to the Shelter</Link>
                <h2>These Pets are looking for a good home</h2>
                
            <table>
                <tr>
                    <th> Name</th>
                    <th>Type</th>
                    <th>Actions Available</th>
                </tr>
                {
                pet.map((item, i ) => {
                    return <tr key = {i}> 
                    <td>{item.name}</td>
                    <td>{item.type}</td>
                    <td> <Link to={"/edit/"+item._id} >Edit</Link>  </td> 
                    <td> <Link to={"/details/"+item._id} >Details</Link>  </td> 
                    </tr>
                    
                }) }
            </table>
        

        </div>
        
        
    )
    

}

export default Main