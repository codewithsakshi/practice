import React, { use, useEffect, useState } from "react";

const userData = [{
    name: "john",
    id: 1,
    addrress: "abc"
},
{
    name: "joe",
    id: 2,
    addrress: "abcjsdj"
},
{
    name: "Rach",
    id: 3,
    addrress: "abedekec"
},
{
    name: "Monica",
    id: 4,
    addrress: "abc"
}];


export default function UserTable() {
    const [users, setUsers] = useState(userData);
    const [selectedUserId, setSelectedUserId] = useState(null);

    const handleClick = (userId) => {
        setSelectedUserId(userId)
    };

    const handleChange = (userId, field, value) => {
        const updatedUsers = users.map((user) =>
            user.id === userId ? { ...user, [field]: value } : user);
        setUsers(updatedUsers);
    }

    const handleSubmit = (e) => {
        e.stopPropagation()
        setSelectedUserId(null);
    }

    useEffect(() => {

    }, [selectedUserId]);

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Addrress</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => {
                    const isSelected = user.id === selectedUserId;
                    return (
                        <tr key={user.id} onClick={() => handleClick(user.id)}
                            style={{ backgroundColor: isSelected ? "#e0f7fa" : "white", cursor: "pointer" }}>
                            <td>
                                <input onClick={(e) => e.stopPropagation()} value={user.name} disabled={!isSelected} onChange={(e) => handleChange(user.id, "name", e.target.value)} />
                            </td>
                            <td>
                                <input onClick={(e) => e.stopPropagation()} value={user.addrress} disabled={!isSelected} onChange={(e) => handleChange(user.id, "addrress", e.target.value)} />
                            </td>
                            <td>
                                {isSelected && (
                                    <button onClick={(e) => handleSubmit(e)}>Submit</button>
                                )}
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}