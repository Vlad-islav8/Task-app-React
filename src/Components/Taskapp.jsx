import styles from '../styles/Taskapp.module.css';
import {Tasks} from './Tasks.jsx';
import {useState, useRef} from 'react';
import cross from '../images/cross.svg';

export function Taskapp(props) {
    const [modal, setModal] = useState(styles.notactive);

    const headRef = useRef(null)
    const textRef = useRef(null)

    function handleClick() {
        if (headRef.current.value === '') {
            alert('Заголовк заполнен не корректно')
        } else if (textRef.current.value === '') {
            alert('текст заполнен не корректно')
        } else {
            props.store.addTask(headRef.current.value, textRef.current.value)
            headRef.current.value = ''
            textRef.current.value = ''
            setModal(styles.notactive)
        }
    }

    return (
        <div className={styles.taskApp}>
            <div className={styles.taskAppWrapper}>
                <h1 title='Developer is Fedorov Vlad'>Task app</h1>
                <button className={styles.taskAdd} onClick={() => setModal(`${styles.active}`)}>Добавить задачу</button>
                <div className={`${styles.modal} ${modal}`}>
                    <div className={styles.modalExit}>
                        <button className={styles.modalExitBtn} onClick={() => setModal(`${styles.notactive}`)}><img
                            src={cross} alt="Закрыть"/></button>
                    </div>

                    <div className={styles.addTaskWrapper}>
                        <form action="">
                            <div className={styles.textEditWrapper}>
                                <div className={styles.input}>
                                    <input type="text" ref={headRef} placeholder='Заголовок' required/>
                                </div>
                                <textarea placeholder='Заметка' name="" id="" cols="30" rows="10" ref={textRef}
                                          required></textarea>
                            </div>
                            <input className={styles.submit} type="submit" value='Добавить задачу'
                                   onClick={handleClick}/>
                        </form>
                    </div>
                </div>
            </div>
            <Tasks store={props.store}/>

        </div>
    )
}

