import Styles from "./TasksHeader.module.css";

interface tasksHeaderProps {
  tarefasCriadas: number;
  counterTaskChecked: number;
}
export function TasksHeader({
  tarefasCriadas,
  counterTaskChecked,
}: tasksHeaderProps) {
  return (
    // Este é o estilo de cada tarefa.

    <div className={Styles.tasksHeader}>
      <div className={Styles.tarefasCriadas}>
        <p>Tarefas criadas</p> <span>{tarefasCriadas}</span>
      </div>
      <div className={Styles.tarefasConcluidas}>
        <p>Concluidas</p>{" "}
        <span>
          {counterTaskChecked} de {tarefasCriadas}
        </span>
      </div>
    </div>
  );
}
