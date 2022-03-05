import React, { useState } from 'react';

import "./Todo.css"

 const Todo=()=>{

     const [task,setTask]=useState("");
     const [taskList,setTaskList]=useState([]);
     var onChangeHandler=(value)=>{
        setTask(value);
      }
      var addTaskHandler=()=>{
        var tempArray=[...taskList];
        tempArray.push(task);
        setTask("");
        setTaskList(tempArray);
      }
      var onCloseHandler=(index)=>{
        var tempArray=[...taskList]
        tempArray=tempArray.filter((ele,ind)=>{
          return index!==ind
        })
        setTaskList(tempArray);
      }
     return(
         <React.Fragment>
         <h1 data-testid="heading">Todo React app</h1>
         <input data-testid="taskField" onChange={e=>onChangeHandler(e.target.value)} value={task}></input>
         <button data-testid="addTask" onClick={addTaskHandler}>Add Task</button>
         <span data-testid="count">{taskList.length}</span>
         {taskList.map((ele,index)=>{
            return <div key={index} className="item"><h4 data-testid={index}>{ele}</h4><span data-testid={index+"close"}  onClick={()=>{onCloseHandler(index)}} className="close">X</span></div>
         })}
         </React.Fragment>
     )
 }

 export default Todo;