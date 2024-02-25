export type AgreedTime = "" | "1 week" | "middle month" | "month";

export type StartsWith = "father" | "mother" | "";

export interface ICareTime {
    setAgreedTime: () => void; // Debe coincidir con la definición en App.tsx
}

export interface IChooseParent {
    setStartsWith: () => void; // Debe coincidir con la definición en App.tsx
}

export interface IDatesCalendar {
    id: string;
    date: Date;
    father: boolean;
    mother: boolean;
    check: boolean;
}

export interface ISchedule {
    fatherDays: number;
    daysInFavorFather: number;
    motherDays: number;
    daysInFavorMother: number;
    datesToCalendar: IDatesCalendar[];
    // eslint-disable-next-line no-unused-vars
    updateVisitStatus: (id: string) => void;
}

export interface ICalendar {
    datesToCalendar: IDatesCalendar[];
    // eslint-disable-next-line no-unused-vars
    updateVisitStatus: (id: string) => void;
    widthContainer?: string;
}
