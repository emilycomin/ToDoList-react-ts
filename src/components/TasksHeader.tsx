import Styles from "./TasksHeader.module.css";

interface tasksHeaderProps {
  tarefasCriadas: number;
  tarefasConcluidas: number;
}
export function TasksHeader({
  tarefasCriadas,
  tarefasConcluidas,
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
          {tarefasCriadas} de {tarefasConcluidas}
        </span>
      </div>
    </div>
  );
}
