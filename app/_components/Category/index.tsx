import styles from "./index.module.css";
import { Cotegory } from "@/app/_libs/microcms";

type Props = {
  category: Cotegory;
};

export default function Category({ category }: Props) {
  return <span className={styles.tag}>{category.name}</span>;
}
