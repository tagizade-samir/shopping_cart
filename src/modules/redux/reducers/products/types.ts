export const ProductsActions = {
    SET_PRODUCTS_DATA: 'SET_PRODUCTS_DATA',
    SET_IS_LOADING_PRODUCTS: 'SET_IS_LOADING_PRODUCTS',
    SET_PRODUCTS_MODAL_STATE: 'SET_PRODUCTS_MODAL_STATE',
};

export interface IProduct {
    id: number;
    category_id: number;
    sub_category_id: number;
    image_url: string;
    name: string;
    price: number;
    description: string;
}