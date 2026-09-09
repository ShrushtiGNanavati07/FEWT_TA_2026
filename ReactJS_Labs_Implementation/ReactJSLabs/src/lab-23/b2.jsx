// WAP to do CRUD operation on students stored as array using ReactJS

import { useState } from "react";

export default function StudentCrud() {

    const [data, setData] = useState({
        name: "",
        age: "",
        cpi: "",
        sem: ""
    });

    const [studentList, setStudentList] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    const handleClick = () => {

        if (!data.name || !data.age || !data.cpi || !data.sem) {
            alert("All fields are required");
            return;
        }

        // Update
        if (editIndex !== null) {

            const updatedList = [...studentList];

            updatedList[editIndex] = data;

            setStudentList(updatedList);

            setEditIndex(null);
        }

        // Add
        else {

            setStudentList([
                ...studentList,
                { ...data }
            ]);
        }

        // Clear Inputs
        setData({
            name: "",
            age: "",
            cpi: "",
            sem: ""
        });
    };

    // Edit
    const handleEdit = (index) => {
        setData(studentList[index]);
        setEditIndex(index);
    };

    // Delete
    const handleDelete = (index) => {

        const updatedList = [
            ...studentList.slice(0, index),
            ...studentList.slice(index + 1)
        ];

        setStudentList(updatedList);

        if (editIndex === index) {

            setEditIndex(null);

            setData({
                name: "",
                age: "",
                cpi: "",
                sem: ""
            });
        }
    };

    const records = studentList.map((item, index) => (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.cpi}</td>
            <td>{item.sem}</td>

            <td>
                <button
                    onClick={() => handleEdit(index)}
                    className="edit-btn"
                >
                    Edit
                </button>

                <button
                    onClick={() => handleDelete(index)}
                    className="delete-btn"
                >
                    Delete
                </button>
            </td>
        </tr>
    ));

    return (
        <>
            <style>
                {`
                *{
                    margin:0;
                    padding:0;
                    box-sizing:border-box;
                }

                body{
                    background: linear-gradient(
                        135deg,
                        #dbeafe,
                        #eff6ff
                    );
                    font-family: Arial, sans-serif;
                }

                .container{
                    width:90%;
                    max-width:1100px;
                    margin:40px auto;
                    background:white;
                    padding:30px;
                    border-radius:20px;
                    box-shadow:
                    0 10px 30px rgba(0,0,0,0.1);
                }

                h1{
                    text-align:center;
                    margin-bottom:30px;
                    color:#1e293b;
                }

                .form{
                    background:#f8fafc;
                    padding:25px;
                    border-radius:15px;
                    margin-bottom:30px;
                }

                label{
                    font-weight:bold;
                    display:inline-block;
                    width:80px;
                    margin:10px 0;
                }

                input{
                    width:250px;
                    padding:10px;
                    border:1px solid #cbd5e1;
                    border-radius:8px;
                    margin-right:20px;
                    margin-bottom:15px;
                    outline:none;
                }

                input:focus{
                    border-color:#2563eb;
                }

                .submit-btn{
                    padding:12px 25px;
                    border:none;
                    border-radius:10px;
                    background:#2563eb;
                    color:white;
                    font-size:16px;
                    cursor:pointer;
                }

                .submit-btn:hover{
                    opacity:0.9;
                }

                table{
                    width:100%;
                    border-collapse:collapse;
                    overflow:hidden;
                    border-radius:15px;
                    box-shadow:
                    0 5px 15px rgba(0,0,0,0.1);
                }

                th{
                    background:#1e293b;
                    color:white;
                    padding:15px;
                }

                td{
                    text-align:center;
                    padding:15px;
                    border-bottom:1px solid #ddd;
                }

                tr:hover{
                    background:#f1f5f9;
                }

                .edit-btn{
                    background:green;
                    color:white;
                    border:none;
                    padding:8px 15px;
                    border-radius:8px;
                    cursor:pointer;
                    margin-right:10px;
                }

                .delete-btn{
                    background:red;
                    color:white;
                    border:none;
                    padding:8px 15px;
                    border-radius:8px;
                    cursor:pointer;
                }
                `}
            </style>

            <div className="container">

                <h1>Student CRUD Operation</h1>

                <div className="form">

                    <label>Name :</label>
                    <input
                        type="text"
                        placeholder="Enter name"
                        value={data.name}
                        onChange={(e) =>
                            setData({
                                ...data,
                                name: e.target.value
                            })
                        }
                    />

                    <label>Age :</label>
                    <input
                        type="number"
                        placeholder="Enter age"
                        value={data.age}
                        onChange={(e) =>
                            setData({
                                ...data,
                                age: e.target.value
                            })
                        }
                    />

                    <br />

                    <label>CPI :</label>
                    <input
                        type="text"
                        placeholder="Enter CPI"
                        value={data.cpi}
                        onChange={(e) =>
                            setData({
                                ...data,
                                cpi: e.target.value
                            })
                        }
                    />

                    <label>Sem :</label>
                    <input
                        type="text"
                        placeholder="Enter semester"
                        value={data.sem}
                        onChange={(e) =>
                            setData({
                                ...data,
                                sem: e.target.value
                            })
                        }
                    />

                    <br />

                    <button
                        onClick={handleClick}
                        className="submit-btn"
                    >
                        {editIndex === null
                            ? "Add Student"
                            : "Update Student"}
                    </button>

                </div>

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>CPI</th>
                            <th>Semester</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {records}
                    </tbody>
                </table>

            </div>
        </>
    );
}

