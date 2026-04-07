const Card = ({ name, age }) => {





    return (
        <div>
            <div className="parent">

                <div className="top">

                </div>
                <div className="center">
                    <h3>Amazon <span>5 days ago</span></h3>
                    <h2>Senior UI\UX Designer</h2>

                    <div>
                        <h4>{name}</h4>
                        <h4>{age} years old</h4>
                    </div>

                </div>
                <div className="button">
                    <button>Apply Now</button>
                </div>

            </div>
        </div>
    )
}

export default Card
