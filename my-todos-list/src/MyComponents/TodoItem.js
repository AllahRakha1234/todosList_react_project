import React from 'react'

export const TodoItem = ({ todo, onDelete }) => { // NAMED PARAMETER
    return (
        <div className="container">
            <h4>{todo.sno + '.' + todo.title}</h4>
            <p>{todo.desc}</p>
            <button className='btn btn-sm btn-danger mb-3' onClick={() => { onDelete(todo) }}>Delete</button>
        </div>
    )
}
