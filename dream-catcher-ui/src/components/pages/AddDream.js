import React, { useState } from 'react'
import DreamService from '../../services/DreamService';
import FileUploader from '../FileUploader';
import TagsInput from '../TagsInput';
import Navbar from '../Navbar';

const AddDream = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [tags, setTags] = useState([])
    const [dream, setDream] = useState({
        title: "",
        description: "",
        tags: {tags},
        image:{selectedFile}
    })


    const handleChange = (e) => {
        const value = e.target.value;
        setDream({...dream, [e.target.name]:value})
    }

    const [data, setData] = useState()
    const message = dream.dreamTitle + " was successfully created."

    const saveDream = (e) => {
        e.preventDefault();
        DreamService.saveDream(dream)
        .then((response) => {
            setData(response)
        })
        .catch((error) => {
            console.log(error);
        })
    }

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
                <input type="text" className='h-10 w-96 border mt-2 px-2 py-2' name="title" value={dream.title} onChange={(e) => handleChange(e)} required/>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='d-block'>Dream Description</label>
                <textarea type="text" className='h-10 w-150 border mt-2 px-2 py-2' name="description" value={dream.description} onChange={(e) => handleChange(e)} required/>
            </div>
            <TagsInput setTagsData={(tags) => setTags(tags)} />
            <FileUploader onFileSelectSuccess={(file) => setSelectedFile(file)}
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