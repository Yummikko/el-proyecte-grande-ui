import { useState, useEffect } from "react";

const ImageService = () => {

    const [image, setImage] = useState("");

    useEffect(() => {

        const fetchImageData = async () => {
            try {
                fetch(`http://localhost:8080/image/display/2`)
                .then(response =>
                    response.text()
                ).then((actualData) =>
                    setImage(actualData)
                )
            } catch (error) {
            console.log("error", error);
            }
        };

        fetchImageData()

    }, []);

    return (
        <div className="row g-2">
            <div className="col mb-2">
                <img src={`data:image/png;base64,${image}`}
                alt="first" className="w-100 rounded-3" />
            </div>
        </div>
    )
}

export default ImageService