let observer = (callback) => {
    console.log('callback is not defindet')
}

let store = {
    state: {
        tasks: [
            

        ],
    },

    rerenderTree(callback) {
        observer = callback
    },

    addTask(headValue, textValue) {
        this.state.tasks.push({ head: headValue, text: textValue, id: this.state.tasks.length })
        observer(this)

    },

    deleteTask(id) {
        this.state.tasks = this.state.tasks.filter(el => el.id !== id)
        observer(this);
    },

}

export let deleteTask = (id) => {
    store.state.tasks = store.state.tasks.filter(el => el.id !== id)
    observer(store);
}

console.log(store.state.tasks)


export default store