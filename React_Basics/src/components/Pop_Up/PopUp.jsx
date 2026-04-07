
const PopUp = ({ id, header, body, footer }) => {

    return (
        <div id={id || "PopUp"} className="PopUp">
            <div className="content">
                <div className="header">
                    <span className="close-model-icon">
                        x
                        <h2>{header ? header : "Header"}</h2>
                    </span>
                </div>
                <div className="body">
                    {
                        body ? body : <div>
                            <p>This is our Popup Container</p>
                        </div>
                    }
                </div>
                <div className="footer">
                    {
                        footer ? footer : <h2>This is the footer container</h2>
                    }
                </div>
            </div>
        </div>
    )
}

export default PopUp
