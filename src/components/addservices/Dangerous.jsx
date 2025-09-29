import style from "./Dangerous.module.css";
import DangerousImg from "../../assets/images/Dangerous.jpg";
const Dangerous = () => {
  return (
    <div>
      <h2>Небезпечні вантажі</h2>
      <img className={style.dangerousImg} src={DangerousImg} alt="Dangerous" />
      <p>
        Перевезення небезпечних вантажів згідно міжнародних стандартів ADR/IMO,
        підготовка документації та спеціальна упаковка.
      </p>
    </div>
  );
};

export default Dangerous;
