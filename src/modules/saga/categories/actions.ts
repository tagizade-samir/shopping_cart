import { CategoriesSagaActions } from "./types";

export const getAllCategoriesSaga = () => ({
    type: CategoriesSagaActions.GET_ALL_CATEGORIES
});