import Styles from "./Header.module.css";
import logoToDo from "../assets/logoToDo.svg";

export function Header() {
  return (
    <div className={Styles.headerContent}>
      <img src={logoToDo} alt="Logo com ícone de foguete e escrito To Do" />
    </div>
  );
}
