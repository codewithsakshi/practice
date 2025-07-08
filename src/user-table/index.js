import React, { useEffect, useState } from "react";
import updatedUsers from "./data";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, Button } from '@mui/material';

export default function UserTable() {
    const userPerPage = 10;
    const [currentPageIndex, setCurrentPageIndex] = useState(1);

    const totalPages = Math.ceil(updatedUsers.length/userPerPage);

    const prevBtnClick = () => {
        if(currentPageIndex > 1){
            setCurrentPageIndex((prev) => prev-1);
        }else{
            setCurrentPageIndex(totalPages);
        }
    }

    const nextBtnClick = () => {
        if(currentPageIndex < totalPages){
            setCurrentPageIndex((prev) => prev+1);
        }else{
            setCurrentPageIndex(1);
        }
    }


    const startIndex = (currentPageIndex - 1) * userPerPage;
    const lastIndex = startIndex + userPerPage;

    const users = updatedUsers.slice(startIndex, lastIndex)

    return (
        <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>S.No</TableCell>
                        <TableCell>User Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Role</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user, index) => (
                        <TableRow>
                            <TableCell>{startIndex + index + 1}</TableCell>
                            <TableCell>{user.userId}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.role}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", marginTop: "30px"}}>
                <Button variant="contained"
                    color="primary" onClick={prevBtnClick}>Prev</Button>
                <p>Page {currentPageIndex} of {totalPages}</p>
                <Button variant="contained"
                    color="primary" onClick={nextBtnClick}>Next</Button>
            </div>
        </div>
    )
}

