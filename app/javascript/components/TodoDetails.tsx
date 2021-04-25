import React from "react"
import { Link } from "react-router-dom"
import { TodoI } from "interfaces" 
 
const TodoDetails = ({ todo }: { todo: TodoI }) => {
  return (
    <>
      <div className="two-column">
        <h1>{ todo.name }</h1>
        <div className="no-wrap">
          <Link to={`/todos/${todo.id}/edit`} className="button blue">Edit</Link>
        </div>
      </div>
     
      <br />

      <dl>
        { todo.description &&
          <>
            <dt>Description</dt>
            <dd style={{whiteSpace: "pre-line"}}>{ todo.description }</dd>
          </>
        }

        { todo.due_date &&
          <>
            <dt>Due on</dt>
            <dd>
              { todo.due_date }
            </dd>
          </>
        }
      </dl>
    </>
  )
}

export default TodoDetails
