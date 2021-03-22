import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const ViewUser = () => {

    const { id } = useParams();

    const [user, setUser] = useState({
        username: "",
        name: "",
        address: {
            city: ""
        },
        phone: "",
        email: "",
        website: ""
    });

    const { username, name, address, phone, email, website } = user;

    const loadUser = async (id) => {
        const response = await axios.get("http://localhost:3006/users/" + id);
        setUser(response.data);
    }

    useEffect(() => {
        loadUser(id);
    },[]);

    return (
        <div className="container">
            <h2 className="text-center text-red mt-2">User : {id}</h2>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Username : {username}</li>
                <li className="list-group-item">Name : { name }</li>
                <li className="list-group-item">Phone : { phone }</li>
                <li className="list-group-item">City : { address.city }</li>
                <li className="list-group-item">Email : {email}</li>
                <li className="list-group-item">Website : {website}</li>
        </ul>
        </div>
        )
}

export default ViewUser;