import reducer from './reducer'

const store = {
    state: [
        {
            '1': { title: 'Покорми собаку', content: 'насыпь ей кашу', id: 1, isDone: false },
            '2': { title: 'Приложение', content: 'Написать мобильное приложение на react native', id: 2, isDone: true }
        },
    ],

    getState() { return this.state },

    getSectionsState(state) {
        if (!state) { return console.error('invalid data') }
        const notesArray = []
        state.map(el => notesArray.push())
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