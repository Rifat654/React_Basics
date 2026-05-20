import axios from "axios";
import { useState } from "react";

const App = () => {

  const [imagedata, setImagedata] = useState([]);

  // Axios  for calling the API 
  const APIFn = async () => {
    try {
      const res = await axios.get("https://picsum.photos/v2/list");
      console.log(res.data[0].download_url);
      setImagedata(res.data);
    }

    catch (err) {
      console.log(err, "Something is happening");
    }

  }

  return (
    <div className="w-full h-screen  bg-gray-900 text-white">
      <h1>Gallery-projects</h1>
      <button onClick={APIFn} className=" px-4 py-2 rounded-2xl bg-blue-950 text-white scale-3d hover:scale-105 transition-transform duration-200 cursor-pointer">Click me</button>
      <div className="w-full h-full  grid grid-cols-3 gap-4 place-content-center">
        {
          imagedata.map((item, index) => {
            return (
              <div key={index} className=" p-4 ">
                <img src={item.download_url} alt="Random Image" className="w-64 h-64 object-cover" />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App
