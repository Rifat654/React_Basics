import axios from "axios";

const App = () => {

  // Axios  for calling the API 
  const APIFn = async () => {
    try {
      const res = await axios.get("https://picsum.photos/v2/list");
      console.log(res);
    }
    catch (err) {
      console.log(err, "Something is happening");

    }
  }

  return (
    <div className="w-full h-screen bg-gray-900 text-white">
      <h1>Gallery-projects</h1>
      <button onClick={APIFn} className=" px-4 py-2 rounded-2xl bg-blue-950 text-white scale-3d hover:scale-105 transition-transform duration-200 cursor-pointer">Click me</button>
    </div>
  )
}

export default App
