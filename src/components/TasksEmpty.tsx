import { HiClipboardList } from "react-icons/hi";
import Styles from "./TasksEmpty.module.css";

export function TasksEmpty() {
  return (
    <div className={Styles.tasksEmptyConteiner}>
      <HiClipboardList />
      <h2>você ainda não tem tarefas cadastradas</h2>
      <h3>Crie tarefas e organize seus itens a fazer</h3>
    </div>
  );
}
