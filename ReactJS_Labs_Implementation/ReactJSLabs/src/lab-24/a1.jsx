import { useState, useEffect } from "react";

export default function FacultyDisplay() {

    // 1. Create a MockAPI online with following ƒields. (A) 
    // • FacultyID 
    // • FacultyName 
    // • FacultyExp 
    //  • FacultyImage 

    const [facultyData, setFacultyData] = useState({

        FacultyID: "",
        FacultyName: "",
        FacultyExp: "",
        FacultyImage: ""

    });

    //For Displaying each facultyData in the list, we will store them in list

    const [facultyList, setFacultyList] = useState([]);


    useEffect(() => {
        //First fetch the data from mockAPI
        fetch("https://6881bc6a66a7eb81224bb523.mockapi.io/facultyAPI")
            .then((res) => res.json())
            .then((data) => {
                setFacultyList(data);
            }, []);
    })
    const record = facultyList.map((faculty, index) => {

                    return (

                        <tbody>
                            <tr key={index}>
                                <td>{faculty.FacultyID}</td>
                                <td>{faculty.FacultyName}</td>
                                <td>{faculty.FacultyExp}</td>
                                <td><img src={faculty.FacultyImage} alt={faculty.FacultyName} width="100" height="100" /></td>
                            </tr>
                        </tbody>



                    )

                })

    return (

        <>
            {/* Only Display */}
            <table class=" table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Faculty ID</th>
                        <th>Faculty Name</th>
                        <th>Faculty Experience</th>
                        <th>Faculty Image</th>
                    </tr>
                </thead>

                {record}
            </table>


        </>

    )


}