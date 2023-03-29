import React, {useRef} from 'react'

const FileUploader = ({onFileSelectError, onFileSelectSuccess}) => {
    const fileInput = useRef(null)


    const handleFileInput = (e) => {
        // handle validations
        const file = e.target.files[0];
        if (file.size > 1024)
          onFileSelectError({ error: "File size cannot exceed more than 1MB" });
        else onFileSelectSuccess(file);
      };

    return (
        <div className="mb-3">
            <label for="formFile" className="form-label">Add Image</label>
            <input className="form-control" name="image" type="file" id="formFile" onChange={handleFileInput} />
        </div>
    )
}

export default FileUploader