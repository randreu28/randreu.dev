import { Draggable } from 'react-beautiful-dnd'

export default function Task(props) {

    function handleDelete() {
        props.setTodos(props.todos.filter((el) => el.id !== props.todo.id)) /* For each element, check if the id is equal to the todo.id. If it isn't, it deletes it */
    }

    function handleComplete() {
        props.setTodos(props.todos.map(item => {  /* Of all the todos... */
            if (item.id === props.todo.id) { /* The one that is being interacted.. */
                return {
                    ...item, completed: !item.completed /* Change the completed value to it's contrary, and leave the rest untouched */
                }
            }
            return item
        }))
    }


    return (
        <Draggable draggableId={props.todo.title} index={props.index}>
            {(provided) => (
                <div className='flex justify-between py-3 group' {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                    <div className='flex space-x-4'>
                        {props.todo.completed ?
                            <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-green-800 my-auto duration-200 hover:cursor-pointer' onClick={handleComplete} fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                            </svg>
                            :
                            <svg className='h-6 w-6 text-white my-auto hover:text-green-800 duration-200 hover:cursor-pointer' onClick={handleComplete} viewBox='0 0 21 21' xmlns='http://www.w3.org/2000/svg'>
                                <circle cx='10.5' cy='10.5' fill='none' r='8' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' />
                            </svg>
                        }
                        <h1 className={props.todo.completed ? 'duration-200 line-through text-green-800' : 'text-white duration-200'}>
                            {props.todo.title}
                        </h1>
                    </div>
                    <svg className='h-6 w-6 md:hidden group-hover:inline duration-200 cursor-pointer text-white' onClick={handleDelete} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                    </svg>
                </div>
            )}
        </Draggable>
    )
}
