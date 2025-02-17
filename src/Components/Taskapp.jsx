import styles from '../styles/Taskapp.module.css';
import { Tasks } from './Tasks.jsx';
import { useState, useRef } from 'react';
import cross from '../images/cross.svg';
import colorImg from '../images/colorSwitch.svg'
export function Taskapp(props) {
    const [modal, setModal] = useState(styles.notactive);
    const headRef = useRef(null)
    const textRef = useRef(null)
    const colorRef = useRef(null)
    const colorTextRef = useRef(null)
    const [BgColor, setBgcolor] = useState('#C0C8C2')
    const [textColor, settextcolor] = useState('#1A2D42')

    let color = '#D4D8DD'
    function colorFunk() {
        setBgcolor(colorRef.current.value)
    }

    function colorTextFunk() {
        settextcolor(colorTextRef.current.value)
    }

    function handleClick() {
        if (headRef.current.value === '') {
            alert('Заголовк заполнен не корректно')
        } else if (textRef.current.value === '') {
            alert('текст заполнен не корректно')
        } else {
            props.store.addTask(headRef.current.value, textRef.current.value, BgColor, textColor)
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
                            src={cross} alt="Закрыть" /></button>
                    </div>

                    <div className={styles.addTaskWrapper}>

                        <form action="" style={{ backgroundColor: BgColor }}>


                            <div className={styles.textEditWrapper}>
                                <div className={styles.input}>
                                    <input type="text" ref={headRef} placeholder='Заголовок' required style={{ color: textColor }} />
                                </div>
                                <textarea placeholder='Заметка' name="" id="" cols="30" rows="10" ref={textRef} required style={{ color: textColor }}></textarea>

                                <div className={styles.colorBnt}>
                                    <div className={styles.colorBntSubmit}>
                                        <label htmlFor="bgColorPicker">Фон:</label>
                                        <img src={colorImg} alt="Выберите цвет" onClick={() => colorRef.current.click()} style={{ width: '40px', height: '40px' }} />
                                        <input id="bgColorPicker" ref={colorRef} type="color" onChange={colorFunk} value={color} style={{ display: 'none' }} />
                                    </div>
                                    <div className={styles.colorBntSubmit}>
                                        <label htmlFor="textColorPicker">Текст:</label>
                                        <img src={colorImg} alt="Выберите цвет" onClick={() => colorTextRef.current.click()} style={{ width: '40px', height: '40px' }} />
                                        <input id="textColorPicker" ref={colorTextRef} type="color" onChange={colorTextFunk} value={color} style={{ display: 'none' }} />
                                    </div>
                                </div>



                            </div>
                            <input className={styles.submit} type="submit" value='Добавить задачу'
                                onClick={handleClick} />
                        </form>
                    </div>
                </div>
            </div>
            <Tasks store={props.store} Bgcolor={BgColor} color={textColor} />

        </div>
    )
}

