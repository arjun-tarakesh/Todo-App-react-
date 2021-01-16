import React, {useState} from "react"
import{
    FormGroup,
    Form,
    Input,
    InputGroup,
    InputGroupAddon,
    Button,
    Container
} from "reactstrap";
import {v4} from "uuid"
import "../App.css"

const TodoForm = ({addTodos}) => {
    const [todoString, setTodoString] = useState("")

    const handleSubmit= e=>{
        e.preventDefault()
        if (todoString === "") {
            return alert("please fill")
        }

        const todo ={
            todoString,
            id: v4()
        }
        //TODO:
        addTodos(todo)

        setTodoString("")
    }



    return(
        <div >
        <Form onSubmit={handleSubmit} className="forms" >
            <FormGroup >
                <InputGroup>
                    <Input 
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="Enter a Todo"
                    value={todoString}
                    onChange={e => setTodoString(e.target.value)}
                    />
                    <InputGroupAddon addonType="prepend">
                        <Button
                        color="success"
                        >ADD TODO</Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
        </div>
    )
}

export default TodoForm;