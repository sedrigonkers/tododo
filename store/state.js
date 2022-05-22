const store = {
    state: [
        { title: 'Покорми собаку', content: 'насыпь ей кашу', id: 1, isDone: false },
        { title: 'Приложение', content: 'Написать мобильное приложение на react native', id: 2, isDone: true },
        { title: 'Приложение', content: 'Написать мобильное приложение на react native', id: 2, isDone: false },
        { title: 'Приложение', content: 'Написать мобильное приложение на react native', id: 2, isDone: false },
        { title: 'Приложение', content: 'Написать мобильное приложение на react native', id: 2, isDone: true },
        { title: 'Приложение', content: 'Написать мобильное приложение на react native', id: 2, isDone: true },
    ],

    getState() { return this.state },
    
    getSectionsState() {
        return [
            { title: 'To Do', data: this.state.filter((el) => el.isDone === true) },
            { title: 'Done', data: this.state.filter((el) => el.isDone === false) }
        ]
    }
}

export default store