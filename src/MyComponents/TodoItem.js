
import React from 'react'

export const TodoItem = ({todo, onDelete}) => {

    
    return (
        <>
        <div>
           <h4>{todo.title}</h4>
           <p>{todo.desc}</p>
        
           
           <button className="btn btn-sm btn-primary mx-3" >Doing</button>
           <button className="btn btn-sm btn-success mx-3">Done!</button>
           <button className="btn btn-sm btn-danger" id="del"  onClick={()=>{onDelete(todo)}}>Delete</button> 
        </div>
        <hr/> 
        </>
    )
     
}
