export const createNote = note => {
    return {
        type : 'notes/createNote',
        payload : note
    }
}

export const removeNote = id => {
    return {
        type : 'notes/deleteNote',
        payload : id
    }
}

export const updateNote = note => {
    return {
        type : 'notes/updateNote',
        payload : note
    }
}