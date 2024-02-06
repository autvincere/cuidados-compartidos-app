import styles from "./Calendar.module.css";

const MONTHS = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const DAYWEEK = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

const Calendar = ({
  datesToCalendar,
  updateVisitStatus,
  widthContainer = "80",
}) => {
  // Agrupar las fechas por mes
  const groupedByMonth = datesToCalendar.reduce((acc, current) => {
    const month = current.date.getMonth();
    acc[month] = acc[month] || [];
    acc[month].push(current);
    return acc;
  }, {});

  // Función para obtener el primer día de la semana de un mes
  const getFirstDayOfMonth = (year, month) => {
    // Obtiene el día de la semana y ajusta el lunes como el primer día
    const firstDay = new Date(year, month, 1).getDay();
    return firstDay === 0 ? 6 : firstDay - 1;
  };

  // funcion para actualizar el estado de la visita
  const updateVisit = (id: string) => {
    updateVisitStatus(id);
  };

  return (
    <div
      id="calendar-container"
      className={styles.calendar}
      // style={dynamicStyle}
      style={{ width: `${widthContainer ? widthContainer : ""}vw` }}
    >
      {Object.keys(groupedByMonth).map((monthIndex) => {
        const days = [];
        const firstDay = getFirstDayOfMonth(
          groupedByMonth[monthIndex][0].date.getFullYear(),
          monthIndex
        );

        // Rellenar los días previos al inicio del mes
        for (let i = 0; i < firstDay; i++) {
          days.push(
            <div
              key={`empty-${i}`}
              className={`${styles.day} ${styles.empty}`}
            ></div>
          );
        }

        // Agregar los días del mes
        days.push(
          ...groupedByMonth[monthIndex].map((dayObj) => (
            <>
              <button
                key={dayObj.id}
                className={`${styles.day} ${
                  dayObj.father
                    ? `${styles.day_father}`
                    : dayObj.mother
                    ? `${styles.day_mother}`
                    : `${styles.not_assigned}`
                }`}
                onClick={() => updateVisit(dayObj.id)}
              >
                {dayObj.date.getDate()}
              </button>
            </>
          ))
        );

        return (
          <div key={monthIndex} className={styles.month}>
            <h3 className={styles.month_title}>{MONTHS[monthIndex]}</h3>
            <div className={styles.daysOfWeek}>
              {DAYWEEK.map((day, idx) => (
                <div key={idx} className={styles.dayName}>
                  {day}
                </div>
              ))}
            </div>
            <div key={`month-${monthIndex}`} className={styles.days}>
              {days}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Calendar;