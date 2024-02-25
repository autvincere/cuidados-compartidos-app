import React, { Suspense, useState, useEffect, useCallback } from "react";
import styles from "./App.module.css";
import { v4 as uuidv4 } from "uuid";

// Importaciones dinámicas
const CareTime = React.lazy(() => import("./Containers/CareTime"));
const Schedule = React.lazy(() => import("./Containers/Schedule"));
const ChooseParent = React.lazy(() => import("./Containers/ChooseParent"));

// Types
import { AgreedTime, IDatesCalendar, StartsWith } from "./types";
// // Define tu mapa de componentes
// const componentMap = {
//   chooseParent: ChooseParent,
//   careTime: CareTime,
//   schedule: Schedule,
// };

function App() {
    const [agreedTime, setAgreedTime] = useState<AgreedTime>("");
    const [startsWith, setStartsWith] = useState<StartsWith>("");

    const [datesToCalendar, setDatesToCalendar] = useState<IDatesCalendar[]>(
        [],
    );
    const [fatherDays, setFatherDays] = useState<number>(0);
    const [motherDays, setMotherDays] = useState<number>(0);
    const [daysInFavorFather, setDaysInFavorFather] = useState<number>(0);
    const [daysInFavorMother, setDaysInFavorMother] = useState<number>(0);

    // const serviceDates = null;

    const generateDateRange = useCallback(() => {
        const dates = [];
        const firstDayOfYear = new Date(new Date().getFullYear(), 0, 1);
        const endDate = new Date(new Date(Date.now()).getFullYear(), 11, 31);
        while (firstDayOfYear <= endDate) {
            dates.push(new Date(firstDayOfYear));
            firstDayOfYear.setDate(firstDayOfYear.getDate() + 1);
        }
        return dates;
    }, []);
    // console.table(generateDateRange());

    // Genera las fechas semana por medio de un año y las asigna a un padre o madre
    const generateWeekByWeek = useCallback(() => {
        const dates = generateDateRange();

        return dates.map((date, index) => {
            // Calcular el número de la semana a partir del índice del día
            const weekNumber = Math.floor(index / 7);

            // Asignar turnos en base a si el número de semana es par o impar
            const firstTurn = weekNumber % 2 === 0;

            // Determinar si es el turno del padre basado en el parámetro "startsWith"
            const isFatherTurn =
                startsWith === "father" ? firstTurn : !firstTurn;

            return {
                date,
                id: uuidv4(),
                father: isFatherTurn,
                mother: !isFatherTurn,
                check: true,
            };
        });
    }, [generateDateRange, startsWith]);

    const updateVisitStatus = (id: string): void => {
        const updatedDates = datesToCalendar.map(dayObj => {
            if (dayObj.id === id) {
                return {
                    ...dayObj,
                    father: !dayObj.father,
                    mother: !dayObj.mother,
                };
            }
            return dayObj;
        });
        setDatesToCalendar(updatedDates);
        console.log("updatedDates= ", updatedDates);
    };

    useEffect(() => {
        if (agreedTime === "1 week") {
            setDatesToCalendar(generateWeekByWeek());
        }
    }, [agreedTime, generateWeekByWeek]);

    useEffect(() => {
        if (datesToCalendar) {
            setFatherDays(
                datesToCalendar.filter(item => item.father === true).length,
            );
            setMotherDays(
                datesToCalendar.filter(item => item.mother === true).length,
            );
        }
    }, [datesToCalendar]);

    useEffect(() => {
        if (fatherDays > motherDays) {
            setDaysInFavorFather(fatherDays - motherDays);
            setDaysInFavorMother(0);
        } else if (motherDays > fatherDays) {
            setDaysInFavorMother(motherDays - fatherDays);
            setDaysInFavorFather(0);
        } else {
            setDaysInFavorFather(0);
            setDaysInFavorMother(0);
        }
    }, [fatherDays, motherDays]);

    //   useEffect(() => {
    //     if (!serviceDates === null) {
    //     }
    //   }, [serviceDates]);

    // useEffect(() => {
    //   if (startsWith === "") {
    //     setCurrentView("chooseParent");
    //   }
    //   if (agreedTime === "") {
    //     setCurrentView("careTime");
    //   }
    //   if (datesToCalendar.length > 0) {
    //     setCurrentView("schedule");
    //   }
    // }, [startsWith, agreedTime, datesToCalendar]);

    return (
        <div className={styles.container}>
            <Suspense fallback={<div>Cargando...</div>}>
                {startsWith === "" ? (
                    <ChooseParent setStartsWith={setStartsWith} />
                ) : agreedTime === "" ? (
                    <CareTime setAgreedTime={setAgreedTime} />
                ) : datesToCalendar.length > 0 ? (
                    <Schedule
                        fatherDays={fatherDays}
                        daysInFavorFather={daysInFavorFather}
                        motherDays={motherDays}
                        daysInFavorMother={daysInFavorMother}
                        datesToCalendar={datesToCalendar}
                        updateVisitStatus={updateVisitStatus}
                    />
                ) : (
                    <h2>No cargo nada</h2>
                )}
            </Suspense>
        </div>
    );
}

export default App;
