import {Task} from "./Task.jsx";
import styles from '../styles/Tasks.module.css'
export function Tasks(props) {

    const newTask = props.store.state.tasks.map((el) => {
        return (
            <Task id={el.id} head={el.head} text={el.text} deleteTask={props.store.deleteTask} Bgcolor={el.Bgcolor}/>
            
        )

    })

    return (
        <div className={styles.tasks}>
            {newTask }
        </div>
    )
}

