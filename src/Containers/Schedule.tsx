import Calendar from "../Components/Calendar/Calendar";
// Types
import { ISchedule } from "../types";

const Schedule = ({
    fatherDays,
    daysInFavorFather,
    motherDays,
    daysInFavorMother,
    datesToCalendar,
    updateVisitStatus,
}: ISchedule) => {
    return (
        <div
            style={{
                display: "flex",
                //   justifyContent: "space-around",
                //   alignItems: "flex-start",
                width: "100vw",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "34vw",
                }}
            >
                <div>
                    <h3>Días con el padre: {fatherDays}</h3>
                    <h4>Días a favor: {daysInFavorFather}</h4>
                </div>
                <div>
                    <h3>Días con la madre: {motherDays}</h3>
                    <h4>Días a favor: {daysInFavorMother}</h4>
                </div>
            </div>
            <Calendar
                datesToCalendar={datesToCalendar}
                updateVisitStatus={updateVisitStatus}
            />
        </div>
    );
};

export default Schedule;
