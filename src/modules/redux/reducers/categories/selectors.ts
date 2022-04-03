import { RootState } from "../..";

export const selectIsLoading = ((state: RootState): boolean => state.categories.isLoading);

export const selectCategories = ((state: RootState): Array<any> => state.categories.data);