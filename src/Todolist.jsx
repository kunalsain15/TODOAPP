import React from 'react';

const Todolist =(props)=>{
   
  return(
  
      <>
          <div className="todo-style">
                <i className="fa fa-window-close" 
                   onClick={()=>{
                     props.onSelect(props.id);
            }}/>
                       <li>{props.text}</li>
           </div>
      </>
  ); 
};

export default Todolist;