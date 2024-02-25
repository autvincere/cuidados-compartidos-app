import { ReactElement } from "react";
import styles from "./ChooseParent.module.css";

// Types
import { IChooseParent } from "../types";

const ChooseParent = ({ setStartsWith }: IChooseParent): ReactElement => {
    return (
        <>
            {" "}
            <h1 className={styles.align_title__image}>
                ¿Quién empezara con los cuidados?
            </h1>
            <p>
                Selecciona quien sera el primero en encargarse de los cuidados.
            </p>
            <div>
                <button
                    type="button"
                    onClick={() => {
                        setStartsWith("father");
                    }}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <img
                        src="url_de_tu_imagen"
                        alt="Función de la imagen"
                        style={{ marginRight: "8px" }}
                    />
                    <span>Pápa</span>
                </button>
                <button
                    type="button"
                    onClick={() => {
                        setStartsWith("mother");
                    }}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <img
                        src="url_de_tu_imagen"
                        alt="Función de la imagen"
                        style={{ marginRight: "8px" }}
                    />
                    <span>Máma</span>
                </button>
            </div>
        </>
    );
};

export default ChooseParent;
