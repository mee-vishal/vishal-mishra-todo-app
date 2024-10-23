import Footer from './Footer';
import styles from './todoitems.module.css';
export default function TodoItems({item,setvalues,myvalues}){
    function handleDelete(item){
        setvalues(myvalues.filter((notdelitem)=>notdelitem!==item));
        // console.log("delet buton clicked for item ",item)
    }
    function handleClick(name){
        console.log("clicked")
       const newarray= myvalues.map((item)=>item.name===name?{...item,done:!(item.done)}:item);
        console.log(myvalues)
        setvalues(newarray);
        console.log(newarray)
    }
    const strikedline=item.done?styles.completed:"";
    return (<div className={styles.todoitem}><h3 className={strikedline} onClick={()=>handleClick(item.name)}>{item.name}</h3>
    <button 
    onClick={()=>{handleDelete(item)}}
    className={styles.button}>X</button></div>

)}