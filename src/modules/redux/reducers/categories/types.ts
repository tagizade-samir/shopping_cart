export const CategoriesActions = {
    SET_IS_LOADING: 'SET_IS_LOADING',
    SET_CATEGORIES_DATA: 'SET_CATEGORIES_DATA',
};

export interface ICategory {
    id: number;
    name: string;
    url: string;
}