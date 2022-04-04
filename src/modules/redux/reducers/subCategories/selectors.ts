import { RootState } from "../..";
import { ISubCategory } from "./types";

export const selectSubCategories = ((state: RootState): Array<ISubCategory> => state.subCategories.data);

export const selectSelectedSubCategory = ((state: RootState): number => state.subCategories.selectedSubCategory);