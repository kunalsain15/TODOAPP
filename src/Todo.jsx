import React from 'react';
import Todolist from './Todolist';
import './Todo.css';

const Todo =()=>{
    const [InputList,setInputList]=React.useState();
    const [InputData,setInputData]=React.useState([]);
    
     const UPDATE=()=>{
        setInputData((olditems)=>{
            return[...olditems,InputList];
        });
        setInputList("");
     };
     const Click =(id)=> {
        setInputData((olditems)=>{
            return olditems.filter((currElem, index)=>{
                return index !== id;
            });
        }); 
    };
    return (<>
               <div className="main">
                   <div className="card">
                       <br/>
                       <h1 className="App">ToDo List  </h1>
                       <br/>

                       <input type="text" placeholder="Add Items" value={InputList} onChange={(event)=>{setInputList(event.target.value)}}/> 
                       <button onClick={UPDATE}> +</button>

           <ol>
                         {
                             InputData.map((itemval,index)=>{
                                return  <Todolist
                                key={index} 
                                id={index}
                                text={itemval}
                                onSelect={Click}/>;
                            
                             })
                         };
           </ol>
               </div>
               
               </div> 
                     
    
    </>);
};

export default Todo;


