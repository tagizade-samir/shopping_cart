import { Reducer } from "redux";
import { IUser, UserActions } from "./types";

const initialState = {
    isAuthorized: false,
    name: '',
    id: '',
    gender: ''
}

export const userReducer: Reducer<IUser, any> = (state = initialState, action: any) => {
    const { type, payload } = action;
    switch(type) {
        case UserActions.SET_USER:
            return {
                ...state,
                ...payload,
            }
        default:
            return state;
    }
}