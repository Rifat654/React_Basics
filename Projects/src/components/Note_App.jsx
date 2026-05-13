import { useState } from "react";


const Note_App = () => {

    const [input, setInput] = useState("");
    const [notes, setNotes] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        setInput("");
        const copy = [...notes];
        copy.push({ input });
        setNotes(copy);

    }

    const inputFn = (e) => {
        // console.log(e.target.value);

        setInput(e.target.value);

    }

    return (
        <div className="w-100 h-120 bg-gray-200 rounded-lg p-4">
            <h1 className="text-2xl text-purple-800 font-semibold">Note App</h1>

            <form

                className="flex  gap-2 items-center w-full  mt-10 p-4 rounded-lg">
                {/* Input Field */}
                <input
                    value={input}
                    onChange={inputFn}
                    className="border-2 py-3 px-5 rounded-lg w-full"
                    type="text"
                    name="note"
                    placeholder="Enter notes here..." />
                {/* Btn */}
                <button
                    onClick={handleSubmit}
                    className="bg-blue-500 w-1/3 hover:bg-blue-700 text-white text-sm py-2 px-1 rounded"
                    type="submit">
                    Add Note
                </button>
            </form>
            {/* Notes section */}
            <div className=" p-5 bg-white rounded-lg  h-64 mt-7 overflow-y-auto">
                <h2 className="text-xl font-semibold mb-2">{
                    notes.map((note, index) => (
                        <p key={index} className="text-gray-700">
                            {note.input}
                        </p>
                    ))
                }</h2>
            </div>
        </div>
    )
}

export default Note_App
