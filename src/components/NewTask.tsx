import Styles from "./NewTask.module.css";
import { GoTrash } from "react-icons/go";

interface newTaskProps {
  content: string;
}
export function NewTask({ content }: newTaskProps) {
  return (
    <div className={Styles.newTaskContainer}>
      <label>
        <input type="checkbox" />
      </label>
      {/* aqui entra o valor que foi digitado no input */}
      <p>{content}</p>
      <button>
        <GoTrash />
      </button>
    </div>
  );
}
