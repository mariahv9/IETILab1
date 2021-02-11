import React  from 'react';
import { Todo } from './Todo'

export class TodoList extends React.Component { 
    
    render() {
        const data = this.props.items;
		return data.map((i) => (
			<Todo key = { i.text }
                text = { i.text }
                priority = { i.priority }
                dueDate = { i.dueDate.toString() }
            />
            )
        );
    }
}