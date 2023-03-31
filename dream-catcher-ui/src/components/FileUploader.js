import React, {useRef} from 'react'

const FileUploader = ({onFileSelectError, onFileSelectSuccess}) => {
    const fileInput = useRef(null)


    const handleFileInput = (e) => {
        // handle validations
        const file = e.target.files[0];
        if (file.size > 1048576) {
            onFileSelectError({ error: "File size cannot exceed more than 1MB" });
        }
        else {
            fileInput.current && fileInput.current.click()
            onFileSelectSuccess(file);
        }
      };

    return (
        <div className="mb-3">
            <label for="formFile" className="form-label">Add Image</label>
            <input className="form-control w-25" name="image" type="file" id="formFile" onChange={handleFileInput} />
        </div>
    )
}

export default FileUploader