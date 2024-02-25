import { useRef } from "react";

import html2canvas from "html2canvas";

// Components
import Calendar from "../Components/Calendar/Calendar";

// Types
import { ISchedule } from "../types";

// Styles
import styles from "./Schedule.module.css";

const Schedule = ({
    fatherDays,
    daysInFavorFather,
    motherDays,
    daysInFavorMother,
    datesToCalendar,
    updateVisitStatus,
}: ISchedule) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const handleSaveAsImage = () => {
        const container = containerRef.current;

        if (!container) {
            console.error("No se pudo encontrar el contenedor");
            return;
        }
        // Opciones para html2canvas, incluyendo el color de fondo
        const options = {
            backgroundColor: "#000", // Establece el color de fondo deseado aquí
        };

        html2canvas(container, options).then(canvas => {
            const imgURL = canvas.toDataURL("image/jpeg", 1); // 0.7 es el 70% de calidad

            const link = document.createElement("a");
            link.href = imgURL;
            link.download = "calendario-crianza.jpg";
            link.click();
        });
    };

    return (
        <div className={styles.schedule__wrapper} ref={containerRef}>
            <aside className={styles.schedule__aside}>
                <div>
                    <h3>Días con el padre: {fatherDays}</h3>
                    <h4>Días a favor: {daysInFavorFather}</h4>
                </div>
                <div>
                    <h3>Días con la madre: {motherDays}</h3>
                    <h4>Días a favor: {daysInFavorMother}</h4>
                </div>
                <button
                    className={styles.schedule__button}
                    onClick={handleSaveAsImage}
                >
                    Guardar imagen
                </button>
            </aside>
            <Calendar
                datesToCalendar={datesToCalendar}
                updateVisitStatus={updateVisitStatus}
            />
        </div>
    );
};

export default Schedule;
