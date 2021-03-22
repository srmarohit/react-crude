import react, { useState } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';


const AddUser = () => {
    let history = useHistory();

    const [user, setUser] = useState({
        username: "",
        name: "",
        address: {
            city:""
        },
        phone: "",
        email: "",
        website:""
    });

    const { username, name, address, phone, email, website } = user;

    const addUser = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3006/users",user);
        history.push('/');
    }

    return (
        <div className="container">
            <h2 className="text-center p-2 mt-2 bg-success">Add New User</h2>
            <form onSubmit={addUser}>   
            <div className="form-group">
                <label for="Name">Name : </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        onChange={(e) => setUser({...user, name : e.target.value})}
                        value={name}
                        placeholder="Mr. Rohit Sharma" />
            </div>

            <div className="form-group">
                <label for="Username">Username : </label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        onChange={(e) => setUser({...user, username : e.target.value})}
                        value={username}
                        placeholder="username" />
            </div>

            <div className="form-group">
                <label for="Email">Email :</label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        onChange={(e) => setUser({...user, email : e.target.value})}
                        value={email}
                        placeholder="example@example.com" />
            </div>

            <div className="form-group">
                <label for="City">Address : </label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        onChange={(e) => setUser({ ...user, address: { city : e.target.value } })}
                        value={address.city}
                        placeholder="2166/59 SantoshiNagar" />
            </div>

            
            <div className="form-group">
                <label for="Website">Website :</label>
                    <input
                        type="text"
                        className="form-control"
                        id="website"
                        onChange={(e) => setUser({ ...user, website : e.target.value })}
                        value={website}
                        placeholder="Example.com" />
            </div>

             <div className="form-group">
                <label for="Phone">Phone : </label>
                    <input
                        type="text"
                        class="form-control"
                        id="phone"
                        onChange={(e) => setUser({...user, phone : e.target.value})}
                        value={phone}
                        placeholder="1111 111 111" />
            </div>

             <button type="submit" class="btn btn-primary">Add</button>
         </form>
    </div>
        )
}

export default AddUser;