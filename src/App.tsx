import { ChangeEvent, useState } from "react";
import Styles from "./App.module.css";
import { Header } from "./components/Header";
import { TasksHeader } from "./components/TasksHeader";
import { PlusCircle } from "@phosphor-icons/react";
import { TasksEmpty } from "./components/TasksEmpty";
import { NewTask } from "./components/NewTask";

// id: crypto.randomUUID()
interface Tasks {
  id: string;
  content: string;
}
export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState<Tasks[]>([]);
  //fazer um estado para acompanhar a mudança das tarefas checadas. em TasksHeader {tarefasConcluidas}
  //será quantos itens estão checados dentro do estado
  function handleValueInput(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setInputValue(event.target.value);
  }

  function handleCreateNewTask() {
    if (!inputValue) {
      alert("Escreva uma tarefa");
      return;
    }
    const newTasks = {
      id: crypto.randomUUID(),
      content: inputValue,
    };
    const saveNewTask = [newTasks, ...tasks];
    setTasks(saveNewTask);
    setInputValue("");
  }
  //imutabilidade - as variaveis não sofrerm
  //alterações, nós criamos uma nova variavel na memoria.
  // function handleRemoveTask() {
  //   //quuero fitrar pra manter na lista apenas os comentárrioss que forem diferentes do id
  //   const deletingTasks = tasks.filter((task) => {
  //     return task.id !== id;
  //   });
  //   setTasks(deletingTasks);
  // }
  return (
    <div>
      <Header />

      <div className={Styles.inputContent}>
        <input
          type="text"
          placeholder="Adicionar uma nova tarefa"
          onChange={handleValueInput}
          value={inputValue}
        />
        <button onClick={handleCreateNewTask}>
          Criar <PlusCircle />
        </button>
      </div>

      <div className={Styles.tasksContent}>
        <TasksHeader
          tarefasCriadas={tasks.length}
          tarefasConcluidas={tasks.length}
        />
        <div className={Styles.tasksContainer}>
          {tasks.length > 0 ? (
            tasks.map((task) => {
              return <NewTask content={task.content} key={task.id} />;
            })
          ) : (
            <TasksEmpty />
          )}
        </div>
      </div>
    </div>
  );
}
