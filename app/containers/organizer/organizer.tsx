import { Grid } from '@material-ui/core';
import React, {Fragment, useState, FunctionComponent, ChangeEvent, useEffect, useCallback} from 'react';
import * as uuid from 'uuid';

type SomeType = (name: string) => void;

export const LogSomeItemsHook: SomeType = (name: string): void => {
    const a = name;
    console.log(a);

    useEffect(() => {
        console.log(name);
    }, [name]);
};

interface TodoItemType {
    id: string,
    description: string
}

type CheckboxPropsType = {
    value: string,
    onClick(value: string): void
};
const RenderCheckbox: FunctionComponent<CheckboxPropsType> = ({value, onClick}: CheckboxPropsType) => {
    const handler = useCallback(() => {
        onClick(value);
    }, [value, onClick]);

    return (
        <Fragment>
            <label htmlFor="isCompleted">
                <input
                    id="isCompleted"
                    type="checkbox"
                    value={value}
                    onClick={handler}
                />
                is todo completed?
            </label>
        </Fragment>
    );
};

export const Organizer: FunctionComponent = () => {
    const [name, setName] = useState<string>('');
    const [todos, setTodos] = useState<TodoItemType[]>([]);
    const changeNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    LogSomeItemsHook(name);

    const handleSetTodos = () => {
        const newTodo: TodoItemType = {
            id: uuid.v4(),
            description: name
        };

        setTodos([...todos, newTodo]);
    };

    const clearTodos = () => {
        setTodos([]);
    };

    const handleTodoComplete = (value: string) => {
        const newTodos = todos.filter((item) => item.id !== value);
        setTodos(newTodos);
    };

    return (
        <div>
            <div>
                Hi, pal. Please enter your name:
                {name}
            </div>

            <Grid container>
                <Grid item xs={12}>
                    <input
                        value={name}
                        onChange={changeNameHandler}
                        placeholder="Enter todo description, dude"
                        style={{
                            display: 'block',
                            width: '50%'
                        }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <button onClick={handleSetTodos} type="button">
                        Add todo point?
                    </button>
                    <button onClick={clearTodos} type="button">
                        Clear all todos?
                    </button>
                </Grid>
                <Grid item xs={6}>
                    added todos
                    {
                        todos.map(
                            (item: TodoItemType) => (
                                <div key={item.id}>
                                    {item.description}
                                    <RenderCheckbox
                                        value={item.id}
                                        onClick={handleTodoComplete}
                                    />
                                </div>
                            )
                        )
                    }
                </Grid>
            </Grid>
        </div>
    );
};
