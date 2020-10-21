const initialState = {
    cards: [
        {
            _id: 1,
            name: 'Learn JS',
            status: 'todo',
            priority: 1
        },
        {
            _id: 2,
            name: 'Learn Kanban',
            status: 'progress',
            priority: 2
        },
        {
            _id: 3,
            name: 'Learn Redux',
            status: 'review',
            priority: 3
        },
        {
            _id: 4,
            name: 'Repeat everything',
            status: 'done',
            priority: 4
        }
    ],

    columns: [
        {status: 'todo', id: 1},
        {status: 'progress', id: 2},
        {status: 'review', id: 3},
        {status: 'done', id: 4}
    ]
}


const kanban = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CARD':
            return {
                ...state,
                cards: [...state.cards, {
                    _id: Math.random(),
                    name: 'task name',
                    status: 'todo',
                    priority: 1
                }]
            }
        case 'DELETE_CARD':
            const newCards = state.cards.filter(el => el._id !== action.payload)
            return {
                ...state,
                cards: newCards
            }

        case 'MOVE_RIGHT':
            const newList = state.cards.map(el => {
                if (el._id === action.payload) {
                    const colStatuses = state.columns.map(el => el.status);
                    return {...el, status: colStatuses[colStatuses.indexOf(el.status) + 1]}
                } else {
                    return el
                }
            })
            return {...state, cards: newList}


        default:
            return state
    }
}

export default kanban;