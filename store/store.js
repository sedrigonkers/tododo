import reducer from './reducer'

const store = {
    state: [
        { title: 'Покорми собаку', content: 'насыпь ей кашу', id: 1, isDone: false },
        { title: 'Приложение', content: 'Написать мобильное приложение на react native', id: 2, isDone: true },
    ],

    getState() { return this.state },
    
    getSectionsState(state) {
        if (!state) {return console.error('invalid data')}
        return [
            { title: 'To Do', data: state.filter((el) => el.isDone === true) },
            { title: 'Done', data: state.filter((el) => el.isDone === false) }
        ]
    },

    changeNoteSection(state) {
    }
}

// console.log(store.changeNoteSection(store.state))

export default store