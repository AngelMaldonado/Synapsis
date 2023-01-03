import { Category } from "./category";

export interface Algorithm {
  algorithm: string;
  category: Category;

  run(): void;
}
