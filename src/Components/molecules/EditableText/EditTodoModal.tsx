import { useEffect, useState } from "react";
import "./EditTodoModal.css";
import type { Props } from "../../../Types";


function EditTodoModal({
    open,
    title,
    onClose,
    onSave,
}: Props) {

    const [text, setText] = useState(title);


    useEffect(() => {
        setText(title);
    }, [title]);


    if (!open) return null;


    return (
        <div className="modal">

            <div className="modal-box">

                <h2>Edit task</h2>


                <input
                    className="modal-input"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />


                <div className="modal-actions">

                    <button
                        className="cancel-btn"
                        onClick={onClose}
                    >
                        Cancel
                    </button>


                    <button
                        className="save-btn"
                        onClick={() => {
                            onSave(text);
                            onClose();
                        }}
                    >
                        Save
                    </button>

                </div>

            </div>

        </div>
    );
}


export default EditTodoModal;