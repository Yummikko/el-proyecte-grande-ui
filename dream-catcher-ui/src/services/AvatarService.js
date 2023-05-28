import { useState, useEffect } from "react";
import defaultPhoto from '../assets/images/profile.jpeg';
import Tooltip from "../common/Tooltip";

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
        <div className="g-2">
            <Tooltip content="Upload new profile picture" direction="right">
                <div className="mb-2">
                    { image
                    ? <img src={`data:image/png;base64,${image}`}
                    alt="first" className="avatar rounded-circle" />
                    : <img src={defaultPhoto}
                    alt="first" className="avatar rounded-circle" />
                    }
                </div>
            </Tooltip>
        </div>
    )
}

export default AvatarService