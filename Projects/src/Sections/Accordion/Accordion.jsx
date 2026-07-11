import { useState } from "react";

const faqData = [
    {
        id: 1,
        question: "What is React?",
        answer:
            "React is a JavaScript library for building user interfaces."
    },
    {
        id: 2,
        question: "What is Tailwind CSS?",
        answer:
            "Tailwind CSS is a utility-first CSS framework for rapidly building modern websites."
    },
    {
        id: 3,
        question: "What is an Accordion?",
        answer:
            "An accordion is a UI component that expands and collapses content."
    },
];

export default function App() {
    const [selectedId, setSelectedId] = useState(null);

    function handleToggle(id) {
        setSelectedId(selectedId === id ? null : id);
    }

    return (
        <div className="min-h-screen text-black flex items-center justify-center p-6">
            <div className="w-full bg-amber-700 max-w-xl">

                <h1 className="text-3xl font-bold text-center mb-8">
                    React Accordion
                </h1>

                {faqData.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-lg shadow mb-4 overflow-hidden"
                    >
                        <button
                            onClick={() => handleToggle(item.id)}
                            className="w-full flex justify-between items-center p-5 text-left font-semibold hover:bg-gray-100 transition"
                        >
                            {item.question}

                            <span className="text-2xl">
                                {selectedId === item.id ? "-" : "+"}
                            </span>
                        </button>

                        {selectedId === item.id && (
                            <div className="px-5 pb-5 text-gray-600">
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}