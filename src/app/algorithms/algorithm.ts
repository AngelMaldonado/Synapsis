import { Category } from "./category";

export interface Algorithm {
  name: string;
  category: Category;

  run(): void;
}
