import React, { useState } from 'react';
 
const StudentForm = ({ studentListData, setStudents }) => {
    // Set state
    const [ studentInfo, setStudentInfo ] = useState({
        name: "",
        phone: "",
        email: "",
    });

    // Event: Add new data
    const handleAddClick = (studentInfo) => {
      setStudents([...studentListData, studentInfo]);
    };

    // Event: input - onChange
    const handleChange = (event) => {
        setStudentInfo({ ...studentInfo, [event.target.name]: event.target.value });
    };

    // Event: Submit
    const onSubmit = (event) => {
        // display form data on submit
        event.preventDefault();
        handleAddClick(studentInfo);
        setStudentInfo({ name: "", phone: "", email: "" });
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Name:</label>
                <input name="name" placeholder="Enter name" value={studentInfo.name} onChange={handleChange} />
            </div>
            <div>
                <label>Phone:</label>
                <input name="phone" placeholder="Enter phone" value={studentInfo.phone} onChange={handleChange} />
            </div>
            <div>
                <label>Email:</label>
                <input name="email" placeholder="Enter email" value={studentInfo.email} onChange={handleChange} />
            </div>
            <button type="submit">Submit</button>
        </form>
   );
};
 
export default StudentForm;