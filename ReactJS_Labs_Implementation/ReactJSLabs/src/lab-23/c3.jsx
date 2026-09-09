// crud for faculty

import { useState } from "react";

export default function FacultyCrud() {

    const [data, setData] = useState({
        facultyName: "",
        subject: "",
        salary: "",
        experience: ""
    });

    const [facultyList, setFacultyList] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    // Add / Update
    const handleClick = () => {

        if (
            !data.facultyName ||
            !data.subject ||
            !data.salary ||
            !data.experience
        ) {
            alert("All fields are required");
            return;
        }

        // Update
        if (editIndex !== null) {

            const updatedList = [...facultyList];

            updatedList[editIndex] = data;

            setFacultyList(updatedList);

            setEditIndex(null);
        }

        // Add
        else {

            setFacultyList([
                ...facultyList,
                { ...data }
            ]);
        }

        // Clear Inputs
        setData({
            facultyName: "",
            subject: "",
            salary: "",
            experience: ""
        });
    };

    // Edit Faculty
    const handleEdit = (index) => {
        setData(facultyList[index]);
        setEditIndex(index);
    };

    // Delete Faculty
    const handleDelete = (index) => {

        const updatedList = [
            ...facultyList.slice(0, index),
            ...facultyList.slice(index + 1)
        ];

        setFacultyList(updatedList);

        // Reset form if deleted row is editing
        if (editIndex === index) {

            setEditIndex(null);

            setData({
                facultyName: "",
                subject: "",
                salary: "",
                experience: ""
            });
        }
    };

    // Display Records
    const records = facultyList.map((item, index) => (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.facultyName}</td>
            <td>{item.subject}</td>
            <td>₹{item.salary}</td>
            <td>{item.experience} Years</td>

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
                    background:linear-gradient(
                        135deg,
                        #dbeafe,
                        #f0f9ff
                    );
                    font-family:Arial, sans-serif;
                }

                .container{
                    width:90%;
                    max-width:1100px;
                    margin:40px auto;
                    background:#fff;
                    padding:35px;
                    border-radius:20px;
                    box-shadow:
                    0 10px 30px rgba(0,0,0,0.1);
                }

                h1{
                    text-align:center;
                    margin-bottom:30px;
                    color:#1e293b;
                }

                .form-container{
                    background:#f8fafc;
                    padding:25px;
                    border-radius:15px;
                    margin-bottom:30px;
                }

                label{
                    font-weight:bold;
                    display:inline-block;
                    width:120px;
                    margin-top:15px;
                }

                input{
                    width:250px;
                    padding:12px;
                    border:1px solid #cbd5e1;
                    border-radius:8px;
                    outline:none;
                    margin-bottom:15px;
                    margin-right:20px;
                }

                input:focus{
                    border-color:#2563eb;
                    box-shadow:
                    0 0 5px rgba(37,99,235,0.3);
                }

                .submit-btn{
                    padding:12px 25px;
                    border:none;
                    border-radius:10px;
                    background:#2563eb;
                    color:white;
                    font-size:16px;
                    cursor:pointer;
                    margin-top:10px;
                }

                .submit-btn:hover{
                    opacity:0.9;
                }

                table{
                    width:100%;
                    border-collapse:collapse;
                    border-radius:15px;
                    overflow:hidden;
                    box-shadow:
                    0 5px 15px rgba(0,0,0,0.08);
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
                    background:#dbeafe;
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

                <h1>Faculty CRUD Operation</h1>

                <div className="form-container">

                    <label>Faculty Name :</label>
                    <input
                        type="text"
                        placeholder="Enter Faculty Name"
                        value={data.facultyName}
                        onChange={(e) =>
                            setData({
                                ...data,
                                facultyName: e.target.value
                            })
                        }
                    />

                    <label>Subject :</label>
                    <input
                        type="text"
                        placeholder="Enter Subject"
                        value={data.subject}
                        onChange={(e) =>
                            setData({
                                ...data,
                                subject: e.target.value
                            })
                        }
                    />

                    <br />

                    <label>Salary :</label>
                    <input
                        type="number"
                        placeholder="Enter Salary"
                        value={data.salary}
                        onChange={(e) =>
                            setData({
                                ...data,
                                salary: e.target.value
                            })
                        }
                    />

                    <label>Experience :</label>
                    <input
                        type="number"
                        placeholder="Enter Experience"
                        value={data.experience}
                        onChange={(e) =>
                            setData({
                                ...data,
                                experience: e.target.value
                            })
                        }
                    />

                    <br />

                    <button
                        onClick={handleClick}
                        className="submit-btn"
                    >
                        {
                            editIndex === null
                                ? "Add Faculty"
                                : "Update Faculty"
                        }
                    </button>

                </div>

                <table>

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Faculty Name</th>
                            <th>Subject</th>
                            <th>Salary</th>
                            <th>Experience</th>
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

