import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
    return (
        <div className="contaner todosBox">
            <h3 className="text-center my-2">Todos List</h3>
            <div className="col-lg-10 border border-danger mx-auto p-4 ">
                <div>
                    {props.todos.length === 0 ? <h4>😒 No todos to Display ❓❓❔❓❓</h4> :
                        <>
                            {
                                props.todos.map((todo) => {
                                    return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                                })
                            }
                        </>
                    }
                </div>
            </div>
        </div>
    )
}
