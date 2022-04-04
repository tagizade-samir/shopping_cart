export const UserActions = {
    SET_USER: 'SET_USER',
};

export interface IUser {
    id: string;
    name: string;
    gender: string;
    isAuthorized: boolean;
}