import { useState, useEffect } from "react";

const ImageService = (props) => {

    const [image, setImage] = useState("")

    useEffect(() => {

        const fetchImageData = () => {
            try {
                if (props?.data?.image?.id)
                    fetch(`http://localhost:8080/image/display/${props.data.image.id}`)
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

    }, [props?.data?.image?.id]);

    return (
        <div className="row g-2">
            <div className="col mb-2">
                { props.data
                ? <img src={`data:image/png;base64,${image}`}
                alt="first" className="w-100 rounded-3" />
                : <img src="public/logo512.png"
                alt="first" className="w-100 rounded-3" />
                }
            </div>
        </div>
    )
}

export default ImageService