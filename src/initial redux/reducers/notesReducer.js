const initialNotes = [
    { id : '1', text : 'Musa Hesenli', bg : '#35cdsd' },
    { id : '2', text : 'Lionel Messi', bg : '#dadada' }
]
const notesReducer = (state = initialNotes, action) => {
    switch(action.type) {
        case 'notes/createNote':
            return [
                ...state,
                {
                    id : Math.floor(Math.random() * 100000) ,
                    text : action.payload.text,
                    bg : action.payload.bg
                }
            ]
        case 'notes/deleteNote':  
            return state.filter(item => item.id !== action.payload);
        case 'notes/updateNote':
            return state.filter(item => {
                if(item.id === action.payload.id) {
                    const newData = action.payload;
                    item.text = newData.text;
                    item.bg = newData.bg;
                }
                return item;
            })    
        default:
            return state;   
    }
}

export default notesReducer;