
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams,useHistory, Link } from "react-router-dom";

const Details = (props) =>{
    const { _id } = useParams();
    const [form, setForm] = useState({
        name:"",
        type:"",
        desc:"", 
        skill1:"",
        skill2:"",
        skill3:""
    })
    const history = useHistory()
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/Pet/' + _id)
            .then(res => {console.log(res)
                setForm(res.data.Pet)
            })
            .catch(err=>console.log(err))
    }, []);

    
    
    
    
    
    
const onDeleteHandler = (_id, index) => {
    axios.delete('http://localhost:8000/api/Pet/delete/' + _id)
        .then(res => {
            console.log(res);
            // const copyForm = [...form];
            // copyForm.splice(index,1);
            // setForm(copyForm);
            history.push("/")
        })
        .catch(err => console.error(err));}

    return(
        <div>
            <h1>Pet Shelter</h1>
            <Link to="/">Home </Link>
        <h2>Details about:{form.name}</h2>
        <h3>Pet Type: {form.type}</h3>
        <h3>Description: {form.desc}</h3>
        <h3>Skills: {form.skill1 && form.skill1} {form.skill2 && form.skill2} {form.skill3 && form.skill3}
        </h3>
        <button onClick={()=>onDeleteHandler(form._id)}>Delete </button> 
    
        </div>
        
)
        
        

}

export default Details;
