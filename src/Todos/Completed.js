import React from 'react'

const Completed = (Todosdata) => {
    
  return (
    <div style={{
        backgroundColor: Todosdata.Todosdata.completed ? "green" : "red",
        color: "white",
        padding: 8,
        display: "flex",
        alignSelf: "self-end",
        borderRadius: 12,
      }}>
         {Todosdata.Todosdata.completed ? "Completed" : "Not Completed"}
         </div>
  )
}

export default Completed;