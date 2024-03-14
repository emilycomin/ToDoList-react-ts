import Styles from "./NewTask.module.css";
import { GoTrash } from "react-icons/go";

interface newTaskProps {
  tasks: { id: string; content: string; conclued: boolean };
  handleRemoveTask: (id: string) => void;
  handleIsChecked: ({ id, value }: { id: string; value: boolean }) => void;
}
export function NewTask({
  tasks,
  handleRemoveTask,
  handleIsChecked,
}: newTaskProps) {
  function handleTaskToggle() {
    handleIsChecked({ id: tasks.id, value: !tasks.conclued });
  }

  return (
    <div className={Styles.newTaskContainer}>
      <label onClick={handleTaskToggle}>
        <input type="checkbox" readOnly checked={tasks.conclued} />
      </label>
      {/* aqui entra o valor que foi digitado no input */}
      <p>{tasks.content}</p>
      <button type="button" onClick={() => handleRemoveTask(tasks.id)}>
        <GoTrash />
      </button>
    </div>
  );
}
