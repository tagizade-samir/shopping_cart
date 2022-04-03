import { RootState } from "../..";

export const selectSubCategories = ((state: RootState): Array<any> => state.subCategories.data);

export const selectSelectedSubCategory = ((state: RootState): number => state.subCategories.selectedSubCategory);