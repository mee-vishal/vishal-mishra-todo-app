import styles from './footer.module.css';

export default function Footer({workcompleted,totalvalue}){
    return(
        <div className={styles.footer}>
            <div className={styles.workdisplay}>  <h1 >Completed Todos:{workcompleted}</h1></div>
      <div className={styles.workdisplay}> <h1 >Total:{totalvalue}</h1></div>
       
        
        </div>
    );
}