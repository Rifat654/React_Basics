import { useState } from "react";

const faqData = [
    {
        id: 1,
        question: "What is React?",
        answer: "React is a JavaScript library for building user interfaces.",
    },
    {
        id: 2,
        question: "What is Tailwind CSS?",
        answer: "Tailwind CSS is a utility-first CSS framework for rapidly building modern websites.",
    },
    {
        id: 3,
        question: "What is an Accordion?",
        answer: "An accordion is a UI component that expands and collapses content.",
    },
];

export default function Accordion({
    items = faqData,
    title = "React Accordion mini project",
}) {
    const [openItemId, setOpenItemId] = useState(null);

    function handleToggle(id) {
        setOpenItemId(openItemId === id ? null : id);
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            <div className="w-full max-w-xl">
                <h1 className="text-3xl font-bold text-center mb-8">{title}</h1>

                {items.map((item) => {
                    const isOpen = openItemId === item.id;

                    return (
                        <div
                            key={item.id}
                            className="bg-white rounded-lg shadow mb-4 overflow-hidden"
                        >
                            <button
                                type="button"
                                onClick={() => handleToggle(item.id)}
                                className="w-full flex justify-between items-center p-5 text-left font-semibold"
                                aria-expanded={isOpen}
                                aria-controls={`answer-${item.id}`}
                            >
                                <span>{item.question}</span>
                                <span className="text-2xl" aria-hidden="true">
                                    {isOpen ? "-" : "+"}
                                </span>
                            </button>

                            {isOpen && (
                                <div
                                    id={`answer-${item.id}`}
                                    className="px-5 pb-5 text-black"
                                >
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
