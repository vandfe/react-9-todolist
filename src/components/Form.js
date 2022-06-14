import React, { useState } from "react"

const Form = ({todos,setTodos,setStatus}) => {

    const [inputText, setInputText] = useState('')

    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    const submitTodoHander = (e) => {
        e.preventDefault()
        setTodos([
            ...todos,
            {
                text: inputText,
                completed: false,
                id: Math.random() * 1000
            }
        ])
        setInputText('')
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    return (
        <form>
            <input type="text" className="todo-input" onChange={inputTextHandler} value={inputText} />
            <button onClick={submitTodoHander} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo" onChange={statusHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form