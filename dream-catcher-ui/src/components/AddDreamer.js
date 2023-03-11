import React, { useState } from 'react'
import DreamerService from '../services/dreamerService';

const AddDreamer = () => {
  const [dreamer, setDreamer] = useState({
    nickname: "",
    email: "",
  })

  const onClick= (e) => {
    e.stopPropagation();
    toggleShow()
    saveDreamer()
  }

  const [show, setShow] = useState();

  var buttonText = show ? "Restart" : "Add Dreamer";

  function toggleShow() {
    setShow(!show);
  }

  const isVisibleForm = () => {

  }

  const handleChange = (e) => {
    const value = e.target.value;
    setDreamer({...dreamer, [e.target.name]:value})
  }

  const [data, setData] = useState()
  const message = "Success"

  const saveDreamer = (e) => {
    e.preventDefault();
    DreamerService.saveDreamer(dreamer)
      .then((response) => {
        setData(response)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div className='flex max-w-2xl mx-auto shadow border-b'>
      
      {<div className='px-8 py-8'>
        <div className='font-thin text-2xl tracking-wider'>
          <h1>Add Dreamer</h1>
        </div>
        <div className='items-center justify-center h-14 w-full my-4'>
          <label className='d-block'>Nick Name</label>
          <input type="text" className='h-10 w-96 border mt-2 px-2 py-2' name="nickname" value={dreamer.nickname} onChange={(e) => handleChange(e)}></input>
        </div>
        <div className='items-center justify-center h-14 w-full my-4'>
          <label className='d-block'>Email</label>
          <input type="text" className='h-10 w-96 border mt-2 px-2 py-2' name="email" value={dreamer.email} onChange={(e) => handleChange(e)}></input>
        </div>
        <div className='items-center justify-center h-14 w-full my-4'>
          <button onClick={onClick} className='btn btn-success mb-3'>Add</button>
          <button className='btn btn-danger mb-3 ms-1'>Clear</button>
        </div>
      </div>}
    {data && (
      <div className='form-group'>
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
  )
}

export default AddDreamer