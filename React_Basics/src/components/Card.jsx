
import "../index.css"


const Card = ({ name, age }) => {

    console.log(name);

    return (
        <div className="card">
            <img
                src="https://images.unsplash.com/photo-1774815962483-8244a993d0f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D"
                alt="profile"
                className="card-img"
            />

            <h1 className="card-title">{name}</h1>
            <p className="card-age">{age} years old</p>

            <p className="card-bio">
                I am a MERN stack developer passionate about building modern web
                applications and learning AI technologies.
            </p>

            <button className="card-btn">View Profile</button>
        </div>
    )
}

export default Card
