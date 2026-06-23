import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
const Demo = () => {

    const [imagedata, setImagedata] = useState([]);

    // Axios  for calling the API 
    const APIFn = async () => {
        try {
            const res = await axios.get("https://picsum.photos/v2/list?page=2&limit=15");
            console.log(res.data[0].download_url);
            setImagedata(res.data);
        }

        catch (err) {
            console.log(err, "Something is happening");
        }
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        APIFn();
    }, []);

    return (
        <div className="w-full min-h-screen bg-gray-900 text-white">
            <div className="w-full h-full ">
                <h1>Gallery-projects</h1>

                <button onClick={APIFn} className=" px-4 py-2 rounded-2xl bg-blue-950 text-white scale-3d hover:scale-105 transition-transform duration-200 cursor-pointer">Click me</button>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-items-center gap-4 mt-4 ">
                    {
                        imagedata.length === 0 ?
                            <span>No images to display</span>
                            :
                            imagedata.map((item, index) => {
                                return (
                                    <div key={index} className=" p-4 ">
                                        <img src={item.download_url} alt="Random Image" className="w-[80%] md:w-40 h-[80%] md:h-52 object-cover mx-auto md:mx-0" />
                                        <span className="text-center  my-2 text-sm text-gray-300">{item.author}</span>
                                    </div>
                                )
                            })
                    }
                </div>
            </div>


        </div>
    )
}

export default Demo
