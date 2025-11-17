import { deleteUser } from '../store/reduser/adduser.js';
import { useDispatch } from 'react-redux';
import {update} from '../store/reduser/adduser.js';
import React from 'react';


export const Card = ({ username, id }) => {
    const dispatch = useDispatch()
    const [editMode, setEditMode] = React.useState(false);
    const [newName, setNewName] = React.useState(username);
    
    const deleteItem = () => {
        dispatch(deleteUser({ id }))
    }
    const saqlash = () => {
        dispatch(update({id,username:newName}));
        setEditMode(false);
    };
    return (
        <div className="p-3 border rounded mb-3 flex items-center gap-3">
            {editMode ? (
                <input
                    className="border p-1 rounded"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                />
            ) : (
                <h1 className="text-[14px] font-semibold">{username}</h1>
            )}

            <div className="flex gap-3">
                {editMode ? (
                    <button onClick={saqlash} className="p-2 bg-green-600 text-white rounded">
                        saqlash
                    </button>
                ) : (
                    <button onClick={() => setEditMode(true)} className="p-2 bg-yellow-600 text-white rounded">
                        update
                    </button>
                )}

                <button onClick={deleteItem} className="p-2 bg-red-600 text-white rounded">
                    ochirsh
                </button>
            </div>
        </div>
    )
}