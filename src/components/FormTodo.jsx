import React, { useState } from "react";

const FormTodo = (props) => {
    const [description, setDescription] = useState("");

    const { addItem } = props; //Add addItem to props

    const handleSubmit = (e) => {
        e.preventDefault(); //Removes default behavior form
        console.log(description);
        addItem({
            done: false,
            id: (+new Date()).toString(),
            description,
        });
        setDescription("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="todo-list">
                <div className="file-input">
                    <input
                        type="text"
                        className="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <button
                    className="button pink"
                    disabled={description ? "" : "disabled"}
                >
                    Añadir tarea
                </button>
            </div>
        </form>
    );
};

export default FormTodo;
