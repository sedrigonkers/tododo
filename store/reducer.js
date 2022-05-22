export default function reducer(state, action) {
    switch (action.type) {
        case 'ADD-NOTE':
            return [...state, { title: 'Кровать', content: action.payload, id: 4, isDone: true },]
        default:
            return state
    }
}