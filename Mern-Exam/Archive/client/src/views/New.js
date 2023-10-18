import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams,useHistory, Link} from "react-router-dom";
    
const New = (props) => {
    const [form, setForm] = useState({
        name:"",
        type:"",
        desc:"", 
        skill1:"",
        skill2:"",
        skill3:""

    })
    const [error, setError]=useState([])
    const history= useHistory();
    const onChangeHandler = (e)=> {
        setForm({
            ...form,
            [e.target.name]: e.target.value})}

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/Pet/new', form)
            .then(res => {console.log(res)
                res.data.Pet? history.push("/"): setError(res.data.error.errors)
                

            })
            .catch(err => {console.log(err)
                });
    }
    
    return (
        <div>
            <h1>Pet Shelter</h1>
            <Link to="/">Home </Link>
            <h2> Do you know a pet that needs a home? </h2>
            <form onSubmit={onSubmitHandler}>
            <input type="text" name="name" placeholder="What is the pet's name?" onChange={onChangeHandler} value={form.name}/>
            <span> {error.name && error.name.message}</span>

            <input type="text" name="type" placeholder="What kind of pet?" onChange={onChangeHandler} value={form.type}/>
            <span> {error.type && error.type.message}</span>

            <input type="text" name="desc" placeholder="Give a description" onChange={onChangeHandler} value={form.desc}/>
            <span> {error.name && error.desc.message}</span>

            <input type="text" name="skill1" placeholder="Do they know tricks??" onChange={onChangeHandler} value={form.skill1}/>
            

            <input type="text" name="skill2" placeholder="Do they know tricks??" onChange={onChangeHandler} value={form.skill2}/>

            <input type="text" name="skill3" placeholder="Do they know tricks??" onChange={onChangeHandler} value={form.skill3}/>
            
            <input type="submit" value="Add Pet"/> <Link to="/"> <button> Cancel </button> </Link> 
        </form>
        </div>
    )
}
    
export default New;