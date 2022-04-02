import { RootState } from "../..";

export const getIsLoading = ((state: RootState): boolean => state.categories.isLoading);