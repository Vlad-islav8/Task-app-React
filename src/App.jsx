import {Taskapp} from "./Components/Taskapp.jsx";
import './styles/App.css'

function App(props) {
    return (
        <div>
            <Taskapp store={props.store} />
        </div>
    )
}

export default App
