import React from 'react';

const RowEdit = ({ editFormData, handleEditFormChange, handleCancelClick, handleEditFormSubmit }) => {
    return (
        <tr>
            <td>
                <input name="name" value={editFormData.name} onChange={handleEditFormChange} />
            </td>
            <td>
                <input name="phone" value={editFormData.phone} onChange={handleEditFormChange} />
            </td>
            <td>
                <input name="email" value={editFormData.email} onChange={handleEditFormChange} />
            </td>
            <td>
                <button type="button" onClick={(event) => {handleEditFormSubmit(event)}}>Save</button>
                <button type="button" onClick={() => {handleCancelClick()}}>Cancel</button>
            </td>
        </tr>
    )
}

export default RowEdit;