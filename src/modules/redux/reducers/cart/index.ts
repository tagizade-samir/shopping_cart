const initialState = {
    items: []
}

export const cartReducer = (state = initialState, action: any) => {
    const { type, payload } = action;
    switch(type) {
        default:
            return state;
    }
}