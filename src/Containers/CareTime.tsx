import { ReactElement } from "react";
import FamilyIntro from "../assets/img/familia_intro.svg";
import styles from "./CareTime.module.css";

// Types
import { ICareTime } from "../types";

const CareTime = ({ setAgreedTime }: ICareTime): ReactElement => {
    return (
        <>
            <h1 className={styles.caretime__title}>
                ¿Como deseas dividir las visitas?
            </h1>
            <img
                className={styles.caretime__central_image}
                src={FamilyIntro}
                alt="familia_intro"
            />
            <p>
                Las visitas de dividirán en partes iguales para ambos padres.
                Escoge la modalidad que mas les acomode teniendo siempre en
                cuenta el bienestar del niño.
            </p>
            <div className={styles.caretime__container_buttons}>
                <button
                    className={styles.caretime__button}
                    onClick={() => setAgreedTime("1 week")}
                >
                    1 Semana
                </button>
                <button
                    className={styles.caretime__button}
                    onClick={() => setAgreedTime("middle month")}
                >
                    Mitad de mes
                </button>
                <button
                    className={styles.caretime__button}
                    onClick={() => setAgreedTime("month")}
                >
                    Mes Completo
                </button>
            </div>
        </>
    );
};

export default CareTime;
