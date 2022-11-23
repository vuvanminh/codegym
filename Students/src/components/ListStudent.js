import React, { useState, Fragment } from 'react';
import RowRead from './RowRead';
import RowEdit from './RowEdit';

const ListStudent = ({ studentListData, setStudents }) => {
    
    // Set state
    const [ editFormData, setEditFormData ] = useState({
        name: "",
        phone: "",
        email: "",
    });
    const [ editStudentId, setStudentId ] = useState(null);
    
    // Event: onChange row
    const handleEditFormChange = (event) => {
        event.preventDefault();
        setEditFormData({ ...editFormData, [event.target.name]: event.target.value });
    }

    // Open form when clicking Edit
    const handleEditClick = (event, student) => {
        event.preventDefault();
        setStudentId(student.id);

        const formValues = {
            name: student.name,
            phone: student.phone,
            email: student.email,
        }
        setEditFormData(formValues);
    }

    // Event: Submit row changes
    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedStudent = {
            id: editStudentId,
            name: editFormData.name,
            phone: editFormData.phone,
            email: editFormData.email,
        };
        const newStudents = [...studentListData];
        const index = studentListData.findIndex((student) => student.id === editStudentId);

        newStudents[index] = editedStudent;
        setStudents(newStudents);
        setStudentId(null);
    };

    // Cancel change
    const handleCancelClick = () => {
        setStudentId(null);
    };

    // Delete student data
    const handleDeleteClick = (studentId) => {
        const newStudents = [...studentListData];
        const index = studentListData.findIndex((student) => student.id === studentId);
        newStudents.splice(index, 1);
        setStudents(newStudents);
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {studentListData.map((student) => (
                    <Fragment>
                        {editStudentId === student.id ? (
                            <RowEdit editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick} handleEditFormSubmit={handleEditFormSubmit} /> 
                        ) : (
                            <RowRead student={student} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />
                        )}
                    </Fragment>
                ))}
            </tbody>
        </table>
    )
}

export default ListStudent;