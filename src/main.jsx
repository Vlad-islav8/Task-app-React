import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import store from "./state/state.js";


let renderTree = (store) => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App store={store} />
    </StrictMode>
  )

}

renderTree(store)

store.rerenderTree(renderTree)

export default renderTree