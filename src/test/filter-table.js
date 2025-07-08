// filter search bar by name and email

import { useEffect, useState } from "react";

const userData = [{
    name: "john",
    email: "abc@gmail.com",
    id: 1,
    addrress: "abc"
},
{
    name: "joe",
    email: "bcd@gmail.com",
    id: 2,
    addrress: "abcjsdj"
},
{
    name: "Rach",
    email: "abdsrc@gmail.com",
    id: 3,
    addrress: "abedekec"
},
{
    name: "Monica",
    email: "dsc@gmail.com",
    id: 4,
    addrress: "abc"
}];


const FilterTable = () => {
    const [users, setUsers] = useState(userData);
    const [search, setSearch] = useState("")

    const handleChange = (e) => {
        const searchedValue = e.target.value;
        e.preventDefault();
        const filteredUsers = userData.filter(user => {
            const name = user.name.toLowerCase();
            const email = user.email.toLowerCase();
            if(searchedValue){
                const search = searchedValue.toLowerCase();
                return name.includes(search) || email.includes(search);
            }else{
                return user;
            }
        })

        setUsers(filteredUsers);
    }

    useEffect(() => {
       
    }, [users])

    return(
        <div>
            <input type="text" onChange={(e) => handleChange(e)}/>
            <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Addrress</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.addrress}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
}

export default FilterTable;