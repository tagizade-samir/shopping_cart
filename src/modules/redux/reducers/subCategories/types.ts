export const SubCategoriesActions = {
    SET_SUB_CATEGORIES_DATA: 'SET_SUB_CATEGORIES_DATA',
    SET_SELECTED_SUB_CATEGORY: 'SET_SELECTED_SUB_CATEGORY',
};

export interface ISubCategory {
    id: number;
    category_id: number;
    image_url: string;
    name: string;
}