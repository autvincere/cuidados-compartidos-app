import FamilyIntro from "../assets/img/familia_intro.svg";
import styles from "./CareTime.module.css";

const CareTime: React.FC = ({ setAgreedTime }) => {
  return (
    <>
      <h1 className={styles.align_title__image}>
        ¿Como deseas dividir las visitas?
      </h1>
      <img
        className={styles.central_image}
        src={FamilyIntro}
        alt="familia_intro"
      />
      <p>
        Las visitas de dividirán en partes iguales para ambos padres. Escoge la
        modalidad que mas les acomode teniendo siempre en cuenta el bienestar
        del niño.
      </p>
      <div className={styles.container_buttons}>
        <button
          className={styles.button}
          onClick={() => setAgreedTime("1 week")}
        >
          1 Semana
        </button>
        <button
          className={styles.button}
          onClick={() => setAgreedTime("middle month")}
        >
          Mitad de mes
        </button>
        <button
          className={styles.button}
          onClick={() => setAgreedTime("month")}
        >
          Mes Completo
        </button>
      </div>
    </>
  );
};

export default CareTime;
