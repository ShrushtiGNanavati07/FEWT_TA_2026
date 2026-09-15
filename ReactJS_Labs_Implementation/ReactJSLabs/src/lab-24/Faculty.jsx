import { useEffect, useState } from "react";
import "./Faculty.css"

function Faculty() {

    // datatype : Object
    const [data, setData] = useState({
        FacultyID: "",
        FacultyName: "",
        FacultyExp: "",
        FacultyImage: ""
    });

    // FACULTY ARRAY
    const [facultyList, setFacultyList] = useState([]);

    // EDIT INDEX
    const [editIndex, setEditIndex] = useState(null);

    // READ DATA FROM MOCK API 
    // AND STORE IN facultyList ARRAY
    useEffect(() => {

        fetch("https://6aa78cea9b08676cd32b4312.mockapi.io/faculties")

            .then((res) => {
                return res.json();
            })

            .then((fdata) => {
                setFacultyList(fdata);
            });

    }, []);

    // HANDLE INPUT
    const handleChange = (e) => {

        setData({
            ...data,
            [e.target.name]: e.target.value
        });

    };

    // CREATE / UPDATE
    const handleClick = () => {

        // Validation

        if (
            !data.FacultyID ||
            !data.FacultyName ||
            !data.FacultyExp ||
            !data.FacultyImage
        ) {

            alert("All fields are required");

            return;
        }


        // UPDATE

        if (editIndex !== null) {

            const updatedList = [...facultyList];

            updatedList[editIndex] = {
                ...data
            };

            setFacultyList(updatedList);

            setEditIndex(null);

        }

        // CREATE
        else {

            setFacultyList([
                ...facultyList,
                {
                    ...data
                }
            ]);

        }


        // CLEAR FORM
        setData({
            FacultyID: "",
            FacultyName: "",
            FacultyExp: "",
            FacultyImage: ""
        });

    };


    // EDIT FACULTY
    const handleEdit = (index) => {

        setData({
            // ...facultyList[index]
            FacultyID: facultyList[index].FacultyID,
            FacultyName: facultyList[index].FacultyName,
            FacultyExp: facultyList[index].FacultyExp,
            FacultyImage: facultyList[index].FacultyImage
        });

        // CHANGE editIndex VALUE
        setEditIndex(index);

    };


    // DELETE FACULTY
    const handleDelete = (index) => {

        const updatedList = facultyList.filter(
            (item, i) => i !== index
        );

        setFacultyList(updatedList);


        // If currently editing the deleted record

        if (editIndex === index) {

            setEditIndex(null);

            setData({
                FacultyID: "",
                FacultyName: "",
                FacultyExp: "",
                FacultyImage: ""
            });

        }

    };



    // DISPLAY RECORDS
    const records = facultyList.map((item, index) => (

        <tr key={index}>

            <td>{item.FacultyID}</td>

            <td>{item.FacultyName}</td>

            <td>{item.FacultyExp} Years</td>

            <td>
                <img
                    src={item.FacultyImage}
                    alt={item.FacultyName}
                    width="80"
                    height="80"
                />
            </td>

            <td>
                <button onClick={() => handleEdit(index)} className="edit-btn">Edit</button>

                <button onClick={() => handleDelete(index)} className="delete-btn">Delete</button>
            </td>

        </tr>

    ));



    // JSX


    return (

        <>

            <div className="container">

                <h1>
                    Faculty CRUD Operation
                </h1>


                {/*FORM */}

                <div className="form-container">

                    <div className="form-row">

                        <label>
                            Faculty ID :
                        </label>

                        <input
                            type="text"
                            name="FacultyID"
                            placeholder="Enter Faculty ID"
                            value={data.FacultyID}
                            onChange={handleChange}
                        />

                    </div>


                    <div className="form-row">

                        <label>
                            Faculty Name :
                        </label>

                        <input
                            type="text"
                            name="FacultyName"
                            placeholder="Enter Faculty Name"
                            value={data.FacultyName}
                            onChange={handleChange}
                        />

                    </div>


                    <div className="form-row">

                        <label>
                            Faculty Experience :
                        </label>

                        <input
                            type="number"
                            name="FacultyExp"
                            placeholder="Enter Experience"
                            value={data.FacultyExp}
                            onChange={handleChange}
                        />

                    </div>


                    <div className="form-row">

                        <label>
                            Faculty Image :
                        </label>

                        <input
                            type="text"
                            name="FacultyImage"
                            placeholder="Enter Image URL"
                            value={data.FacultyImage}
                            onChange={handleChange}
                        />

                    </div>


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


                {/*TABLE*/}

                <table>

                    <thead>

                        <tr>

                            <th>Faculty ID</th>

                            <th>Faculty Name</th>

                            <th>Experience</th>

                            <th>Image</th>

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

export default Faculty;

