export default function reducer(state, action) {
    switch (action.type) {
        case 'add-note':
            return [...state, { title: action.payload.title, content: action.payload.content, id: 4, isDone: true },]

        case 'change-note-section':
            // return console.log(state.filter((el) => el.id === action.payload.id))
            // return console.log(state)

        default:
            return state
    }
}