import { useState, useEffect } from "react";
import defaultPhoto from '../assets/images/profile.jpeg';

const AvatarService = (props) => {

    const [image, setImage] = useState("")

    useEffect(() => {

        const fetchImageData = () => {
            try {
                if (props?.data)
                    fetch(`http://localhost:8080/api/users/avatar/${props.data}`)
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

    }, [props?.data]);

    return (
        <div className="row g-2">
            <div className="col mb-2">
                { image
                ? <img src={`data:image/png;base64,${image}`}
                alt="first" className="w-50 rounded-circle" />
                : <img src={defaultPhoto}
                alt="first" className="w-50 rounded-circle" />
                }
            </div>
        </div>
    )
}

export default AvatarService