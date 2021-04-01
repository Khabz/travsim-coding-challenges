import React from 'react';
import TodoCard from './TodoCard';

const TodoList = ({title, cards}) => {
    return (
        <div className="todolist__container">
            <h3>{title}</h3>
            { cards.map(card => <TodoCard text={card.text} key={card.id}/> ) }
        </div>
    )
}

export default TodoList;

