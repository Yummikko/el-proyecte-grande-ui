import React, { useEffect, useState } from 'react'
import DreamService from '../../services/DreamService';
import FileUploader from '../FileUploader';
import TagsInput from '../TagsInput';
import Navbar from '../Navbar';
import "../../styles/global.css"

const AddDream = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedFileName, setSelectedFileName] = useState(null);
    const [tags, setTags] = useState([])
    const [dream, setDream] = useState({
        dreamTitle: "",
        dreamDescription: "",
        hashtags: {tags},
        imageName: {selectedFileName}
    })


    const handleChange = (e) => {
        const value = e.target.value;
        setDream({...dream, [e.target.name]:value})
    }

    const handleTagsChange = (e) => {
        setTags(e)
        setDream((prevState) => {return {...prevState, hashtags:e}})
    }
    
    const handleFileChange = (e) => {
        setSelectedFile(e)
        setSelectedFileName(e.name)
        setDream((prevState) => {return {...prevState, imageName:e.name}})
    }

    const [data, setData] = useState()
    const message = dream.dreamTitle + " was successfully created."

    const saveDream = (e) => {
        e.preventDefault();
        console.log(dream)
        console.log(selectedFile)
        DreamService.uploadFile(selectedFile)
        DreamService.saveDream(dream)
        .then((response) => {
            setData(response)
        })
        .catch((error) => {
            console.log(error);
        }).then(() => {
            refreshPage() 
        })
    }

    function refreshPage() {
        window.location.reload(false);
    }

    useEffect(() => {
        console.log(dream)
    }, [dream])

    return (
        <div>
    <Navbar/>
        <div className='flex max-w-2xl mx-auto shadow border-b pb-2'>
        
        {<div className='p-2'>
            <div className='font-thin text-2xl tracking-wider'>
                <h1>Add dream</h1>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='d-block'>Dream Title</label>
                <input type="text" className='dream-title-text h-10 border mt-2 px-2 py-2' name="dreamTitle" value={dream.dreamTitle} onChange={(e) => handleChange(e)} required />
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='d-block'>Dream Description</label>
                <textarea type="text" className='dream-desc-text h-10 border mt-2 px-2 py-2' name="dreamDescription" value={dream.dreamDescription} onChange={(e) => handleChange(e)} required />
            </div>
            <TagsInput setTagsData={(tags) => handleTagsChange(tags)} />
            <FileUploader onFileSelectSuccess={(file) => handleFileChange(file)}
          onFileSelectError={({ error }) => alert(error)} />
            <div className='items-center justify-center h-14 w-full my-4'>
                <button onClick={saveDream} className='btn btn-primary mb-3'>Add</button>
                <button className='btn btn-info mb-3 ms-1'>Clear</button>
            </div>
        </div>}
        {data && (
        <div className='form-group m-1'>
            <div
            className={data ? 'alert alert-success' : 'alert alert-danger'}
            role='alert'
            >
            {message}
            </div>
        </div>
        )
        }
        </div>
        </div>
    )
}

export default AddDream