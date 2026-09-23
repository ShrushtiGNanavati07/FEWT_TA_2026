import { useEffect, useState } from "react";
// import "./Faculty.css";

export default function Faculty() {

    const API_URL =
        "https://6aa776879b08676cd32b333e.mockapi.io/faculties";

    // FORM DATA
    const [data, setData] = useState({
        FacultyID: "",
        FacultyName: "",
        FacultyExp: "",
        FacultyImage: ""
    });

    // DATA FETCHED FROM API
    const [facultyList, setFacultyList] = useState([]);

    // STORE MOCKAPI ID WHILE EDITING
    const [editID, setEditID] = useState(null);

    const getFaculty = () => {

        fetch(API_URL)

            .then((res) => {
                return res.json();
            })

            .then((fdata) => {
                setFacultyList(fdata);
            })

            .catch((error) => {
                console.log(error);
            });
    };

    // CALL GET API WHEN COMPONENT LOADS
    useEffect(() => {

        getFaculty();

    }, []);
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


        // =================================================
        // UPDATE FACULTY
        // =================================================

        if (editID !== null) {

            fetch(`${API_URL}/${editID}`, {

                method: "PUT",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(data)

            })

                .then((res) => {
                    return res.json();
                })

                .then((updatedData) => {

                    console.log("Updated:", updatedData);

                    // GET UPDATED DATA FROM API
                    getFaculty();

                    // CLEAR FORM
                    clearForm();

                })

                .catch((error) => {
                    console.log(error);
                });

        }


        // =================================================
        // CREATE FACULTY
        // =================================================

        else {

            fetch(API_URL, {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(data)

            })

                .then((res) => {
                    return res.json();
                })

                .then((newData) => {

                    console.log("Created:", newData);

                    // GET UPDATED DATA FROM API
                    getFaculty();

                    // CLEAR FORM
                    clearForm();

                })

                .catch((error) => {
                    console.log(error);
                });

        }

    };


    // =====================================================
    // EDIT FACULTY
    // =====================================================

    const handleEdit = (faculty) => {

        // Load API data into form

        setData({

            FacultyID: faculty.FacultyID,

            FacultyName: faculty.FacultyName,

            FacultyExp: faculty.FacultyExp,

            FacultyImage: faculty.FacultyImage

        });


        // Store MockAPI generated ID

        setEditID(faculty.FacultyID);

    };


    // =====================================================
    // DELETE FACULTY
    // =====================================================

    const handleDelete = (id) => {

        if (!window.confirm("Are you sure you want to delete this faculty?")) {
            return;
        }

        
        fetch(`${API_URL}/${id}`, {

            method: "DELETE"

        })

            .then((res) => {
                return res.json();
            })

            .then((deletedData) => {

                console.log("Deleted:", deletedData);

                // GET UPDATED DATA FROM API
                getFaculty();

            })

            .catch((error) => {
                console.log(error);
            });

    };


    // =====================================================
    // CLEAR FORM
    // =====================================================

    const clearForm = () => {

        setData({

            FacultyID: "",
            FacultyName: "",
            FacultyExp: "",
            FacultyImage: ""

        });

        setEditID(null);

    };


    // =====================================================
    // JSX
    // =====================================================

    return (
        <>

            <div className="container">

                <h1>
                    Faculty CRUD Operation
                </h1>


                {/* FORM */}

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

                            onChange={(e) => {

                                setData({
                                    ...data,
                                    [e.target.name]: e.target.value
                                });

                            }}
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

                            onChange={(e) => {

                                setData({
                                    ...data,
                                    [e.target.name]: e.target.value
                                });

                            }}
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

                            onChange={(e) => {

                                setData({
                                    ...data,
                                    [e.target.name]: e.target.value
                                });

                            }}
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

                            onChange={(e) => {

                                setData({
                                    ...data,
                                    [e.target.name]: e.target.value
                                });

                            }}
                        />

                    </div>

                    <button
                        onClick={handleClick}
                        className="submit-btn"
                    >

                        {
                            editID === null
                                ? "Add Faculty"
                                : "Update Faculty"
                        }

                    </button>

                </div>
                


                {/* TABLE */}

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

                        {

                            facultyList.map((item) => (

                                <tr key={item.FacultyID}>

                                    <td>
                                        {item.FacultyID}
                                    </td>

                                    <td>
                                        {item.FacultyName}
                                    </td>

                                    <td>
                                        {item.FacultyExp} Years
                                    </td>

                                    <td>

                                        <img
                                            src={item.FacultyImage}
                                            alt={item.FacultyName}
                                            width="80"
                                            height="80"
                                        />

                                    </td>

                                    <td>

                                        <button
                                            onClick={() => handleEdit(item)}
                                            className="edit-btn"
                                        >
                                            Edit
                                        </button>


                                        <button
                                            onClick={() => handleDelete(item.FacultyID)}
                                            className="delete-btn"
                                        >
                                            Delete
                                        </button>

                                    </td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

            </div>

        </>
    );
}
