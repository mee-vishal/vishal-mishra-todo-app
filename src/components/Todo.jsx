import { useState } from "react";
import TodoItems from "./TodoItems";
import styles from './input.module.css';
import TodoFooter from "./Footer";
import Footer from "./Footer";
export default function Todo(){
    const [myval,setMyVal]=useState({name:"",done:false});
    const [myvalues,setMyValues]=useState([]);
const totalvalue=myvalues.length;
const dublicatemyvalues=myvalues.slice().sort((a,b)=>Number(a.done)-Number(b.done));
function handlevalue(value){
return (myvalues.filter((object)=>{object.name===value}));
}
    function handleSubmit(e){
     
        
        e.preventDefault();
        if(myvalues.filter)
setMyValues([...myvalues,myval]);
setMyVal({name:"",done:false})


    }
    const workcompleted=myvalues.filter((item)=>item.done).length;
   return (<div className={styles.input_and_button_div}>
    <form onSubmit={handleSubmit} className={styles.forms}>
    <div className={styles.formsdiv}>
<input type="text"  placeholder="enter todo item" className={styles.inputform} onChange={(e)=>{setMyVal({name:e.target.value,done:false})}} value={myval.name}></input>
<button type="submit" className={styles.button}>click here </button>
</div>
</form>
{dublicatemyvalues.map((item)=>(
    <TodoItems key={item.name} item={item} setvalues={setMyValues} myvalues={myvalues}/>
    
))}
<Footer workcompleted={workcompleted} totalvalue={totalvalue}/>
 {/* work: {workcompleted} */}
    </div>
 
);
}