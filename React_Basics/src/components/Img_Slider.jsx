import { useEffect, useState } from "react"


const Img_Slider = () => {

    // img state
    const [img, setImg] = useState({ url, limit })
    // slide state
    const [slide, setSlide] = useState(0)
    // Async error state
    const [errorMsg, setErrorMsg] = useState(null)
    // loading state
    const [loading, setLoading] = useState(false)

    // async function
    async function fetch(getUrl) {
        try {
            setLoading(true)
            const response = await fetch(getUrl);
            if (data) {
                setLoading(false)
                setImg(data)
            }
        }
        catch (e) {
            setImg(e.message)
            setLoading(false)
        }

    }

    useEffect(() => {
        if (url !== "")
            fetch()
    }, [url])

    return (
        <div>
            <h1 className="text-center text-2xl text-red-600">Image Slider</h1>
        </div>
    )
}

export default Img_Slider
