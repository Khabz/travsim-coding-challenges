import React, { useState, useContext } from 'react'

import { GlobalContext } from '../store/GlobalContext'

export default function AddTodo() {
    const [input, setInput] = useState('')
    const { addTodo, todos } = useContext(GlobalContext)
    const id = `todo-${Object.keys(todos).length + 1}`
    const onSubmit = (e) => {
        e.preventDefault()
        if (input !== '') {
            addTodo(input, id)
            setInput('')
        }
    }

    const handleChange = (e) => {
        setInput(e.target.value)
    }
    return (
        <div>
            <h3 className="text-center mt-5">TodoList App</h3>
            <form
                onSubmit={onSubmit}
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 10,
                    marginTop: 35
                }}
            >
                <input className="form-control mr-3" placeholder="Create a new task" value={input} onChange={handleChange} />
                <button className="btn btn-primary" type='submit'>Submit</button>
            </form>
        </div>
    )
}
