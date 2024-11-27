import styles from '../styles/Task.module.css'
import { useState, useRef } from 'react'
import { deleteTask } from '../state/state'
import deleteImg from '../images/delete.svg'
import editImg from '../images/edit.svg'

export function Task(props) {
    const editValue = useRef(null)
    const [headValue, setHeadValue] = useState(props.head)
    const [textValue, settextValue] = useState(props.text)

    const handleHead = (e) => {
        setHeadValue(e.target.value);

    }
    const handleText = (e) => {
        settextValue(e.target.value);
    }

    const delTaskClick = () => {
        deleteTask(props.id)
    }

    const [edit, setEdit] = useState(styles.notactive)
    const [notedit, setNotedit] = useState(styles.active)
    

    let EditMode = () => {
        console.log(props.Bgcolor)
        if (edit == styles.notactive) {
            setEdit(styles.active)
            setNotedit(styles.notactive)
        } else {
            setEdit(styles.notactive)
            setNotedit(styles.active)
        }

    }


    return (
        <div className={styles.task} style={{backgroundColor: props.Bgcolor}}>
            <div className={styles.taskInfo}>
                <h2 className={`${notedit}`}>{headValue}</h2>
                <input value={headValue} onChange={handleHead}  ref={editValue} type="text"  className={`${edit}`}/>
                <p className={`${notedit}`} >{textValue} {props.id}</p>
                <div className={`${styles.textAria} ${edit}`}>
                    <textarea value={textValue} onChange={handleText} ref={editValue} name="" id="" ></textarea>
                </div>
            </div>
            <div className={styles.taskAction}>
                <button onClick={EditMode}> <img src={editImg} alt="удалить" title='Удалить'/> </button>
                <button onClick={delTaskClick}><img src={deleteImg} alt="удалить" title='Удалить'/> </button>
            </div>
        </div>
    )
}
