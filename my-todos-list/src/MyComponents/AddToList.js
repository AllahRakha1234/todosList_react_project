import React from 'react';
import { useState } from 'react';

export default function AddToList(props) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submitTodo = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else {
            props.addToList(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <>
            <div className="container">
                <h2 className='text-center'>Add To List</h2>
                <div className="col-lg-12 border border-danger p-3">
                    <form onSubmit={submitTodo}>
                        <div className="form-group p-2">
                            <label htmlFor="exampleInputEmail1" className='font-weight-bold'>Title</label>
                            <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" placeholder="Enter title" />
                        </div>
                        <div className="form-group p-2">
                            <label htmlFor="exampleInputPassword1">Description</label>
                            <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" placeholder="Enter description" />
                        </div>
                        <button type="submit" className="btn btn-success btn-sm m-2">Add To Todo List</button>
                    </form>
                </div>
            </div>
        </>
    )
}
