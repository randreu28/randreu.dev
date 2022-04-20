import Task from '../../Components/Task'
import React from 'react'
import { useState, useEffect } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

export default function ToDoList() {

    const [title, setTitle] = useState('')
    const [todos, setTodos] = useState([
        {
            title: 'Do the dishes',
            id: 1,
            completed: false
        },
        {
            title: 'Do my math homework',
            id: 2,
            completed: false
        },
        {
            title: 'Clean my room',
            id: 3,
            completed: false
        },
        {
            title: 'Create a To Do web app',
            id: 4,
            completed: true
        }
    ])
    const [status, setStatus] = useState('all')

    function onHandleChange(event) {
        setTitle(event.target.value)
    }

    function onHandleSubmit(event) {
        event.preventDefault()
        const id = Math.floor(Math.random() * 1000)
        setTodos([
            ...todos,
            {
                title: title,
                id: id,
                completed: false
            }
        ])

        /* render new task */

        setTitle('')

    }

    function countHandler() {
        let count = todos.filter((el) => !el.completed) /* Filter all todos that are completed */
        return count.length
    }

    function clearCompleted() {
        setTodos(todos.filter((el) => !el.completed))
    }

    function showAll() {
        return todos.map((todo, index) => (
            <Task key={todo.id} todo={todo} todos={todos} setTodos={setTodos} index={index} />
        ))
    }

    function showActive() {
        let active = todos
        active = active.filter((el) => !el.completed)
        return active.map((todo, index) => (
            <Task key={todo.id} todo={todo} todos={todos} setTodos={setTodos} index={index} />
        ))
    }

    function showCompleted() {
        let completed = todos
        completed = completed.filter((el) => el.completed)
        return completed.map((todo, index) => (
            <Task key={todo.id} todo={todo} todos={todos} setTodos={setTodos} index={index} />
        ))
    }

    function onDragEnd(result) {

        if (result.destination) {
            const source = result.source.index
            const destination = result.destination.index

            todos.splice(destination, 0, todos.splice(source, 1)[0])
        }
    }

    useEffect(() => {
        document.getElementsByTagName("body")[0].classList="bg-gray-100 font-josefin bg-ToDo md:bg-TodoBig";
    }, [])

    return (
        <>
            {/* Due to a bug in the react-beautiful-dnd, I was forced to not include a backdrop blur on the UI.
                 See issue here: https://github.com/atlassian/react-beautiful-dnd/issues/1826/ */}
                 
            <div className='w-11/12 lg:w-1/3 m-auto pt-10'>

                <h1 className='text-white font-bold text-3xl pb-8'>T O D O</h1>

                <form className='bg-white bg-opacity-20 p-4 rounded drop-shadow-xl flex mb-8' onSubmit={onHandleSubmit}>
                    <svg className='h-6 w-6 text-white' viewBox='0 0 21 21' xmlns='http://www.w3.org/2000/svg'><circle cx='10.5' cy='10.5' fill='none' r='8' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' /></svg>
                    <input className='pl-4 w-full focus:outline-none text-lg bg-transparent text-white' type='text' value={title} onChange={onHandleChange} name='title' placeholder='Create a new todo...' />
                </form>

                <ul className='bg-white bg-opacity-20 px-4 pt-2 rounded divide-y md:text-lg' id='taskList' >
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId='droppable'>
                            {(provided) => (
                                <div ref={provided.innerRef} {...provided.droppableProps} >
                                    {status === 'all' ? showAll() : null}

                                    {status === 'active' ? showActive() : null}

                                    {status === 'completed' ? showCompleted() : null}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                    <div className='flex justify-between text-white p-3 text-sm'>
                        <p className='text-center'>{countHandler()} <br />items left</p>
                        <p onClick={clearCompleted} className=' hover:cursor-pointer hover:text-blue-400 duration-200 text-center'>Clear <br />Completed</p>
                    </div>

                </ul>

                <div className='flex flex-col sm:flex-row justify-center text-center m-auto bg-white bg-opacity-20  px-3 py-2 rounded my-8 space-y-5 sm:space-y-0 sm:space-x-10'>
                    <p onClick={() => { setStatus('all') }} className={status === 'all' ? 'text-blue-400' : 'text-white hover:cursor-pointer hover:text-blue-400 duration-200'}>All</p>
                    <p onClick={() => { setStatus('active') }} className={status === 'active' ? 'text-blue-400' : 'text-white hover:cursor-pointer hover:text-blue-400 duration-200'}>Active</p>
                    <p onClick={() => { setStatus('completed') }} className={status === 'completed' ? 'text-blue-400' : 'text-white hover:cursor-pointer hover:text-blue-400 duration-200'}>Completed</p>
                </div>
                 
               <p className='text-center text-white'>Drag and drop to reorder the list</p>   
            </div>
        </>
    )
}
