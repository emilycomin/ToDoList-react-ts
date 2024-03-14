import { ChangeEvent, useState } from "react";
import Styles from "./App.module.css";
import { Header } from "./components/Header";
import { TasksHeader } from "./components/TasksHeader";
import { PlusCircle } from "@phosphor-icons/react";
import { TasksEmpty } from "./components/TasksEmpty";
import { NewTask } from "./components/NewTask";

// id: crypto.randomUUID()
interface tasks {
  id: string;
  content: string;
  conclued: boolean;
}
export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState<tasks[]>(() => {
    //pegando dados do localsotorage
    const tasksFromLocalStorage = localStorage.getItem("tasksOnLocalStorage");
    if (tasksFromLocalStorage) {
      return JSON.parse("tasksOnLocalStorage");
    }
    return [];
  });
  //fazer um estado para acompanhar a mudança das tarefas checadas. em TasksHeader {tarefasConcluidas}
  //será quantos itens estão checados dentro do estado

  //-------------------------------------------------PEGANDO VALOR DA TEXTAREA
  function handleValueInput(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setInputValue(event.target.value);
  }
  //------------------------------------CRIANDO A NOVA TAREFA E RENDERIZANDO EM TELA
  function handleCreateNewTask() {
    if (!inputValue) {
      alert("Escreva uma tarefa");
      return;
    }
    const newTasks = {
      id: crypto.randomUUID(),
      content: inputValue,
      conclued: false,
    };
    //salvando a nova tarefa em uma variável para podermos usar em outras ocasiões
    const saveNewTask = [newTasks, ...tasks];
    setTasks(saveNewTask);
    //salvando no localStorage
    localStorage.setItem("tasksOnLocalStorage", JSON.stringify(saveNewTask));
    setInputValue("");
  }

  //-------------------------------------------PEGANDO O VALORE DE CHECKED

  const counterTaskChecked = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.conclued) {
      return prevValue + 1;
    }

    return prevValue;
  }, 0);

  function handleIsChecked({ id, value }: { id: string; value: boolean }) {
    const updateTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, conclued: value };
      }
      return { ...task };
    });
    setTasks(updateTasks);
  }
  //--------------------------------------- DELETANDO A TAREFA
  function handleRemoveTask(id: string) {
    //quuero fitrar pra manter na lista apenas os comentárrioss que forem diferentes do id
    const deletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(deletingTasks);
    localStorage.setItem("tasksOnLocalStorage", JSON.stringify(deletingTasks));
  }
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
          counterTaskChecked={counterTaskChecked}
        />
        <div className={Styles.tasksContainer}>
          {tasks.length > 0 ? (
            tasks.map((task) => {
              return (
                <NewTask
                  handleRemoveTask={handleRemoveTask}
                  tasks={task}
                  key={task.id}
                  handleIsChecked={handleIsChecked}
                />
              );
            })
          ) : (
            <TasksEmpty />
          )}
        </div>
      </div>
    </div>
  );
}
