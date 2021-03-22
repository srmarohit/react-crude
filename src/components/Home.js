import react, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Home = () => {

    const [users, setUser] = useState([]);

    const deleteUser = async (id) => {
        await axios.delete("http://localhost:3006/users/" + id);
        loadUsers();
    }

    useEffect(() => {
        loadUsers();
    },[]);

    const loadUsers = async () => {
        const response = await axios.get("http://jsonplaceholder.typicode.com/users");
        setUser(response.data);
    }

    return (
        <div className="p-4 mt-2">
            <table className="table my-1">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">City</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={ index }>
                            <th scope="row">{ index + 1}</th>
                            <td>{ user.name}</td>
                            <td>{ user.email }</td>
                            <td>{ user.address.city }</td>
                            <td className=" ">
                                <NavLink className="btn btn-md btn-primary px-2 mr-2" to={`/users/${user.id}`}>View</NavLink>
                                <NavLink className="btn btn-md btn-warning px-2 mr-2" to={`/users/edit/${user.id}`} >Edit</NavLink>
                                <button className="btn btn-md btn-danger px-2 mr-2" onClick={() => deleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

         </div>
    );
}

export default Home;
