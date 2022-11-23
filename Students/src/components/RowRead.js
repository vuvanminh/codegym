import React from 'react';

const RowRead = ({ student, handleEditClick, handleDeleteClick }) => {
    return (
        <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.phone}</td>
            <td>{student.email}</td>
            <td>
                <button type="button" onClick={(event) => handleEditClick(event, student)} >Edit</button>
                <button type="button" onClick={() => handleDeleteClick(student.id)}>Delete</button>
            </td>
        </tr>
    )
}

export default RowRead;