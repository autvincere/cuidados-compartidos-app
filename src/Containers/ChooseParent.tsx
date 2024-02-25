import { ReactElement } from "react";
import styles from "./ChooseParent.module.css";

// Types
import { IChooseParent } from "../types";

const ChooseParent = ({ setStartsWith }: IChooseParent): ReactElement => {
    return (
        <div className={styles.choose_parent__wrapper}>
            <h1 className={styles.align_title__image}>
                ¿Quién empezara con los cuidados?
            </h1>
            <p>
                Selecciona quien sera el primero en encargarse de los cuidados.
            </p>
            <div className={styles.choose_parent__container_buttons}>
                <button
                    type="button"
                    className={styles.choose_parent__button}
                    onClick={() => {
                        setStartsWith("father");
                    }}
                >
                    {/* <img
                        src="url_de_tu_imagen"
                        alt="Función de la imagen"
                        style={{ marginRight: "8px" }}
                    /> */}
                    <span>Pápa</span>
                </button>
                <button
                    type="button"
                    className={styles.choose_parent__button}
                    onClick={() => {
                        setStartsWith("mother");
                    }}
                >
                    {/* <img
                        src="url_de_tu_imagen"
                        alt="Función de la imagen"
                        style={{ marginRight: "8px" }}
                    /> */}
                    <span>Máma</span>
                </button>
            </div>
        </div>
    );
};

export default ChooseParent;
